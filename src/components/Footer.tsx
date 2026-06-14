import { SITE } from "@/lib/site";
import { studyAbroadPages } from "@/data/studyAbroadPages";

const quickLinks = [
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#destinations", label: "Destinations" },
  { href: "#events", label: "News & events" },
  { href: "#faq", label: "FAQ" },
  { href: "#terms", label: "Terms & conditions" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] text-slate-300" style={{ background: "var(--footer-bg)" }}>
      <div className="section-padding grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-white">{SITE.legalName}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Your trusted agency for international study opportunities — university admissions, student visas, and
            scholarships with expert, ethical guidance.
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Quick links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-slate-400 transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Study abroad guides</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {studyAbroadPages.map((p) => (
              <li key={p.slug}>
                <a href={`/study/${p.slug}`} className="text-slate-400 transition hover:text-white">
                  {p.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h2>
          <address className="mt-5 not-italic text-sm leading-relaxed text-slate-400">
            {SITE.country}
            <br />
            <a href={`mailto:${SITE.email}`} className="mt-3 inline-block transition hover:text-white">
              {SITE.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="max-w-xl text-right text-slate-500 sm:text-right">
            Study abroad UAE · International education agency
          </p>
        </div>
      </div>
    </footer>
  );
}
