import Link from "next/link";
import { FileText, Play } from "lucide-react";
import { ACCENT, ctaBannerCopy } from "@/data/content";
import { SITE } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="section-shell-white" data-animate="section">
      <div className="section-padding">
        <div className="section-intro">
          <h2 className="section-heading !mt-0">{ctaBannerCopy.title}</h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 md:gap-8">
          <article className="flex flex-col rounded-[2rem] panel-navy p-8 shadow-xl md:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/40 bg-[#1e3a5f]">
              <Play className="h-6 w-6 fill-sky-300 text-sky-300" aria-hidden />
            </span>
            <h3 className="mt-8 font-display text-xl font-semibold text-white md:text-2xl">{ctaBannerCopy.presentationTitle}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-white/75">{ctaBannerCopy.presentationBody}</p>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Request presentation — AGES Global Dubai")}`}
              className="focus-ring mt-8 inline-flex justify-center rounded-xl border border-white/35 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {ctaBannerCopy.presentationCta}
            </a>
          </article>

          <article className="surface-card-lg flex flex-col rounded-[2rem] p-8 md:p-10">
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl ring-2 ring-[rgba(37,99,235,0.15)]"
              style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}
            >
              <FileText className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-8 font-display text-xl font-semibold text-[var(--heading)] md:text-2xl">{ctaBannerCopy.formTitle}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-[var(--body-muted)]">{ctaBannerCopy.formBody}</p>
            <Link href="#contact" className="focus-ring btn-primary-premium mt-8 inline-flex justify-center px-6 py-3.5 text-sm">
              {ctaBannerCopy.formCta}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
