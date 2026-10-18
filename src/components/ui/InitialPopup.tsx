"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Building2,
  Mail,
  Phone,
  Star,
  Quote,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {useSiteSettings} from "@/sanity/SiteSettingsProvider";

export default function InitialPopup() {
  const settings = useSiteSettings();
  const popup = settings.popup;
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectDetails: "",
    website: "", // honeypot
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);

    const hasSeenPopup = sessionStorage.getItem("hasSeenInitialPopup");

    if (!hasSeenPopup && popup?.enabled) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenInitialPopup", "true");
      }, (popup.delaySeconds || 0) * 1000);

      return () => clearTimeout(timer);
    }
  }, [popup?.delaySeconds, popup?.enabled]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setIsOpen(false);
    if (status === "success") {
      setTimeout(() => {
        setStatus("idle");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          projectDetails: "",
          website: "",
        });
      }, 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    const nameParts = formData.fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "Client";

    const payload = {
      firstName,
      lastName,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      companyName: formData.companyName.trim(),
      projectDetails:
        formData.projectDetails.trim() ||
        "Consultation request submitted from website quick popup.",
      website: formData.website,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your request.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  if (!hasMounted || !popup?.enabled) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl !border !border-white/20"
            style={{
              backgroundColor: "var(--color-ink)",
              color: "var(--color-on-dark)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full !bg-white/10 hover:!bg-white/20 transition-colors !text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Left Side - Testimonial & Stats */}
            <div
              className="hidden md:flex w-full md:w-1/2 p-6 md:p-8 flex-col justify-between relative md:border-r !border-white/10"
              style={{ backgroundColor: "var(--color-dark)" }}
            >
              <div className="space-y-8">
                {/* Testimonial Card */}
                <div className="rounded-2xl p-5 mb-2! !border !border-white/10 !bg-white/5 relative">
                  <Quote className="absolute top-4 left-4 !text-[var(--color-brand-magenta)] opacity-20 w-8 h-8" />
                  <p className="relative z-10 text-xs md:text-sm leading-relaxed !text-white mt-3 mb-4 font-medium">
                    “{popup.testimonialQuote}”
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full !bg-[#10B981] flex items-center justify-center !text-white font-bold text-sm">
                      DH
                    </div>
                    <div>
                      <h4 className="font-semibold !text-white m-0">
                        {popup.testimonialName}
                      </h4>
                      <p className="text-xs !text-white/70 m-0">
                        {popup.testimonialRole}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className="!fill-[#FBBF24] !text-[#FBBF24]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2">
                  <div className="w-6 h-1.5 rounded-full !bg-[#10B981]"></div>
                  {[1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full !bg-white/20"
                    ></div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-2!">
                  {(popup.stats || []).map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl p-4 !border !border-white/10 !bg-white/5 flex flex-col justify-center"
                    >
                      <p className="text-xs !text-white/70 mb-1">{stat.label}</p>
                      <h3 className="text-2xl font-bold !text-white m-0">
                        {stat.value}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Info */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-semibold !text-white">{popup.instantHelpLabel}</p>
                  <a
                    href={`mailto:${settings.contact.email}`}
                    className="text-sm !text-[#10B981] hover:underline"
                  >
                    {settings.contact.email}
                  </a>
                </div>
                <a
                  href={settings.contact.phoneHref}
                  className="w-fit whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full !border !border-white/20 !bg-white/5 hover:!bg-white/10 transition-colors text-sm font-medium !text-[var(--color-brand-magenta)]"
                >
                  <Phone
                    size={14}
                    className="!text-[var(--color-brand-magenta)]"
                  />
                  {settings.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right Side - Dynamic Form / Message Replacement */}
            <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center relative bg-[var(--color-ink)] min-h-[420px]">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-6 px-2"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] mb-4 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                      <CheckCircle2 size={36} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#10B981] mb-1.5">
                      Submitted Successfully
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2.5">
                      {popup.successTitle}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-sm mb-6">
                      {popup.successMessage}
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full max-w-xs py-2.5 md:py-3 rounded-lg text-sm md:text-base font-bold !text-white shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 !bg-[var(--color-brand-magenta)]"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.92, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-6 px-2"
                  >
                    <div className="w-16 h-16 rounded-full bg-rose-500/15 border border-rose-500/40 flex items-center justify-center text-rose-400 mb-4 shadow-[0_0_24px_rgba(244,63,94,0.25)]">
                      <AlertCircle size={36} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">
                      Something went wrong
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2.5">
                      {popup.errorTitle}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-sm mb-6">
                      {errorMessage || popup.errorMessage}
                    </p>
                    <div className="flex w-full max-w-xs gap-3">
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="flex-1 py-2.5 md:py-3 rounded-lg text-sm font-bold !text-white shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 !bg-[var(--color-brand-magenta)]"
                      >
                        Try Again
                      </button>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="py-2.5 md:py-3 px-5 rounded-lg text-sm font-semibold !text-white/80 !bg-white/10 hover:!bg-white/20 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-4! md:mb-5!">
                      <h2 className="text-[22px] md:text-3xl font-bold mb-1.5 md:mb-2 leading-tight !text-[var(--color-brand-magenta)]">
                        {popup.heading}
                      </h2>
                      <p className="!text-white/80 text-xs md:text-sm mt-1!">
                        {popup.description}
                      </p>
                    </div>

                    <form
                      className="space-y-2.5! md:space-y-3!"
                      onSubmit={handleSubmit}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <User
                            size={16}
                            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 !text-white/50 scale-90 md:scale-100"
                          />
                          <input
                            type="text"
                            name="fullName"
                            placeholder={popup.fullNamePlaceholder}
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            maxLength={100}
                            className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2 md:py-2.5 pl-9 md:pl-10 pr-3 md:pr-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                          />
                        </div>
                        <div className="relative">
                          <Building2
                            size={16}
                            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 !text-white/50 scale-90 md:scale-100"
                          />
                          <input
                            type="text"
                            name="companyName"
                            placeholder={popup.companyPlaceholder}
                            value={formData.companyName}
                            onChange={handleChange}
                            maxLength={100}
                            className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2 md:py-2.5 pl-9 md:pl-10 pr-3 md:pr-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 !text-white/50 scale-90 md:scale-100"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder={popup.emailPlaceholder}
                          required
                          value={formData.email}
                          onChange={handleChange}
                          maxLength={254}
                          className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2 md:py-2.5 pl-9 md:pl-10 pr-3 md:pr-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                        />
                      </div>

                      <div className="relative flex">
                        <div className="!bg-white/5 !border !border-white/20 !border-r-0 rounded-l-lg py-2 md:py-2.5 px-3 md:px-4 flex items-center justify-center !text-white/70 text-xs md:text-sm">
                          IN
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder={popup.phonePlaceholder}
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={40}
                          className="w-full !bg-white/5 !border !border-white/20 rounded-r-lg py-2 md:py-2.5 px-3 md:px-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                        />
                      </div>

                      <textarea
                        name="projectDetails"
                        placeholder={popup.detailsPlaceholder}
                        rows={2}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        maxLength={2000}
                        className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2 md:py-2.5 px-3 md:px-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm resize-none"
                      ></textarea>

                      {/* Honeypot field */}
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-2.5 md:py-3 rounded-lg text-sm md:text-base font-bold !text-white shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 !bg-[var(--color-brand-magenta)] flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          popup.submitLabel
                        )}
                      </button>

                      <p className="text-center text-[10px] md:text-xs !text-white/60 pt-1 md:pt-2">
                        {popup.privacyText}
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
