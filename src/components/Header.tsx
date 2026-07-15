"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { heroSeoCopy } from "@/data/content";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-[rgba(6,21,38,0.08)] bg-[rgba(255,255,255,0.78)] shadow-[0_8px_30px_-12px_rgba(6,21,38,0.1)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[5.5rem] max-h-[5.5rem] max-w-7xl items-center justify-between gap-3 overflow-visible px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring relative z-10 flex h-[5.5rem] shrink-0 items-center overflow-visible rounded-lg outline-offset-4"
        >
          <span className="relative block h-11 w-[112px] origin-left scale-[2.08] sm:h-12 sm:w-[122px] sm:scale-[2.25] md:w-[132px] md:scale-[2.35]">
            <Image
              src={SITE.logoSrc}
              alt={`${SITE.name} logo`}
              fill
              priority
              sizes="(max-width: 640px) 180px, 240px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <a
          href={SITE.icef.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Verify ICEF accreditation on ICEF.com"
          className={`focus-ring hidden shrink-0 items-center gap-3 overflow-hidden rounded-lg transition-all duration-300 md:flex ${
            scrolled ? "max-w-[24rem] opacity-100 lg:max-w-[28rem]" : "pointer-events-none max-w-0 opacity-0"
          }`}
        >
          <Image
            src={SITE.icef.badgeSrc}
            alt={SITE.icef.badgeAlt}
            width={175}
            height={210}
            className="h-14 w-auto shrink-0 object-contain lg:h-[4.75rem]"
          />
          <span className="min-w-0 text-[11px] font-semibold uppercase leading-tight tracking-[0.12em] text-[var(--heading)] lg:text-xs lg:tracking-[0.14em]">
            {heroSeoCopy.badgeLabel}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:ml-auto md:flex lg:ml-0" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-[13px] font-semibold text-[var(--heading)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent-mid)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <BookConsultationButton className="focus-ring btn-primary-premium inline-flex rounded-full px-6 py-2.5 text-[13px] font-semibold shadow-lg hover:-translate-y-px">
            Book consultation
          </BookConsultationButton>
        </div>
        <div className="flex items-center gap-2 md:contents">
          <a
            href={SITE.icef.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify ICEF accreditation on ICEF.com"
            className={`focus-ring shrink-0 rounded-sm transition-opacity duration-300 md:hidden ${
              scrolled ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={SITE.icef.badgeSrc}
              alt=""
              width={175}
              height={210}
              className="h-12 w-auto object-contain"
              aria-hidden
            />
          </a>
          <button
          type="button"
          className="focus-ring inline-flex rounded-lg p-2 text-[var(--heading)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[rgba(6,21,38,0.08)] bg-[rgba(255,255,255,0.94)] px-4 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 font-semibold text-[var(--heading)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-mid)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* <a href={`tel:${SITE.phoneTel}`} className="rounded-lg px-3 py-2.5 font-medium text-[var(--accent-mid)]">
              Call {SITE.phoneDisplay}
            </a> */}
          </div>
        </div>
      ) : null}
    </header>
  );
}
