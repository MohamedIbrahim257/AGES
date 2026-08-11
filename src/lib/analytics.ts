/** Analytics IDs — set in `.env.local` (see `.env.example`). */
export const ANALYTICS = {
  ga4: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() ?? "",
  clarity: process.env.NEXT_PUBLIC_CLARITY_ID?.trim() ?? "",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID?.trim() ?? "",
  meta: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "",
} as const;

export const hasAnalytics = Boolean(
  ANALYTICS.ga4 || ANALYTICS.clarity || ANALYTICS.tiktok || ANALYTICS.meta,
);

