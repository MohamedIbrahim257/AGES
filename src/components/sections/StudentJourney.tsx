import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ChevronRight,
  ClipboardPenLine,
  ListChecks,
  MapPinCheck,
  PlaneTakeoff,
  Send,
  Stamp,
} from "lucide-react";
import { StudentJourneyVideo } from "@/components/sections/StudentJourneyVideo";
import { studentJourneyCopy, studentJourneySteps } from "@/data/content";

const stepIcons: Record<(typeof studentJourneySteps)[number]["key"], LucideIcon> = {
  apply: ClipboardPenLine,
  prepare: ListChecks,
  submit: Send,
  offer: BadgeCheck,
  visa: Stamp,
  fly: PlaneTakeoff,
  arrive: MapPinCheck,
};

const accentRing = {
  blue: "bg-[var(--accent-soft)] ring-[rgba(37,99,235,0.2)] text-[var(--accent-mid)]",
  purple: "bg-purple-50 ring-purple-200/60 text-purple-700",
  sky: "bg-sky-50 ring-sky-200/60 text-sky-700",
  pink: "bg-pink-50 ring-pink-200/60 text-pink-700",
  amber: "bg-amber-50 ring-amber-200/60 text-amber-800",
  green: "bg-emerald-50 ring-emerald-200/60 text-emerald-700",
  rose: "bg-rose-50 ring-rose-200/60 text-rose-700",
} as const;

export function StudentJourney() {
  return (
    <section id="journey" data-animate="section" className="section-shell-white">
      <div className="section-padding">
        <div className="section-intro">
          <h2 className="section-heading !mt-0">{studentJourneyCopy.title}</h2>
          <p className="section-lead">{studentJourneyCopy.lead}</p>
        </div>

        <ol className="mx-auto mt-14 flex max-w-6xl list-none flex-wrap items-center justify-center gap-2 sm:gap-3">
          {studentJourneySteps.map((step, i) => {
            const Icon = stepIcons[step.key];
            const ring = accentRing[step.accent];
            return (
              <li key={step.key} className="flex items-center gap-2 sm:gap-3">
                <article
                  data-hover-card
                  className="surface-card-lg flex min-w-[4.75rem] flex-col items-center gap-2.5 rounded-2xl px-3 py-3.5 ring-1 ring-[rgba(6,21,38,0.06)] sm:min-w-[5.25rem] sm:px-3.5 sm:py-4"
                >
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 sm:h-11 sm:w-11 ${ring}`}>
                    <Icon className="h-[1.1rem] w-[1.1rem] sm:h-5 sm:w-5" aria-hidden />
                  </span>
                  <span className="text-center text-[11px] font-semibold leading-tight text-[var(--heading)] sm:text-xs">
                    {step.label}
                  </span>
                </article>
                {i < studentJourneySteps.length - 1 ? (
                  <ChevronRight className="hidden h-4 w-4 shrink-0 text-[var(--muted)]/60 sm:block" aria-hidden />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[1.75rem] bg-[var(--surface-soft)] shadow-[var(--shadow-card)] ring-1 ring-[rgba(6,21,38,0.06)]">
            <StudentJourneyVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
