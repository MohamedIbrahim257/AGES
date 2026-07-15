"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, Maximize2, X } from "lucide-react";

const GAP_PX = 16;
const PLACEHOLDER_COUNT = 6;

function getSlidesPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

type Props = {
  title: string;
  images?: string[];
  imageAlts?: string[];
};

export function NewsArticleGallery({ title, images = [], imageAlts = [] }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const suppressClick = useRef(false);

  const hasImages = images.length > 0;
  const maxIndex = Math.max(0, images.length - slidesPerView);
  const pageCount = maxIndex + 1;

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextSlidesPerView = getSlidesPerView(viewport.offsetWidth);
    const totalGap = GAP_PX * (nextSlidesPerView - 1);
    const nextSlideWidth = (viewport.offsetWidth - totalGap) / nextSlidesPerView;

    setSlidesPerView(nextSlidesPerView);
    setSlideWidth(nextSlideWidth);
    setIndex((current) => Math.min(current, Math.max(0, images.length - nextSlidesPerView)));
  }, [images.length]);

  useEffect(() => {
    if (!hasImages) return;
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [hasImages, measure]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length));
      if (event.key === "ArrowRight") setLightboxIndex((current) => (current === null ? null : (current + 1) % images.length));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, images.length]);

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

  const openLightbox = (imageIndex: number) => {
    if (suppressClick.current) return;
    setLightboxIndex(imageIndex);
  };

  const lightboxPrev = () => {
    setLightboxIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length));
  };

  const lightboxNext = () => {
    setLightboxIndex((current) => (current === null ? null : (current + 1) % images.length));
  };

  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const activeLightboxAlt =
    lightboxIndex !== null ? (imageAlts[lightboxIndex] ?? `${title} photo ${lightboxIndex + 1}`) : "";

  return (
    <section className="mt-10" aria-labelledby="news-gallery-heading">
      <h2
        id="news-gallery-heading"
        className="font-display text-2xl font-semibold tracking-tight text-[var(--heading)]"
      >
        {title}
      </h2>

      {hasImages ? (
        <div className="relative mt-6">
          <div className="pointer-events-none absolute inset-y-0 -left-3 z-10 hidden items-center sm:flex">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canPrev}
              aria-label="Previous photos"
              className="focus-ring pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="pointer-events-none absolute inset-y-0 -right-3 z-10 hidden items-center sm:flex">
            <button
              type="button"
              onClick={goNext}
              disabled={!canNext}
              aria-label="Next photos"
              className="focus-ring pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35"
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
            <ul
              className="flex list-none transition-transform duration-500 ease-out"
              style={{
                gap: `${GAP_PX}px`,
                transform: slideWidth > 0 ? `translateX(-${index * (slideWidth + GAP_PX)}px)` : undefined,
              }}
              aria-live="polite"
            >
              {images.map((src, imageIndex) => (
                <li
                  key={src}
                  className="shrink-0"
                  style={{ width: slideWidth > 0 ? `${slideWidth}px` : "100%" }}
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(imageIndex)}
                    className="focus-ring group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--surface-soft)] ring-1 ring-[rgba(6,21,38,0.06)] transition hover:ring-[rgba(37,99,235,0.22)]"
                    aria-label={`View ${imageAlts[imageIndex] ?? `${title} photo ${imageIndex + 1}`}`}
                  >
                    <Image
                      src={src}
                      alt={imageAlts[imageIndex] ?? `${title} photo ${imageIndex + 1}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    />
                    <span className="absolute inset-0 bg-[rgba(6,21,38,0)] transition duration-300 group-hover:bg-[rgba(6,21,38,0.18)]" aria-hidden />
                    <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--heading)] opacity-0 shadow-sm transition duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canPrev}
              aria-label="Previous photos"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35 sm:hidden"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>

            {pageCount > 1 ? (
              <div className="flex items-center gap-2" role="tablist" aria-label="Gallery slides">
                {Array.from({ length: pageCount }, (_, pageIndex) => (
                  <button
                    key={pageIndex}
                    type="button"
                    role="tab"
                    aria-selected={index === pageIndex}
                    aria-label={`Go to gallery slide ${pageIndex + 1}`}
                    onClick={() => goTo(pageIndex)}
                    className={`focus-ring h-2.5 rounded-full transition-all ${
                      index === pageIndex
                        ? "w-7 bg-[var(--accent-mid)]"
                        : "w-2.5 bg-[var(--muted)]/35 hover:bg-[var(--muted)]/55"
                    }`}
                  />
                ))}
              </div>
            ) : (
              <span className="text-sm font-medium text-[var(--muted)]">
                {images.length} {images.length === 1 ? "photo" : "photos"}
              </span>
            )}

            <button
              type="button"
              onClick={goNext}
              disabled={!canNext}
              aria-label="Next photos"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(6,21,38,0.08)] bg-[var(--surface)] text-[var(--heading)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--surface-soft)] disabled:cursor-not-allowed disabled:opacity-35 sm:hidden"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      ) : (
        <ul
          className="mt-6 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
          aria-label="Gallery photos coming soon"
        >
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, placeholderIndex) => (
            <li
              key={placeholderIndex}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[rgba(6,21,38,0.12)] bg-[var(--surface-soft)] p-4 text-center"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[rgba(6,21,38,0.06)]">
                <ImageIcon className="h-5 w-5 text-[var(--muted)]" aria-hidden />
              </span>
              <span className="text-xs font-medium text-[var(--muted)]">Photo coming soon</span>
            </li>
          ))}
        </ul>
      )}

      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(6,21,38,0.88)] p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="focus-ring absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              lightboxPrev();
            }}
            className="focus-ring absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              lightboxNext();
            }}
            className="focus-ring absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>

          <div
            className="flex w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[min(72vh,720px)] w-full">
              <Image
                src={images[lightboxIndex]}
                alt={activeLightboxAlt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-4 w-full max-w-3xl text-center">
              <p className="text-sm font-medium text-white/90 sm:text-base">{activeLightboxAlt}</p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">
                {lightboxIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
