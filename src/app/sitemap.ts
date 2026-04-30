import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { studyAbroadPageSlugs } from "@/data/studyAbroadPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const guides = studyAbroadPageSlugs.map((slug) => ({
    url: `${base}/study/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...guides,
  ];
}
