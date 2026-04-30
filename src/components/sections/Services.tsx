import Link from "next/link";
import {
  Backpack,
  FileCheck,
  GraduationCap,
  MessagesSquare,
  PlaneLanding,
  School,
  Wallet,
} from "lucide-react";
import { services } from "@/data/content";

const serviceIcons = [
  GraduationCap,
  School,
  FileCheck,
  MessagesSquare,
  Wallet,
  Backpack,
  PlaneLanding,
] as const;

const accentRing = {
  blue: "bg-[var(--accent-soft)] ring-[rgba(37,99,235,0.2)] text-[var(--accent-mid)]",
  purple: "bg-purple-50 ring-purple-200/60 text-purple-700",
  sky: "bg-sky-50 ring-sky-200/60 text-sky-700",
  pink: "bg-pink-50 ring-pink-200/60 text-pink-700",
  amber: "bg-amber-50 ring-amber-200/60 text-amber-800",
  green: "bg-emerald-50 ring-emerald-200/60 text-emerald-700",
  rose: "bg-rose-50 ring-rose-200/60 text-rose-700",
} as const;

export function Services() {
  return (
    <section id="services" data-animate="section" className="section-shell-band">
      <div className="section-padding">
        <div className="section-intro">
          <div className="flex justify-center">
            <span className="eyebrow">International student services</span>
          </div>
          <h2 className="section-heading">Our Services</h2>
          <p className="section-lead">
            Complete study abroad services — university admissions, student visa assistance, scholarships for international
            students, and arrival support under one Dubai consultancy team.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            const n = String(i + 1);
            const ring = accentRing[s.accent];
            return (
              <article
                key={s.title}
                data-hover-card
                className="surface-card-lg relative flex flex-col overflow-hidden rounded-2xl p-6 ring-1 ring-[rgba(6,21,38,0.06)]"
              >
                <span className="pointer-events-none absolute right-3 top-3 text-4xl font-bold tabular-nums text-[var(--surface-soft)]">
                  {n}
                </span>
                <span className={`relative inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${ring}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="relative mt-4 text-base font-semibold text-[var(--heading)]">{s.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-[var(--body-muted)]">{s.description}</p>
              </article>
            );
          })}

          <article className="flex flex-col justify-between rounded-2xl panel-navy p-6 text-white shadow-xl md:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold">Not Sure Where to Start?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Book a free consultation — we&apos;ll map programmes, timelines, and documentation with no obligation.
              </p>
            </div>
            <Link
              href="#contact"
              className="focus-ring mt-8 inline-flex justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[var(--heading)] transition hover:bg-[var(--surface-soft)]"
            >
              Book Free Consultation
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
