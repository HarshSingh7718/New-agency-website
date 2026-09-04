"use client";

import {
  FormEvent,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

type FormStatus =
  | { kind: "idle"; message: "" }
  | { kind: "loading"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({
    kind: "idle",
    message: "",
  });
  const [chatBrief, setChatBrief] = useState("");

  useLayoutEffect(() => {
    const applyBrief = (brief?: string | null) => {
      const value = brief || sessionStorage.getItem("rapidgro-chat-brief");
      if (!value) return;

      setChatBrief(value);
      sessionStorage.removeItem("rapidgro-chat-brief");
    };

    const hasPrefillSignal = () =>
      new URLSearchParams(window.location.search).get("prefill") === "chat";

    // Consume a brief immediately when this page mounts from the explicit
    // chatbot handoff route. This avoids depending on a later refresh.
    if (hasPrefillSignal()) {
      applyBrief();
    }

    const handleBriefUpdate = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      applyBrief(detail);
    };

    const handlePageShow = () => {
      if (hasPrefillSignal()) {
        applyBrief();
      }
    };

    window.addEventListener("rapidgro-chat-brief-updated", handleBriefUpdate);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("rapidgro-chat-brief-updated", handleBriefUpdate);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  useEffect(() => {
    if (status.kind !== "success" && status.kind !== "error") return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStatus({ kind: "idle", message: "" });
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [status.kind]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status.kind === "loading") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus({ kind: "loading", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          companyUrl: data.get("companyUrl"),
          projectDetails: data.get("projectDetails"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setChatBrief("");
      setStatus({
        kind: "success",
        message:
          "Your message has been sent successfully. Our team can now review your project brief and will try to contact you as soon as possible.",
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again.",
      });
    }
  }

  const showAlert = status.kind === "success" || status.kind === "error";

  return (
    <>
      <form className="cform" onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="Your first name"
              required
              maxLength={80}
            />
          </div>

          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Your last name"
              required
              maxLength={80}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@company.com"
              required
              maxLength={254}
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              maxLength={40}
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="companyUrl">Company URL</label>
          <input
            id="companyUrl"
            name="companyUrl"
            type="url"
            inputMode="url"
            placeholder="https://yourcompany.com"
            maxLength={500}
          />
        </div>

        <div className="field">
          <label htmlFor="projectDetails">Project Details</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={6}
            placeholder="Tell us what you want to build, your goals, important features and timeline."
            required
            maxLength={5000}
            value={chatBrief}
            onChange={(event) => setChatBrief(event.target.value)}
          />
        </div>

        {/* Invisible bot trap */}
        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="contact-submit-row">
          <button
            type="submit"
            className="btn dark"
            data-magnetic
            disabled={status.kind === "loading"}
            aria-busy={status.kind === "loading"}
          >
            {status.kind === "loading" ? "Sending…" : "Send Message"}
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </button>

          <p className="contact-consent">
            By sending this form, you agree that the submitted information may be
            used to respond to your enquiry.
          </p>
        </div>
      </form>

      {showAlert && (
        <div
          className="contact-alert-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setStatus({ kind: "idle", message: "" });
            }
          }}
        >
          <section
            className={`contact-alert contact-alert--${status.kind}`}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="contact-alert-title"
            aria-describedby="contact-alert-message"
          >
            <button
              type="button"
              className="contact-alert__close"
              onClick={() => setStatus({ kind: "idle", message: "" })}
              aria-label="Close message"
              autoFocus
            >
              <X size={20} />
            </button>

            <div className="contact-alert__icon" aria-hidden="true">
              {status.kind === "success" ? (
                <CheckCircle2 size={30} />
              ) : (
                <AlertCircle size={30} />
              )}
            </div>

            <div className="contact-alert__content">
              <p className="contact-alert__eyebrow">
                {status.kind === "success" ? "MESSAGE SENT" : "DELIVERY FAILED"}
              </p>
              <h2 id="contact-alert-title">
                {status.kind === "success"
                  ? "Thanks — we received it."
                  : "We couldn't send that message."}
              </h2>
              <p id="contact-alert-message">{status.message}</p>
            </div>

            <button
              type="button"
              className="contact-alert__action"
              onClick={() => setStatus({ kind: "idle", message: "" })}
            >
              {status.kind === "success" ? "Done" : "Try again"}
            </button>
          </section>
        </div>
      )}
    </>
  );
}
