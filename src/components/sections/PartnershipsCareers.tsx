import Link from "next/link";
import { ArrowRight, Handshake, Mail, UserRound } from "lucide-react";
import { partnershipsSeoCopy } from "@/data/content";
import { SITE } from "@/lib/site";

export function PartnershipsCareers() {
  return (
    <section
      id="partnerships"
      data-animate="section"
      className="relative overflow-hidden section-shell-band"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.08),transparent)]" />

      <div className="section-padding relative">
        <div className="section-intro">
          <h2 className="section-heading !mt-0">{partnershipsSeoCopy.sectionTitle}</h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
          <article
            data-hover-card
            className="relative flex flex-col overflow-hidden rounded-[2rem] panel-navy p-8 text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_42%,rgba(201,162,39,0.06)_100%)]" />

            <div className="relative flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-white/[0.07] ring-1 ring-white/15 shadow-inner">
                <Handshake className="h-7 w-7 text-sky-100" aria-hidden />
              </span>
              <h3 className="pt-2 text-2xl font-semibold tracking-tight md:text-[1.65rem] md:leading-snug">Partnerships</h3>
            </div>

            <p className="relative mt-5 leading-relaxed text-white/[0.92]">{partnershipsSeoCopy.partnershipsLead}</p>
            <p className="relative mt-4 leading-relaxed text-white/80">{partnershipsSeoCopy.partnershipsBody}</p>

            <div className="relative mt-auto pt-10">
              <a
                href={`mailto:${SITE.partnershipsEmail}?subject=${encodeURIComponent("Partnership proposal — AGES Global Dubai")}`}
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.07] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.12] md:w-auto"
              >
                <Mail className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                {SITE.partnershipsEmail}
              </a>
              <Link
                href={`mailto:${SITE.partnershipsEmail}?subject=${encodeURIComponent("Partnership proposal")}`}
                className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white/95 transition hover:text-white"
              >
                Send your proposal
                <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
              </Link>
            </div>
          </article>

          <article
            data-hover-card
            className="relative flex flex-col overflow-hidden rounded-[2rem] border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] p-8 shadow-[var(--shadow-card)] md:p-10"
          >
            <div className="relative flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-soft)] to-white ring-1 ring-[rgba(37,99,235,0.18)]">
                <UserRound className="h-7 w-7 text-[var(--accent-mid)]" aria-hidden />
              </span>
              <h3 className="pt-2 text-2xl font-semibold tracking-tight text-[var(--heading)] md:text-[1.65rem] md:leading-snug">
                Careers
              </h3>
            </div>

            <p className="relative mt-5 leading-relaxed text-[var(--body-muted)]">{partnershipsSeoCopy.careersLead}</p>
            <p className="relative mt-4 leading-relaxed text-[var(--body-muted)]">{partnershipsSeoCopy.careersBody}</p>

            <div className="relative mt-auto pt-10">
              <a
                href={`mailto:${SITE.hrEmail}?subject=${encodeURIComponent("CV — Careers at AGES Global Dubai")}&body=${encodeURIComponent("Please attach your CV.")}`}
                className="focus-ring btn-primary-premium inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm md:w-auto"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                Send your CV to {SITE.hrEmail}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
