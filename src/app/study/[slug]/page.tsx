import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getStudyAbroadPage, studyAbroadPageSlugs } from "@/data/studyAbroadPages";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return studyAbroadPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getStudyAbroadPage(slug);
  if (!page) return { title: "Not found" };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${SITE.url}/study/${slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE.url}/study/${slug}`,
      siteName: SITE.name,
      locale: "en_AE",
      type: "article",
    },
  };
}

export default async function StudyAbroadGuidePage({ params }: Props) {
  const { slug } = await params;
  const page = getStudyAbroadPage(slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <article className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
            <Link href="/" className="font-medium text-[var(--accent-mid)] hover:underline">
              Home
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-[var(--heading)]">Study abroad guides</span>
          </nav>

          <h1 className="font-display mt-8 text-3xl font-semibold tracking-tight text-[var(--heading)] md:text-4xl">
            {page.h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--body-muted)]">{page.intro}</p>

          <ul className="mt-8 list-disc space-y-2 pl-5 text-[var(--body-muted)] marker:text-[var(--accent-mid)]">
            {page.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BookConsultationButton className="focus-ring btn-primary-premium inline-flex justify-center rounded-xl px-8 py-3.5 text-center text-sm font-semibold">
              Book a study abroad consultation
            </BookConsultationButton>
            <Link
              href="/#destinations"
              className="focus-ring inline-flex justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-8 py-3.5 text-center text-sm font-semibold text-[var(--heading)] hover:bg-[var(--surface-soft)]/80"
            >
              Explore global destinations
            </Link>
          </div>

          <p className="mt-10 text-sm leading-relaxed text-[var(--muted)]">
            AGES Global Dubai is an ICEF-accredited international education agency supporting university admissions and
            student visa planning for students choosing to study abroad from the UAE.
          </p>
        </div>
      </article>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
