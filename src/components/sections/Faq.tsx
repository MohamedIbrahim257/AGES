"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems, faqSectionCopy } from "@/data/content";

export function Faq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" data-animate="section" className="section-shell-white">
      <div className="section-padding">
        <div className="section-intro">
          <h2 className="section-heading !mt-0">{faqSectionCopy.title}</h2>
          <p className="section-lead">{faqSectionCopy.lead}</p>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            const triggerId = `${baseId}-faq-${i}-trigger`;
            const panelId = `${baseId}-faq-${i}-panel`;
            const num = String(i + 1).padStart(2, "0");

            return (
              <article
                key={item.question}
                className={`surface-card-lg overflow-hidden rounded-2xl transition-[box-shadow,border-color] duration-300 ${
                  isOpen
                    ? "border-[rgba(37,99,235,0.28)] shadow-[0_12px_40px_-18px_rgba(37,99,235,0.35)] ring-1 ring-[rgba(37,99,235,0.12)]"
                    : "border-[rgba(6,21,38,0.08)] ring-1 ring-[rgba(6,21,38,0.04)]"
                }`}
              >
                <h3 className="m-0 text-base font-normal leading-normal">
                  <button
                    id={triggerId}
                    type="button"
                    className="focus-ring flex w-full items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-[rgba(255,255,255,0.65)] sm:gap-4 sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span
                      className="mt-0.5 shrink-0 tabular-nums text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)] sm:text-xs"
                      aria-hidden
                    >
                      {num}
                    </span>
                    <span className="min-w-0 flex-1 font-semibold leading-snug text-[var(--heading)]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`mt-0.5 h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180 text-[var(--accent-mid)]" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="space-y-3 border-t border-[var(--border)] px-4 pb-5 pt-4 text-sm leading-relaxed text-[var(--body-muted)] sm:px-6 sm:pb-6">
                      {item.answer ? <p>{item.answer}</p> : null}
                      {item.listItems && item.listItems.length > 0 ? (
                        <ul className="list-disc space-y-2 pl-5 marker:text-[var(--accent-mid)]">
                          {item.listItems.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      ) : null}
                      {item.answerSuffix ? <p>{item.answerSuffix}</p> : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
