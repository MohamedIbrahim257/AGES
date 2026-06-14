import Image from "next/image";
import { termsConditions } from "@/data/content";

export function TermsConditions() {
  return (
    <section id="terms" data-animate="section" className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={termsConditions.backgroundSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(237,242,250,0.94)_0%,rgba(227,235,246,0.9)_45%,rgba(218,230,243,0.88)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(10,37,64,0.08)_0%,rgba(29,86,230,0.06)_50%,transparent_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(6,21,38,0.08)] bg-[var(--surface)]/95 shadow-[var(--shadow-soft)] ring-1 ring-[rgba(6,21,38,0.04)] backdrop-blur-sm">
            <header className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--surface-soft)]/50 to-transparent px-5 py-5 text-center sm:px-8 md:px-9 md:py-6">
              <div className="mx-auto mb-2 h-px w-10 rounded-full bg-gradient-to-r from-transparent via-[var(--accent-mid)] to-transparent opacity-80" aria-hidden />
              <h2 className="section-heading !mt-0">Terms &amp; Conditions</h2>
              <p className="section-lead-tight mx-auto max-w-xl">{termsConditions.subtitle}</p>
            </header>

            <div className="space-y-2 px-4 py-5 sm:px-7 md:space-y-2.5 md:px-9 md:py-6">
              {termsConditions.items.map((text, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[rgba(6,21,38,0.06)] bg-[var(--surface-soft)]/35 px-3 py-2.5 transition-colors hover:border-[rgba(37,99,235,0.14)] hover:bg-[var(--surface-soft)]/55 sm:px-4 sm:py-3"
                >
                  <div className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--surface)] font-display text-xs font-semibold tabular-nums text-[var(--accent-mid)] shadow-sm ring-1 ring-[rgba(37,99,235,0.12)]">
                      {index + 1}
                    </span>
                    <p className="min-w-0 flex-1 text-sm leading-snug text-[var(--body-muted)] sm:text-[15px] sm:leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <footer className="border-t border-[var(--border)] bg-[var(--accent-soft)]/25 px-4 py-4 sm:px-8 md:px-9 md:py-5">
              <p className="text-center text-sm leading-snug text-[var(--heading)] md:text-left md:text-[15px] md:leading-relaxed">
                <span className="font-semibold text-[var(--accent-mid)]">Notice.</span>{" "}
                <span className="text-[var(--body-muted)]">{termsConditions.notice}</span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
