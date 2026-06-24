"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import type { NewsItem } from "@/data/content";

const GAP_PX = 24;

function getSlidesPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

type Props = {
  items: NewsItem[];
};

export function EventsNewsCarousel({ items }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const touchStartX = useRef(0);
  const suppressClick = useRef(false);

  const maxIndex = Math.max(0, items.length - slidesPerView);
  const pageCount = maxIndex + 1;

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextSlidesPerView = getSlidesPerView(viewport.offsetWidth);
    const totalGap = GAP_PX * (nextSlidesPerView - 1);
    const nextSlideWidth = (viewport.offsetWidth - totalGap) / nextSlidesPerView;

    setSlidesPerView(nextSlidesPerView);
    setSlideWidth(nextSlideWidth);
    setIndex((current) => Math.min(current, Math.max(0, items.length - nextSlidesPerView)));
  }, [items.length]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (nextIndex: number) => {
    setIndex(Math.max(0, Math.min(nextIndex, maxIndex)));
  };

  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? 0;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const delta = touchStartX.current - (event.changedTouches[0]?.clientX ?? 0);
    if (Math.abs(delta) < 48) return;
    suppressClick.current = true;
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 300);
    if (delta > 0) goNext();
    else goPrev();
  };

  const onCardClick = (event: React.MouseEvent) => {
    if (suppressClick.current) event.preventDefault();
  };

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <div className="relative mx-auto mt-12 max-w-6xl">
      <div className="pointer-events-none absolute inset-y-0 -left-3 z-10 hidden items-center sm:flex">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Previous articles"
          className="focus-ring pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-y-0 -right-3 z-10 hidden items-center sm:flex">
        <button
          type="button"
          onClick={goNext}
          disabled={!canNext}
          aria-label="Next articles"
          className="focus-ring pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div
        ref={viewportRef}
        className="overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${GAP_PX}px`,
            transform: slideWidth > 0 ? `translateX(-${index * (slideWidth + GAP_PX)}px)` : undefined,
          }}
          aria-live="polite"
        >
          {items.map((item) => {
            const href = item.intro ? `/news/${item.slug}` : "#contact";

            return (
              <Link
                key={item.slug}
                href={href}
                onClick={onCardClick}
                data-hover-card
                className="focus-ring surface-card-lg group flex shrink-0 flex-col overflow-hidden rounded-2xl ring-1 ring-[rgba(6,21,38,0.06)] transition hover:ring-[rgba(37,99,235,0.18)]"
                style={{ width: slideWidth > 0 ? `${slideWidth}px` : "100%" }}
              >
                <div className="relative aspect-[16/10] w-full bg-[var(--surface-soft)]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
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
                  <h3 className="mt-4 text-lg font-semibold text-[var(--heading)] transition group-hover:text-[var(--accent-mid)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--body-muted)]">{item.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-mid)] transition group-hover:text-[var(--heading)]">
                    Read more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Previous articles"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Article slides">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`focus-ring h-2.5 rounded-full transition-all ${
                index === i ? "w-7 bg-[var(--accent-mid)]" : "w-2.5 bg-[var(--muted)]/35 hover:bg-[var(--muted)]/55"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={!canNext}
          aria-label="Next articles"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {pageCount > 1 ? (
        <div className="mt-5 hidden items-center justify-center gap-2 sm:flex" role="tablist" aria-label="Article slides">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`focus-ring h-2.5 rounded-full transition-all ${
                index === i ? "w-7 bg-[var(--accent-mid)]" : "w-2.5 bg-[var(--muted)]/35 hover:bg-[var(--muted)]/55"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
