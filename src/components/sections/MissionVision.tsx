import { Compass, Eye, Globe2, Star, TrendingUp } from "lucide-react";
import { ACCENT, missionVisionSeoCopy } from "@/data/content";

export function MissionVision() {
  return (
    <section
      aria-labelledby="purpose-heading"
      data-animate="section"
      className="section-shell-band"
    >
      <div className="section-padding">
        <div className="section-intro">
          <div className="flex justify-center">
            <span className="eyebrow">Our purpose</span>
          </div>
          <h2 id="purpose-heading" className="section-heading">
            Driven by Mission, Guided by Vision
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl panel-navy p-8 text-white shadow-xl md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
              <Compass className="h-6 w-6 text-sky-300" aria-hidden />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-sky-300/90">What we do</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-white/85">{missionVisionSeoCopy.mission}</p>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8">
              {[
                { Icon: Star, label: "Expertise" },
                { Icon: TrendingUp, label: "Growth" },
                { Icon: Globe2, label: "Guidance" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="h-5 w-5 text-sky-300" aria-hidden />
                  <span className="text-xs font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card-lg relative rounded-3xl p-8 md:p-10">
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-[rgba(37,99,235,0.15)]"
              style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}
            >
              <Eye className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
              Where we&apos;re headed
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[var(--heading)]">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-[var(--body-muted)]">{missionVisionSeoCopy.vision}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Excellence", "Innovation", "Transparency"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(37,99,235,0.18)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold text-[var(--accent-mid)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
