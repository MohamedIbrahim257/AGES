import Link from "next/link";
import {
  ArrowRight,
  Check,
  Handshake,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { partnershipsSeoCopy } from "@/data/content";
import { SITE } from "@/lib/site";

const partnershipItems = [
  "University & institutional partners",
  "Certified education counselors",
  "Regional & country representatives",
  "Educational technology partners",
];

const careerItems = [
  "Student recruitment specialists",
  "Academic advisors",
  "Marketing professionals",
  "University relations managers",
];

export function PartnershipsCareers() {
  return (
    <section
      id="partnerships"
      data-animate="section"
      className="relative overflow-hidden section-shell-band"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.08),transparent)]" />

      <div className="section-padding relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <span className="eyebrow">Grow with us</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--heading)] md:text-[2.15rem] md:leading-tight">
            Partnerships &amp; Careers
          </h2>
          <p className="mt-4 text-lg text-[var(--body-muted)]">{partnershipsSeoCopy.lead}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
          <article
            data-hover-card
            className="relative flex flex-col overflow-hidden rounded-[2rem] panel-navy p-8 text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10 md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_42%,rgba(201,162,39,0.06)_100%)]" />
            <div className="pointer-events-none absolute -right-20 top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,transparent_68%)]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_65%)]" />

            <div className="relative flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-white/[0.07] ring-1 ring-white/15 shadow-inner">
                <Handshake className="h-7 w-7 text-sky-100" aria-hidden />
              </span>
              <div className="min-w-0 pt-0.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[color-mix(in_srgb,var(--gold)_92%,white)]">
                  <Sparkles className="h-3 w-3 opacity-90" aria-hidden />
                  For organizations
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-[1.65rem] md:leading-snug">
                  Partner with AGES
                </h3>
              </div>
            </div>

            <p className="relative mt-5 max-w-prose leading-relaxed text-white/[0.88]">
              Partner with a trusted international education agency in Dubai — ethical student recruitment, responsive
              coordination, and alignment with institutional admissions standards.
            </p>

            <ul className="relative mt-8 space-y-2.5 border-t border-white/10 pt-6">
              {partnershipItems.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-white/[0.92]">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-400/15 ring-1 ring-emerald-400/35"
                    aria-hidden
                  >
                    <Check className="h-3 w-3 text-emerald-300" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto pt-10">
              <a
                href={`mailto:${SITE.partnershipsEmail}?subject=${encodeURIComponent("Partnership inquiry — AGES Global")}`}
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.07] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.12] md:w-auto"
              >
                <Mail className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                Email partnerships team
              </a>
              <p className="mt-3 text-center text-[13px] text-white/55 md:text-left">{SITE.partnershipsEmail}</p>
              <Link
                href={`mailto:${SITE.partnershipsEmail}?subject=${encodeURIComponent("Partnership proposal")}`}
                className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white/95 transition hover:text-white"
              >
                Send a detailed proposal
                <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
              </Link>
            </div>
          </article>

          <article
            data-hover-card
            className="relative flex flex-col overflow-hidden rounded-[2rem] border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] p-8 shadow-[var(--shadow-card)] md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/[0.09] via-transparent to-indigo-500/[0.06]" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-[var(--accent-soft)] opacity-80" />

            <div className="relative flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-soft)] to-white ring-1 ring-[rgba(37,99,235,0.18)] shadow-[0_8px_28px_-12px_rgba(37,99,235,0.35)]">
                <UserRound className="h-7 w-7 text-[var(--accent-mid)]" aria-hidden />
              </span>
              <div className="min-w-0 pt-0.5">
                <span className="inline-flex rounded-full border border-[rgba(37,99,235,0.2)] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--accent-mid)] shadow-sm">
                  Join the team
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--heading)] md:text-[1.65rem] md:leading-snug">
                  Careers at AGES
                </h3>
              </div>
            </div>

            <p className="relative mt-5 leading-relaxed text-[var(--body-muted)]">
              {partnershipsSeoCopy.careersLead}
            </p>

            <ul className="relative mt-8 space-y-2.5 border-t border-[var(--border)] pt-6">
              {careerItems.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-[var(--heading)]">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] ring-1 ring-[rgba(37,99,235,0.2)]"
                    aria-hidden
                  >
                    <Check className="h-3 w-3 text-[var(--accent-mid)]" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto pt-10">
              <a
                href={`mailto:${SITE.hrEmail}?subject=${encodeURIComponent("CV — Careers at AGES")}&body=${encodeURIComponent("Please attach your CV.")}`}
                className="focus-ring btn-primary-premium inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm md:w-auto"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                Send your CV
              </a>
              <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]/60 px-4 py-3.5">
                <p className="text-xs leading-relaxed text-[var(--body-muted)]">
                  Applications go to <span className="font-medium text-[var(--heading)]">{SITE.hrEmail}</span>. Our HR
                  team reviews submissions and contacts shortlisted candidates for interviews.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
