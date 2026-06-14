"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, BookOpen, ChevronDown, Globe2 } from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { SITE, whatsappHref } from "@/lib/site";
import { heroSeoCopy, heroVideo } from "@/data/content";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const heroStats = [
  { icon: BookOpen, label: "University Partners", countTarget: 150 as const, suffix: "+" as const },
  { icon: Globe2, label: "Global Destinations", countTarget: 30 as const, suffix: "+" as const },
  { icon: Award, label: "Accredited Agency", displayValue: "ICEF" as const },
] as const;

function runHeroCounters(root: HTMLElement) {
  if (root.dataset.heroCountDone === "1") return;
  root.dataset.heroCountDone = "1";
  root.querySelectorAll<HTMLElement>("[data-hero-count]").forEach((el) => {
    const raw = el.dataset.target;
    if (raw === undefined) return;
    const target = Number(raw);
    const suffix = el.dataset.suffix ?? "";
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.85,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}${suffix}`;
      },
    });
  });
}

function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    setReduceMotion(reduced);
    if (reduced) return;
    videoRef.current?.play().catch(() => {});
  }, []);

  if (reduceMotion) {
    return (
      <Image
        src={heroVideo.posterSrc}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_40%]"
        priority
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
      poster={heroVideo.posterSrc}
      className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
      aria-hidden
    >
      <source src={heroVideo.src} type="video/mp4" />
    </video>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const showAll = () => {
        gsap.set(
          root.querySelectorAll(
            "[data-hero-badge],[data-hero-line],[data-hero-sub],[data-hero-actions],[data-hero-actions] a,[data-hero-wa],[data-hero-stat],[data-hero-scroll]",
          ),
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "none",
          },
        );
        gsap.set(root.querySelectorAll("[data-hero-video],[data-hero-bg]"), { autoAlpha: 1, scale: 1 });
        root.querySelectorAll<HTMLElement>("[data-hero-count]").forEach((el) => {
          const t = el.dataset.target;
          const s = el.dataset.suffix ?? "";
          if (t !== undefined) el.textContent = `${t}${s}`;
        });
      };

      if (prefersReducedMotion()) {
        showAll();
        return;
      }

      const ctx = gsap.context(() => {
        gsap.set(root.querySelectorAll("[data-hero-video],[data-hero-bg]"), { autoAlpha: 1, scale: 1 });
        gsap.set(root.querySelectorAll("[data-hero-badge]"), { autoAlpha: 0, y: 28 });
        gsap.set(root.querySelectorAll("[data-hero-line]"), {
          autoAlpha: 0,
          y: 44,
          filter: "blur(10px)",
        });
        gsap.set(root.querySelectorAll("[data-hero-sub]"), { autoAlpha: 0, y: 26 });
        gsap.set(root.querySelectorAll("[data-hero-actions] a"), { autoAlpha: 0, y: 22 });
        gsap.set(root.querySelectorAll("[data-hero-wa]"), { autoAlpha: 0, y: 18 });
        gsap.set(root.querySelectorAll("[data-hero-stat]"), { autoAlpha: 0, y: 22 });
        root.querySelectorAll<HTMLElement>("[data-hero-count]").forEach((el) => {
          const s = el.dataset.suffix ?? "";
          el.textContent = `0${s}`;
        });
        gsap.set(root.querySelectorAll("[data-hero-scroll]"), { autoAlpha: 0, y: 14 });

        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        tl.fromTo(
          "[data-hero-badge]",
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.72 },
          0.08,
        );

        tl.fromTo(
          "[data-hero-line]",
          { y: 44, autoAlpha: 0, filter: "blur(10px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.82,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.35",
        );

        tl.fromTo(
          "[data-hero-sub]",
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.62, stagger: 0.1 },
          "-=0.45",
        );

        tl.fromTo(
          "[data-hero-actions] a",
          { y: 22, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.52, stagger: 0.07 },
          "-=0.35",
        );

        tl.fromTo(
          "[data-hero-wa]",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55 },
          "-=0.25",
        );

        tl.fromTo(
          "[data-hero-stat]",
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.58,
            stagger: 0.09,
            onComplete: () => runHeroCounters(root),
          },
          "-=0.45",
        );

        tl.fromTo(
          "[data-hero-scroll]",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.65 },
          "-=0.35",
        );
      }, root);

      return () => ctx.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative overflow-hidden border-b border-[var(--border)]">
      <div data-hero-video className="pointer-events-none absolute inset-0">
        <div className="relative h-full w-full">
          <HeroVideoBackground />
        </div>
      </div>

      <div
        data-hero-bg
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(244,248,253,0.94)_0%,rgba(232,241,251,0.88)_38%,rgba(255,255,255,0.72)_62%,rgba(10,37,64,0.28)_100%)]"
        aria-hidden
      />
      <div
        data-hero-bg
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(10,37,64,0.42)_0%,rgba(29,86,230,0.18)_42%,rgba(255,255,255,0.06)_100%)] mix-blend-multiply"
        aria-hidden
      />
      <div
        data-hero-bg
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%231d56e6%22%20fill-opacity=%220.06%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-transparent via-[var(--gold)]/90 to-transparent opacity-90"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-[calc(5.5rem+3.5rem)] sm:px-6 md:pb-20 md:pt-[calc(5.5rem+4rem)] lg:px-8 lg:pb-24 lg:pt-[calc(5.5rem+5rem)]">
        <div className="mx-auto min-w-0 max-w-3xl">
          <p
            data-hero-badge
            className="inline-flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand)]"
          >
            <a
              href={SITE.icef.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify ICEF accreditation on ICEF.com"
              className="focus-ring shrink-0 rounded-sm opacity-90 transition hover:opacity-100"
            >
              <Image
                src={SITE.icef.badgeSrc}
                alt={SITE.icef.badgeAlt}
                width={104}
                height={152}
                className="h-24 w-auto object-contain sm:h-28"
              />
            </a>
            {heroSeoCopy.badgeLabel}
          </p>

          <h1 data-hero-line className="font-display mt-7 text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-[var(--heading)] sm:text-5xl lg:text-[3.2rem]">
            {heroSeoCopy.titlePrimary}
          </h1>

          <p data-hero-sub className="mt-6 text-lg font-semibold leading-snug text-[var(--heading)] sm:text-xl">
            {heroSeoCopy.subtitleBold}
          </p>

          <p data-hero-sub className="mt-4 max-w-[34rem] text-[17px] leading-relaxed text-[var(--body-muted)] md:text-[1.0625rem]">
            {heroSeoCopy.body}
          </p>
          <p data-hero-sub className="mt-3 max-w-[34rem] text-[17px] leading-relaxed text-[var(--body-muted)] md:text-[1.0625rem]">
            {heroSeoCopy.bodySecondary}
          </p>

          <div data-hero-actions className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookConsultationButton className="focus-ring btn-primary-premium inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm hover:-translate-y-0.5">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </BookConsultationButton>
          </div>

          <a
            data-hero-wa
            href={whatsappHref(`Hello ${SITE.name}, I'd like to learn more about studying abroad.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700/15 bg-gradient-to-b from-emerald-50/90 to-white px-8 py-3.5 text-sm font-semibold text-emerald-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-emerald-600" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>

          <ul
            className="mt-12 grid gap-4 rounded-2xl border border-white/90 bg-gradient-to-b from-white/90 to-white/75 p-6 backdrop-blur-md sm:grid-cols-3 sm:p-7"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <li key={stat.label} data-hero-stat className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-[rgba(6,21,38,0.06)]">
                    <Icon className="h-[1.15rem] w-[1.15rem] text-[var(--accent-mid)]" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="font-display block text-xl font-semibold tabular-nums text-[var(--heading)]">
                      {"countTarget" in stat ? (
                        <span data-hero-count data-target={stat.countTarget} data-suffix={stat.suffix}>
                          0{stat.suffix}
                        </span>
                      ) : (
                        stat.displayValue
                      )}
                    </span>
                    <span className="mt-0.5 block text-[13px] font-medium leading-snug text-[var(--body-muted)]">{stat.label}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div data-hero-scroll className="mt-16 flex justify-center md:mt-20">
          <a
            href="#about"
            className="focus-ring group inline-flex flex-col items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)] transition hover:text-[var(--heading)]"
          >
            Explore more
            <ChevronDown
              className="hero-chevron-bob h-5 w-5 text-[var(--muted)] transition group-hover:text-[var(--accent-mid)]"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
