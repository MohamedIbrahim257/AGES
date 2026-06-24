import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Tag } from "lucide-react";
import { BookConsultationButton } from "@/components/BookConsultationButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { NewsArticleChecklist } from "@/components/news/NewsArticleChecklist";
import { getNewsItem, newsItemSlugs } from "@/data/content";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsItemSlugs
    .map((slug) => ({ slug }))
    .filter(({ slug }) => {
      const item = getNewsItem(slug);
      return item?.intro;
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item?.intro) return { title: "Not found" };
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `${SITE.url}/news/${slug}` },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      url: `${SITE.url}/news/${slug}`,
      siteName: SITE.name,
      locale: "en_AE",
      type: "article",
      images: [{ url: item.image.startsWith("/") ? `${SITE.url}${item.image}` : item.image }],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item?.intro) notFound();

  return (
    <>
      <Header />
      <article className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="relative aspect-[21/9] w-full bg-[var(--surface-soft)] md:aspect-[3/1]">
          <Image
            src={item.image}
            alt={item.imageAlt ?? ""}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-12 pt-8 sm:px-6 md:py-12 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
            <Link href="/" className="font-medium text-[var(--accent-mid)] hover:underline">
              Home
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <Link href="/#events" className="font-medium text-[var(--accent-mid)] hover:underline">
              Events & News
            </Link>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[var(--heading)]">
              <Tag className="h-4 w-4 text-[var(--accent-mid)]" aria-hidden />
              {item.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden />
              {item.date}
            </span>
          </div>

          <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight text-[var(--heading)] md:text-4xl">
            {item.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--body-muted)]">{item.intro}</p>

          {item.checklistItems && item.checklistItems.length > 0 && (
            <NewsArticleChecklist items={item.checklistItems} itemLabel={item.checklistLabel} />
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BookConsultationButton className="focus-ring btn-primary-premium inline-flex justify-center rounded-xl px-8 py-3.5 text-center text-sm font-semibold">
              Get visa guidance
            </BookConsultationButton>
            <Link
              href="/#events"
              className="focus-ring inline-flex justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-8 py-3.5 text-center text-sm font-semibold text-[var(--heading)] hover:bg-[var(--surface-soft)]/80"
            >
              Back to Events & News
            </Link>
          </div>

          <p className="mt-10 text-sm leading-relaxed text-[var(--muted)]">
            AGES Global Dubai provides step-by-step student visa assistance — documentation review, application
            preparation, and embassy readiness support for students studying abroad from the UAE.
          </p>
        </div>
      </article>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
