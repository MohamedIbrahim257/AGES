export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    ttq?: {
      page: () => void;
      track: (...args: unknown[]) => void;
      load: (id: string) => void;
    };
    TiktokAnalyticsObject?: string;
  }
}
