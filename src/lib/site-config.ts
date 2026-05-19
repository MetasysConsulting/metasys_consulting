/** Site-wide contact & booking — set NEXT_PUBLIC_BOOKING_URL to your Calendly/cal.com link */
export const CONTACT_EMAIL = "contact@metasysconsulting.com";

export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Free 30-Min Discovery Call")}`;
