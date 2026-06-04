import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
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

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              data-hover-card
              className="surface-card-lg flex flex-col overflow-hidden rounded-2xl ring-1 ring-[rgba(6,21,38,0.06)]"
            >
              <div className="relative aspect-[16/10] w-full bg-[var(--surface-soft)]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1 font-medium text-[var(--heading)]">
                    <Tag className="h-3.5 w-3.5 text-[var(--accent-mid)]" aria-hidden />
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                    {item.date}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--heading)]">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--body-muted)]">{item.excerpt}</p>
                <Link
                  href="#contact"
                  className="focus-ring mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-mid)] transition hover:text-[var(--heading)]"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>

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
