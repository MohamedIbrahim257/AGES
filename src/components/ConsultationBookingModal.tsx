"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useBookingConsultation } from "@/context/booking-consultation-context";
import { SITE, whatsappHref } from "@/lib/site";
import {
  BOOKING_TIMEZONE_LABEL,
  HALF_HOUR_SLOTS,
  buildMonthGrid,
  compareYmd,
  dubaiTodayYmd,
  formatYmdLong,
  parseYmdToMonthCursor,
} from "@/lib/booking-calendar";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;

export function ConsultationBookingModal() {
  const { isOpen, close } = useBookingConsultation();
  const titleId = useId();
  const minYmd = dubaiTodayYmd();
  const cursor0 = parseYmdToMonthCursor(minYmd) ?? { year: new Date().getFullYear(), month1: new Date().getMonth() + 1 };

  const [viewYear, setViewYear] = useState(cursor0.year);
  const [viewMonth1, setViewMonth1] = useState(cursor0.month1);
  const [dateYmd, setDateYmd] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setDateYmd(null);
    setTime(null);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setError(null);
    const c = parseYmdToMonthCursor(dubaiTodayYmd());
    if (c) {
      setViewYear(c.year);
      setViewMonth1(c.month1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const monthLabel = new Date(viewYear, viewMonth1 - 1, 1).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const minCursor = parseYmdToMonthCursor(minYmd);
  const canPrevMonth =
    minCursor &&
    (viewYear > minCursor.year || (viewYear === minCursor.year && viewMonth1 > minCursor.month1));

  const shiftMonth = (delta: number) => {
    const d = new Date(viewYear, viewMonth1 - 1 + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth1(d.getMonth() + 1);
  };

  const grid = buildMonthGrid(viewYear, viewMonth1, minYmd);

  const submitMailto = useCallback(() => {
    setError(null);
    if (!dateYmd || !time) {
      setError("Choose a date and a time for your online meeting.");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const when = `${formatYmdLong(dateYmd)} at ${time} (${BOOKING_TIMEZONE_LABEL})`;
    const body = [
      `Online consultation request — ${SITE.name}`,
      "",
      `Preferred date & time: ${when}`,
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : "Phone: (not provided)",
      notes.trim() ? `\nNotes:\n${notes.trim()}` : "",
      "",
      "Please confirm this slot or suggest an alternative. Thank you.",
    ].join("\n");

    const subject = encodeURIComponent(`Book online consultation — ${dateYmd} ${time} GST`);
    const mail = `mailto:${SITE.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mail;
    close();
  }, [close, dateYmd, time, name, email, phone, notes]);

  const whatsappMessage = [
    `Hello ${SITE.name}, I'd like to book an online consultation.`,
    dateYmd && time
      ? `Preferred: ${formatYmdLong(dateYmd)} at ${time} (${BOOKING_TIMEZONE_LABEL}).`
      : "",
    name.trim() ? `Name: ${name.trim()}` : "",
    email.trim() ? `Email: ${email.trim()}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-[var(--heading)]/40 backdrop-blur-[2px]"
        aria-label="Close booking dialog"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[min(min(92vh,920px),920px)] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-[var(--surface)] shadow-[var(--shadow-elevated)] ring-1 ring-[var(--border)] sm:max-h-[90vh] sm:rounded-3xl"
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-mid)]">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              Schedule online
            </p>
            <h2 id={titleId} className="font-display mt-1.5 text-xl font-semibold tracking-tight text-[var(--heading)]">
              Book a consultation
            </h2>
            <p className="mt-1 text-sm leading-snug text-[var(--body-muted)]">
              Pick a date and time. We&apos;ll follow up to confirm your video call. Times are in {BOOKING_TIMEZONE_LABEL}.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="focus-ring shrink-0 rounded-xl p-2 text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
            aria-label="Close"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]/80 p-4">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => canPrevMonth && shiftMonth(-1)}
                disabled={!canPrevMonth}
                className="focus-ring rounded-lg p-1.5 text-[var(--heading)] disabled:opacity-35 disabled:hover:bg-transparent"
                aria-label="Previous month"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <span className="font-display text-sm font-semibold text-[var(--heading)]">{monthLabel}</span>
              <button
                type="button"
                onClick={() => shiftMonth(1)}
                className="focus-ring rounded-lg p-1.5 text-[var(--heading)]"
                aria-label="Next month"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-wide text-[var(--muted)]">
              {WEEKDAYS.map((d) => (
                <span key={d} className="py-1">
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1">
              {grid.map((cell, i) => {
                if (cell.day === null) {
                  return <span key={`e-${i}`} className="aspect-square" />;
                }
                const selected = dateYmd === cell.iso;
                return (
                  <button
                    key={cell.iso}
                    type="button"
                    disabled={cell.disabled}
                    onClick={() => {
                      setDateYmd(cell.iso);
                      setTime(null);
                    }}
                    className={`focus-ring aspect-square rounded-xl text-sm font-semibold transition ${
                      cell.disabled
                        ? "cursor-not-allowed text-[var(--muted)]/35"
                        : selected
                          ? "bg-[var(--accent-mid)] text-white shadow-md"
                          : "text-[var(--heading)] hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {cell.day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <label className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Time (GST)</label>
            <div className="mt-2 grid max-h-[200px] grid-cols-3 gap-2 overflow-y-auto sm:grid-cols-4">
              {HALF_HOUR_SLOTS.map((slot) => {
                const disabled = !dateYmd;
                const selected = time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={disabled}
                    onClick={() => setTime(slot)}
                    className={`focus-ring rounded-xl border px-2 py-2.5 text-center text-sm font-semibold transition ${
                      disabled
                        ? "cursor-not-allowed border-transparent bg-[var(--surface-soft)]/50 text-[var(--muted)]/45"
                        : selected
                          ? "border-[var(--accent-mid)] bg-[var(--accent-soft)] text-[var(--accent-mid)]"
                          : "border-[var(--border)] bg-[var(--surface)] text-[var(--heading)] hover:border-[rgba(37,99,235,0.25)]"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <div>
              <label htmlFor="bk-name" className="text-xs font-semibold text-[var(--muted)]">
                Full name
              </label>
              <input
                id="bk-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="focus-ring mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--heading)] placeholder:text-[var(--muted)]/55"
                placeholder="As on your ID or passport"
              />
            </div>
            <div>
              <label htmlFor="bk-email" className="text-xs font-semibold text-[var(--muted)]">
                Email
              </label>
              <input
                id="bk-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="focus-ring mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--heading)] placeholder:text-[var(--muted)]/55"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="bk-phone" className="text-xs font-semibold text-[var(--muted)]">
                Phone <span className="font-normal text-[var(--muted)]/75">(optional)</span>
              </label>
              <input
                id="bk-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                className="focus-ring mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--heading)] placeholder:text-[var(--muted)]/55"
                placeholder={SITE.phoneDisplay}
              />
            </div>
            <div>
              <label htmlFor="bk-notes" className="text-xs font-semibold text-[var(--muted)]">
                Study goals <span className="font-normal text-[var(--muted)]/75">(optional)</span>
              </label>
              <textarea
                id="bk-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="focus-ring mt-1.5 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--heading)] placeholder:text-[var(--muted)]/55"
                placeholder="Destination, level, intake…"
              />
            </div>
          </div>

          {error ? (
            <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900" role="alert">
              {error}
            </p>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-col gap-3 border-t border-[var(--border)] bg-[var(--surface)] px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <button type="button" onClick={submitMailto} className="focus-ring btn-primary-premium w-full rounded-xl px-6 py-3.5 text-sm font-semibold sm:flex-1">
            Send booking request
          </button>
          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-3.5 text-center text-sm font-semibold text-[var(--heading)] transition hover:bg-[var(--surface-soft)]/80 sm:w-auto sm:shrink-0"
          >
            WhatsApp instead
          </a>
        </div>
      </div>
    </div>
  );
}
