import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Study Abroad Dubai & UAE | AGES Global — International Education Agency & University Admissions",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Study abroad Dubai & UAE: ICEF-accredited international education agency for university admissions, student visa support, scholarships for international students, and study abroad counselling across the UK, USA, Canada, Europe & Asia.",
  keywords: [
    "study abroad",
    "study abroad Dubai",
    "study abroad UAE",
    "international education agency",
    "international education agency Dubai",
    "university admissions",
    "student visa support",
    "study abroad consultancy Dubai",
    "scholarships for international students",
    "study in UK",
    "study in Canada",
    "study in Germany",
    "ICEF accredited",
  ],
  openGraph: {
    title: "Study Abroad Dubai | AGES Global — University Admissions & Visa Support",
    description:
      "International education agency in Dubai helping UAE students with study abroad planning, university admissions, student visas, and scholarships.",
    locale: "en_AE",
    siteName: SITE.name,
    type: "website",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "AGES Global Dubai | Study Abroad & International Education Agency",
    description:
      "Study abroad UAE — admissions, student visa support, scholarships. Trusted ICEF-accredited consultants in Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--background)] text-[var(--foreground)] font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
