"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Bot, MessageCircle, Send, X } from "lucide-react";

const initialSuggestedReplies = [
  "What services do you offer?",
  "How long does a project take?",
  "Can you redesign my website?",
];

type Message = {
  role: "user" | "assistant";
  content: string;
  suggestedReplies?: string[];
};

type ChatResponse = {
  answer?: string;
  suggestedReplies?: string[];
  error?: string;
};

const welcome =
  "Hi — I’m RapidGro’s AI assistant. Ask about services, timelines, redesigns, tech stacks or how to start your project.";

export default function AgencyChatbot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: welcome,
      suggestedReplies: initialSuggestedReplies,
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const projectBrief = useMemo(() => {
    if (messages.length <= 1) return "";

    return [
      "Chatbot conversation summary:",
      ...messages
        .slice(1)
        .map(
          (message) =>
            `${message.role === "user" ? "Visitor" : "RapidGro assistant"}: ${message.content}`,
        ),
    ].join("\n");
  }, [messages]);

  async function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const history = messages.slice(-8).map(({ role, content }) => ({
      role,
      content,
    }));

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
    ]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history,
        }),
      });

      const result = (await response.json()) as ChatResponse;

      if (!response.ok) {
        throw new Error(result.error || "The assistant is temporarily unavailable.");
      }

      const replies = Array.isArray(result.suggestedReplies)
        ? result.suggestedReplies
            .filter((reply): reply is string => typeof reply === "string")
            .map((reply) => reply.trim())
            .filter(Boolean)
            .slice(0, 3)
        : [];

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            result.answer ||
            "I could not generate a useful answer. Please try another question.",
          suggestedReplies:
            replies.length > 0 ? replies : initialSuggestedReplies,
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "The assistant is temporarily unavailable.",
          suggestedReplies: [
            "What services do you offer?",
            "Can you help redesign my website?",
            "How do I contact the team?",
          ],
        },
      ]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void ask(input);
  }

  function continueToContact() {
    if (!projectBrief) return;

    sessionStorage.setItem("rapidgro-chat-brief", projectBrief);
    setOpen(false);

    if (window.location.pathname === "/contact") {
      // When the user is already on the contact page, deliver the brief
      // directly instead of waiting for another navigation lifecycle.
      window.dispatchEvent(
        new CustomEvent<string>("rapidgro-chat-brief-updated", {
          detail: projectBrief,
        }),
      );
      return;
    }

    // The small query flag makes the handoff an explicit navigation state.
    // The actual conversation stays in sessionStorage and never enters the URL.
    router.push("/contact?prefill=chat");
  }

  return (
    <div className="agency-chat">
      {open && (
        <section
          className="agency-chat__panel"
          aria-label="RapidGroDigital AI assistant"
        >
          <header className="agency-chat__header">
            <div className="agency-chat__identity">
              <span className="agency-chat__avatar" aria-hidden="true">
                <Image src="/images/Agency-logo-bg-removed.png" alt="RapidGro logo" width={45} height={45} />
              </span>
              <div>
                <strong>RapidGro AI</strong>
                <span>Powered by Groq</span>
              </div>
            </div>

            <button
              type="button"
              className="agency-chat__icon-button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={19} />
            </button>
          </header>

          <div className="agency-chat__messages" aria-live="polite">
            {messages.map((message, index) => {
              const isLatest = index === messages.length - 1;
              const showReplies =
                message.role === "assistant" &&
                isLatest &&
                !loading &&
                Boolean(message.suggestedReplies?.length);

              return (
                <div
                  className={`agency-chat__turn agency-chat__turn--${message.role}`}
                  key={`${message.role}-${index}`}
                >
                  <div
                    className={`agency-chat__message agency-chat__message--${message.role}`}
                  >
                    {message.role === "assistant" && (
                      <Bot size={16} aria-hidden="true" />
                    )}
                    <p>{message.content}</p>
                  </div>

                  {showReplies && (
                    <div
                      className="agency-chat__suggestions"
                      aria-label="Suggested replies"
                    >
                      {message.suggestedReplies?.map((reply) => (
                        <button
                          key={reply}
                          type="button"
                          onClick={() => void ask(reply)}
                          disabled={loading}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="agency-chat__turn agency-chat__turn--assistant">
                <div className="agency-chat__message agency-chat__message--assistant">
                  <Bot size={16} aria-hidden="true" />
                  <p className="agency-chat__typing">Thinking…</p>
                </div>
              </div>
            )}
          </div>

          {messages.length > 2 && (
            <button
              type="button"
              className="agency-chat__handoff"
              onClick={continueToContact}
            >
              Continue this brief in contact form
              <span aria-hidden="true">↗</span>
            </button>
          )}

          <form className="agency-chat__composer" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="agency-chat-input">
              Ask RapidGroDigital
            </label>
            <input
              ref={inputRef}
              id="agency-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about your project…"
              maxLength={1200}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={17} />
            </button>
          </form>

          <p className="agency-chat__notice">
            AI can make mistakes. Confirm project scope and pricing with the team.
          </p>
        </section>
      )}

      <button
        type="button"
        className="agency-chat__launcher overflow-hidden group relative hover:!bg-[var(--c-ink)] transition-colors duration-300"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        data-magnetic
      >
        <div className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-14">
          {open ? <X size={24} /> : <MessageCircle size={24} />}
          {!open && <span>Ask RapidGro</span>}
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 translate-y-14 group-hover:translate-y-0">
          {open ? <X size={24} /> : <MessageCircle size={24} />}
          {!open && <span>Ask RapidGro</span>}
        </div>
      </button>
    </div>
  );
}
