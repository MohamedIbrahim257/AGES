"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookConsultationButton } from "@/components/BookConsultationButton";
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 overflow-visible transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(6,21,38,0.08)] bg-[rgba(255,255,255,0.78)] shadow-[0_8px_30px_-12px_rgba(6,21,38,0.1)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-h-[4.5rem] max-w-7xl items-center justify-between gap-3 overflow-visible px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring relative z-10 flex h-[4.5rem] shrink-0 items-center overflow-visible rounded-lg outline-offset-4"
        >
          <span className="relative block h-11 w-[112px] origin-left scale-[1.62] sm:h-12 sm:w-[122px] sm:scale-[1.72] md:w-[132px] md:scale-[1.82]">
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
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-[13px] font-medium text-[var(--body-muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
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
                className="rounded-lg px-3 py-2.5 text-[var(--body-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="rounded-lg px-3 py-2.5 font-medium text-[var(--accent-mid)]">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
