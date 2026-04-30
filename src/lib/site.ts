/** Site-wide contact — keep aligned with live business details */
export const SITE = {
  name: "AGES Global Dubai",
  legalName: "AGES Global",
  url: "https://www.agesglobaldubai.com",
  email: "dubai@agesglobal.ae",
  phoneDisplay: "+971 527 713 606",
  phoneTel: "+971527713606",
  /** WhatsApp number digits only, no + */
  whatsappDigits: "971565036746",
  addressLine: "Business Bay",
  city: "Dubai",
  country: "United Arab Emirates",
  partnershipsEmail: "international@agesglobal.ae",
  hrEmail: "hr@agesglobal.ae",
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsappDigits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
