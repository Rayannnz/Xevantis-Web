import type { CtaLink } from "./types";

/**
 * Constants every service page shares.
 *
 * Anything here is a design decision rather than a content one — the eyebrows
 * label the same section on all fourteen pages, so they belong in one file
 * instead of being copy-pasted into fourteen.
 */

/** In-page anchor for the closing CTA. Every page renders it. */
export const CONTACT_HREF = "#contact";

export const SECTION_EYEBROWS = {
  benefits: "Business impact",
  process: "How we work",
  tech: "Technology",
  why: "Why Xevantis",
  cases: "Selected work",
  quotes: "Client voice",
  faq: "Questions",
  related: "Keep exploring",
  cta: "Start the conversation",
} as const;

export const PRIMARY_CTA: CtaLink = {
  label: "Book a scoping call",
  href: CONTACT_HREF,
};

export const SECONDARY_CTA: CtaLink = {
  label: "See what's included",
  href: "#whats-included",
};
