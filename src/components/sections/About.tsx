import Image from "next/image";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { Award, Compass, Globe2, ShieldCheck } from "lucide-react";
import { ACCENT, aboutSeoCopy } from "@/data/content";

const features = [
  {
    icon: ShieldCheck,
    title: "ICEF Accredited",
    subtitle: "Internationally recognized education agency standards",
  },
  {
    icon: Award,
    title: "Accreditation",
    subtitle: "Recognized by leading international organizations",
  },
  {
    icon: Globe2,
    title: "30+ Countries",
    subtitle: "Structured guidance across global destinations",
  },
  {
    icon: Compass,
    title: "Personalized Approach",
    subtitle: "Ethical counselling focused on long-term success",
  },
];

export function About() {
  return (
    <section
      id="about"
      data-animate="section"
      className="relative overflow-hidden section-shell-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_10%_30%,rgba(37,99,235,0.045),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_90%_75%,rgba(99,102,241,0.035),transparent)]" />

      <div className="section-padding relative">
        <div className="mx-auto grid min-w-0 max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-w-0 lg:order-none">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.35rem] bg-gradient-to-br from-[var(--accent-mid)]/[0.14] via-transparent to-indigo-500/10 blur-2xl" />
            <div className="pointer-events-none absolute -inset-px rounded-[2.05rem] bg-gradient-to-br from-white via-transparent to-[var(--accent-soft)] opacity-90" />

            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-200 shadow-[var(--shadow-soft)] ring-[3px] ring-white lg:aspect-[3/4]">
                <Image
                  src={aboutSeoCopy.imageSrc}
                  alt={aboutSeoCopy.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--heading)]/[0.18] via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/25 to-transparent" />
              </div>
            </div>
          </div>

          <div className="relative min-w-0 pt-6 lg:pt-0 lg:pb-4">
            <div className="relative">
              <div className="absolute -left-4 top-2 hidden h-[calc(100%-0.5rem)] w-1 rounded-full bg-gradient-to-b from-[var(--accent-mid)] via-[var(--accent-mid)]/40 to-transparent lg:block" />
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--heading)] md:text-[2.15rem] md:leading-tight">
                {aboutSeoCopy.title}
              </h2>
            </div>

            {aboutSeoCopy.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed text-[var(--body-muted)] md:text-[17px] ${i === 0 ? "mt-5 text-lg font-medium text-[var(--heading)]" : "mt-5 text-base"}`}
              >
                {p}
              </p>
            ))}

            <div className="mt-10 grid gap-3.5 sm:grid-cols-2 sm:gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  data-hover-card
                  className="card-premium flex gap-3.5 p-[1.05rem] transition-colors hover:border-[rgba(37,99,235,0.18)]"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-soft)] to-white shadow-inner ring-1 ring-[rgba(37,99,235,0.12)]"
                    style={{ color: ACCENT }}
                  >
                    <f.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold leading-snug text-[var(--heading)]">{f.title}</p>
                    <p className="mt-1 text-sm leading-snug text-[var(--body-muted)]">{f.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <BookConsultationButton className="focus-ring btn-primary-premium mt-10 inline-flex rounded-xl px-8 py-3.5 text-sm font-semibold">
              Book a consultation
            </BookConsultationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
