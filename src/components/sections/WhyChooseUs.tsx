import {
  GraduationCap,
  Globe2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { whyCards, whyChooseSectionCopy } from "@/data/content";

const icons = [GraduationCap, Globe2, Users, ShieldCheck] as const;

const accentStyles = {
  blue: "bg-[var(--accent-soft)] text-[var(--accent-mid)] ring-[rgba(37,99,235,0.2)]",
  purple: "bg-purple-50 text-purple-700 ring-purple-200/60",
  sky: "bg-sky-50 text-sky-700 ring-sky-200/60",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-200/60",
} as const;

export function WhyChooseUs() {
  return (
    <section className="section-shell-white" data-animate="section">
      <div className="section-padding">
        <div className="section-intro">
          <h2 className="section-heading !mt-0">{whyChooseSectionCopy.title}</h2>
          <p className="section-lead">{whyChooseSectionCopy.lead}</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, i) => {
            const Icon = icons[i];
            const num = String(i + 1).padStart(2, "0");
            const ring = accentStyles[card.accent];
            return (
              <article
                key={card.key}
                data-hover-card
                className="surface-card-lg group relative overflow-hidden rounded-2xl p-6 ring-1 ring-[rgba(6,21,38,0.06)]"
              >
                <span className="pointer-events-none absolute right-3 top-2 text-5xl font-bold tabular-nums text-[var(--surface-soft)] transition group-hover:text-[var(--accent-soft)]">
                  {num}
                </span>
                <span className={`relative inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${ring}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-[var(--heading)]">{card.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-[var(--body-muted)]">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
