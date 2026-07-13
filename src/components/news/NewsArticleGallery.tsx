import Image from "next/image";
import { ImageIcon } from "lucide-react";

const PLACEHOLDER_COUNT = 6;

type Props = {
  title: string;
  images?: string[];
  imageAlts?: string[];
};

export function NewsArticleGallery({ title, images = [], imageAlts = [] }: Props) {
  const hasImages = images.length > 0;

  return (
    <section className="mt-10" aria-labelledby="news-gallery-heading">
      <h2
        id="news-gallery-heading"
        className="font-display text-2xl font-semibold tracking-tight text-[var(--heading)]"
      >
        {title}
      </h2>

      {hasImages ? (
        <ul className="mt-6 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((src, index) => (
            <li
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface-soft)] ring-1 ring-[rgba(6,21,38,0.06)]"
            >
              <Image
                src={src}
                alt={imageAlts[index] ?? `${title} photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 280px"
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul
          className="mt-6 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
          aria-label="Gallery photos coming soon"
        >
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
            <li
              key={index}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[rgba(6,21,38,0.12)] bg-[var(--surface-soft)] p-4 text-center"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[rgba(6,21,38,0.06)]">
                <ImageIcon className="h-5 w-5 text-[var(--muted)]" aria-hidden />
              </span>
              <span className="text-xs font-medium text-[var(--muted)]">Photo coming soon</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
