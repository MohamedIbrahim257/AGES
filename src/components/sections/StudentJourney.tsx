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

export function StudentJourney() {
  return (
    <section id="journey" data-animate="section" className="section-shell-white">
      <div className="section-padding">
        <div className="section-intro">
          <h2 className="section-heading !mt-0">{studentJourneyCopy.title}</h2>
          <p className="section-lead">{studentJourneyCopy.lead}</p>
        </div>

        <ol className="mx-auto mt-14 flex max-w-6xl flex-wrap items-center justify-center gap-3 sm:gap-2 md:gap-3">
          {studentJourneySteps.map((step, i) => {
            const Icon = stepIcons[step.key];
            return (
              <li key={step.key} className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                <div className="flex min-w-[4.75rem] flex-col items-center gap-2 rounded-2xl border border-[rgba(37,99,235,0.18)] bg-[var(--accent-soft)] px-3 py-3.5 shadow-sm sm:min-w-[5.25rem] sm:px-3.5 sm:py-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[rgba(37,99,235,0.12)]"
                    aria-hidden
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem] text-[var(--accent-mid)]" strokeWidth={2} />
                  </span>
                  <span className="text-center text-xs font-semibold leading-tight text-[var(--accent-mid)] sm:text-sm">
                    {step.label}
                  </span>
                </div>
                {i < studentJourneySteps.length - 1 ? (
                  <ChevronRight
                    className="hidden h-4 w-4 shrink-0 text-[var(--muted)]/70 sm:block md:h-5 md:w-5"
                    aria-hidden
                  />
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
