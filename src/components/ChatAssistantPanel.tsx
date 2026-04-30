"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { SITE, whatsappHref } from "@/lib/site";

type ChatRole = "bot" | "user";

type ChatLine = {
  id: string;
  role: ChatRole;
  content: string;
  time: string;
};

type Answers = {
  age: string;
  name: string;
  destination: string;
  email: string;
};

function nowTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function lid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const welcomeLines = [
  "👋 Welcome to AGES Global Dubai! We're happy to help you start your study abroad journey. May I ask a few quick questions to better understand your profile?",
  "Could you please tell me your age?",
];

type Phase = "ask_age" | "ask_name" | "ask_destination" | "ask_email" | "done";

const emptyAnswers: Answers = { age: "", name: "", destination: "", email: "" };

export function ChatAssistantPanel() {
  const [lines, setLines] = useState<ChatLine[]>(() =>
    welcomeLines.map((content) => ({
      id: lid(),
      role: "bot" as const,
      content,
      time: nowTime(),
    })),
  );
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("ask_age");
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [submitting, setSubmitting] = useState(false);
  const finishOnce = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const reset = useCallback(() => {
    setLines(
      welcomeLines.map((content) => ({
        id: lid(),
        role: "bot" as const,
        content,
        time: nowTime(),
      })),
    );
    setInput("");
    setPhase("ask_age");
    setAnswers(emptyAnswers);
    setSubmitting(false);
    finishOnce.current = false;
  }, []);

  const pushUser = useCallback((content: string) => {
    const t = nowTime();
    setLines((prev) => [...prev, { id: lid(), role: "user", content, time: t }]);
  }, []);

  const pushBot = useCallback((content: string) => {
    const t = nowTime();
    setLines((prev) => [...prev, { id: lid(), role: "bot", content, time: t }]);
  }, []);

  const finishFlow = useCallback(
    async (next: Answers) => {
      if (finishOnce.current) return;
      finishOnce.current = true;
      const summary = `Chat lead — AGES Assistant
Age: ${next.age}
Name: ${next.name}
Destination: ${next.destination}
Email: ${next.email}`;
      setSubmitting(true);
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: next.name,
            email: next.email,
            phone: "",
            topic: "chat-assistant",
            message: summary,
          }),
        });
      } catch {
        /* non-blocking */
      } finally {
        setSubmitting(false);
      }
      pushBot(
        "Thank you! Our team will review your profile and reach out shortly. You can also continue on WhatsApp for instant follow-up.",
      );
      setPhase("done");
    },
    [pushBot],
  );

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || phase === "done") return;

    if (phase === "ask_age") {
      pushUser(trimmed);
      setInput("");
      setAnswers((a) => ({ ...a, age: trimmed }));
      setPhase("ask_name");
      pushBot("Great — what's your full name?");
      return;
    }

    if (phase === "ask_name") {
      pushUser(trimmed);
      setInput("");
      setAnswers((a) => ({ ...a, name: trimmed }));
      setPhase("ask_destination");
      pushBot("Which country or region are you most interested in for your studies?");
      return;
    }

    if (phase === "ask_destination") {
      pushUser(trimmed);
      setInput("");
      setAnswers((a) => ({ ...a, destination: trimmed }));
      setPhase("ask_email");
      pushBot("Almost done — what's the best email address to reach you?");
      return;
    }

    if (phase === "ask_email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        pushBot("That doesn't look like a valid email — please try again.");
        return;
      }
      pushUser(trimmed);
      setInput("");
      setAnswers((prev) => {
        const complete = { ...prev, email: trimmed };
        queueMicrotask(() => void finishFlow(complete));
        return complete;
      });
      return;
    }
  }

  const waLink = whatsappHref(
    `Hello ${SITE.name}, I completed the AGES assistant chat.\n\nAge: ${answers.age}\nName: ${answers.name}\nDestination: ${answers.destination}\nEmail: ${answers.email}`,
  );

  return (
    <div className="flex w-full flex-col">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-[rgba(6,21,38,0.1)]">
        <div className="flex items-center justify-between gap-3 bg-[var(--brand)] px-4 py-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
              <Bot className="h-6 w-6 text-white" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">AGES Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-white/75">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Online
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={reset}
            className="focus-ring rounded-lg p-2 text-white/90 hover:bg-white/10"
            aria-label="Reset conversation"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="max-h-[min(420px,55vh)] space-y-4 overflow-y-auto bg-[var(--surface-soft)] px-4 py-5"
        >
          {lines.map((line) => (
            <div
              key={line.id}
              className={`flex gap-3 ${line.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {line.role === "bot" ? (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand)]">
                  <Bot className="h-4 w-4 text-white" aria-hidden />
                </span>
              ) : (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--border)] text-xs font-bold text-[var(--heading)]">
                  You
                </span>
              )}
              <div className={`max-w-[85%] ${line.role === "user" ? "text-right" : ""}`}>
                <div
                  className={`inline-block rounded-2xl px-4 py-3 text-left text-sm leading-relaxed shadow-sm ${
                    line.role === "bot"
                      ? "rounded-tl-sm bg-[var(--surface)] text-[var(--heading)]"
                      : "rounded-tr-sm bg-[var(--brand)] text-white"
                  }`}
                >
                  {line.content}
                </div>
                <p className="mt-1 text-[11px] text-[var(--muted)]">{line.time}</p>
              </div>
            </div>
          ))}

          {phase === "done" ? (
            <div className="flex justify-center pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#20bd5a]"
              >
                Continue on WhatsApp
              </a>
            </div>
          ) : null}
          {submitting ? (
            <p className="text-center text-xs text-[var(--muted)]">Saving your details…</p>
          ) : null}
        </div>

        <form onSubmit={handleSend} className="border-t border-[var(--border)] bg-[var(--surface)] p-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={phase === "done" ? "Conversation complete" : "Type your reply..."}
              disabled={phase === "done"}
              className="focus-ring min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--heading)] placeholder:text-[var(--muted)] disabled:bg-[var(--surface-soft)]"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={phase === "done" || !input.trim()}
              className="focus-ring flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-white transition hover:bg-[var(--brand-light)] disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </form>
      </div>
      <p className="mt-4 text-center text-xs text-[var(--muted)]">
        Interactive chat preview — try typing your answers above
      </p>
    </div>
  );
}
