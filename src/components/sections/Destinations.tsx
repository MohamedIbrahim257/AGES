"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Globe, MapPin } from "lucide-react";
import { type RegionFilter, destinations, destinationsBannerVideo, destinationsSectionCopy } from "@/data/content";
import { studyAbroadPages } from "@/data/studyAbroadPages";
import { prefersReducedMotion } from "@/lib/motion";

const regionFilters: { id: RegionFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Americas", label: "Americas" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "Middle East", label: "Middle East" },
];

function DestinationsBannerVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    setReduceMotion(reduced);
    if (reduced) return;

    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
      video.addEventListener("canplay", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  if (reduceMotion) {
    return (
      <Image
        src={destinationsBannerVideo.posterSrc}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_35%] sm:object-[center_45%]"
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={destinationsBannerVideo.posterSrc}
      className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-[center_45%]"
      aria-hidden
    >
      <source src={destinationsBannerVideo.src} type="video/mp4" />
    </video>
  );
}

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
          <h2 className="section-heading !mt-0">{destinationsSectionCopy.title}</h2>
          <p className="section-lead">{destinationsSectionCopy.lead}</p>
        </div>

        {/* Banner */}
        <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-card)] ring-1 ring-[rgba(6,21,38,0.06)]">
          <div className="relative sm:aspect-[2.4/1] md:aspect-[21/9] sm:min-h-[220px] md:min-h-[240px]">
            <div className="relative h-52 w-full sm:absolute sm:inset-0 sm:h-full">
              <DestinationsBannerVideo />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2540]/55 via-transparent to-transparent sm:from-black/35 sm:via-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(105deg,rgba(10,37,64,0.92)_0%,rgba(10,37,64,0.55)_42%,rgba(10,37,64,0.08)_72%,transparent_100%)] sm:block"
                aria-hidden
              />
            </div>

            <div className="relative flex flex-col justify-end bg-gradient-to-br from-[#0a2540] via-[#0a2139] to-[#071727] px-5 py-7 sm:absolute sm:inset-0 sm:justify-center sm:bg-transparent sm:px-8 sm:py-10 md:px-12 lg:max-w-xl lg:pb-12">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-sky-200" aria-hidden />
                </span>
                {destinationsSectionCopy.bannerEyebrow}
              </p>
              <p className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-white sm:mt-4 sm:text-3xl md:text-[2rem] md:leading-[1.15]">
                {destinationsSectionCopy.bannerTitle}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/82 sm:mt-3 sm:text-[15px] md:text-base">
                {destinationsSectionCopy.bannerBody}
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
