"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Globe, MapPin } from "lucide-react";
import { type RegionFilter, destinations } from "@/data/content";
import { studyAbroadPages } from "@/data/studyAbroadPages";

const regionFilters: { id: RegionFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Americas", label: "Americas" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "Middle East", label: "Middle East" },
];

export function Destinations() {
  const [filter, setFilter] = useState<RegionFilter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return destinations;
    return destinations.filter((d) => d.region === filter);
  }, [filter]);

  return (
    <section id="destinations" data-animate="section" className="section-shell-white">
      <div className="section-padding">
        <div className="section-intro mx-auto max-w-3xl">
          <div className="flex justify-center">
            <span className="eyebrow">Study abroad</span>
          </div>
          <h2 className="section-heading">Global Destinations</h2>
          <p className="section-lead">
            Study abroad support across top destinations — university admissions, student visa guidance, and scholarships
            awareness tailored to each country.
          </p>
        </div>

        {/* Banner */}
        <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-card)] ring-1 ring-[rgba(6,21,38,0.06)]">
          <div className="relative aspect-[16/10] min-h-[200px] w-full sm:aspect-[2.4/1] md:aspect-[21/9] md:min-h-[240px]">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=82"
              alt="Earth at night from space — representing worldwide study pathways"
              fill
              className="object-cover object-[center_45%] brightness-[0.92] saturate-[1.05]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            />
            {/* Depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(10,37,64,0.92)_0%,rgba(10,37,64,0.55)_42%,rgba(10,37,64,0.08)_72%,transparent_100%)]"
              aria-hidden
            />
            <div className="relative flex h-full flex-col justify-end px-6 pb-8 pt-10 sm:justify-center sm:pb-10 sm:pt-10 md:px-12 lg:max-w-xl lg:justify-center lg:pb-12">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-sky-200" aria-hidden />
                </span>
                Our reach
              </p>
              <p className="mt-4 font-display text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-3xl md:text-[2rem]">
                30+ countries worldwide
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/82 md:text-base">
                From the Americas to Asia, Europe to the Middle East — counselling aligned to local admissions and visa
                norms.
              </p>
            </div>
          </div>
        </div>

        {/* Region filter — segmented control */}
        <div className="mx-auto mt-12 max-w-6xl">
          <p className="mb-3 text-center font-display text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Region
          </p>
          <div
            className="flex justify-center overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Destination regions"
          >
            <div className="inline-flex flex-nowrap gap-1 rounded-2xl border border-[rgba(6,21,38,0.08)] bg-[var(--surface-soft)]/55 p-1 shadow-inner">
              {regionFilters.map(({ id, label }) => {
                const active = filter === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(id)}
                    className={`focus-ring whitespace-nowrap rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 sm:px-4 ${
                      active
                        ? "bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] ring-1 ring-[rgba(6,21,38,0.06)]"
                        : "text-[var(--muted)] hover:text-[var(--heading)]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          id="destinations-grid"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4"
        >
          {filtered.map((d) => {
            const featured = d.country === "Cyprus";
            return (
              <article
                key={`${d.country}-${filter}`}
                data-hover-card
                className={`surface-card-lg relative flex flex-col rounded-2xl p-4 text-left transition-[transform,box-shadow,border-color] sm:p-5 ${
                  featured
                    ? "overflow-hidden ring-1 ring-[rgba(37,99,235,0.22)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:bg-gradient-to-r before:from-[var(--accent-mid)] before:to-sky-400 before:content-['']"
                    : "ring-1 ring-[rgba(6,21,38,0.06)]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-xl shadow-inner ring-1 ring-[rgba(6,21,38,0.05)]"
                    aria-hidden
                  >
                    {d.flag}
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-display text-[0.9375rem] font-semibold leading-snug text-[var(--heading)]">
                      {d.country}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--body-muted)]">{d.benefit}</p>
                  </div>
                </div>
              </article>
            );
          })}
          <article className="surface-card-lg flex flex-col justify-center rounded-2xl border border-dashed border-[rgba(6,21,38,0.14)] bg-[var(--surface-soft)]/35 p-5 ring-1 ring-[rgba(6,21,38,0.04)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] shadow-sm ring-1 ring-[rgba(6,21,38,0.06)]">
              <Globe className="h-5 w-5 text-[var(--accent-mid)]" strokeWidth={1.75} aria-hidden />
            </span>
            <p className="mt-4 font-display text-[0.9375rem] font-semibold text-[var(--heading)]">And more</p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--body-muted)]">
              Tell us your programme — we&apos;ll map other destinations that fit.
            </p>
          </article>
        </div>

        <nav
          aria-label="Study abroad destination guides"
          className="mx-auto mt-12 max-w-6xl rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]/40 px-4 py-5 sm:px-6"
        >
          <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Popular guides
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {studyAbroadPages.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/study/${p.slug}`}
                  className="font-medium text-[var(--accent-mid)] underline-offset-4 hover:underline"
                >
                  {p.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="focus-ring btn-primary-premium inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold"
          >
            Explore destinations
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
