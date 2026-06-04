/** Site-wide contact — keep aligned with live business details */
export const SITE = {
  name: "AGES Global Dubai",
  legalName: "AGES Global",
  logoSrc: "/images/ages-logooo.png",
  url: "https://www.agesglobaldubai.com",
  email: "ages.dubai@agesglobal.ae",
  phoneDisplay: "+971 527 713 606",
  phoneTel: "+971527713606",
  /** WhatsApp number digits only, no + */
  whatsappDigits: "971565036746",
  whatsappDisplay: "+971 565 036 746",
  addressLine: "Dubai",
  city: "Dubai",
  country: "United Arab Emirates",
  partnershipsEmail: "international@agesglobal.ae",
  hrEmail: "hr@agesglobal.ae",
  /** Add full profile URLs when available; links hidden when href is empty */
  social: [
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "LinkedIn", href: "" },
  ] as const,
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsappDigits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
