import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EventsNewsCarousel } from "@/components/sections/EventsNewsCarousel";
import { eventsNewsCopy, newsItems } from "@/data/content";

export function EventsNews() {
  return (
    <section id="events" data-animate="section" className="section-shell-band">
      <div className="section-padding">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="section-heading !mt-0 md:text-left">{eventsNewsCopy.title}</h2>
            <p className="section-lead-tight md:text-left">{eventsNewsCopy.lead}</p>
          </div>
          <Link
            href="#contact"
            className="focus-ring hidden items-center gap-1 text-sm font-semibold text-[var(--accent-mid)] transition hover:text-[var(--heading)] md:inline-flex"
          >
            View all
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <EventsNewsCarousel items={newsItems} />

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="#contact"
            className="focus-ring inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-mid)] transition hover:text-[var(--heading)]"
          >
            View all
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
