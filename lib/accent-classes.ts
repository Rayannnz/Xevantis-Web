import type { Accent } from "./types";

/**
 * Accent → utility class lookups.
 *
 * Tailwind cannot see `bg-${accent}-300`, so every accent-driven surface has to
 * resolve through a literal map. Centralizing them here means a service page
 * picks its accent once and the whole page follows.
 */

/** Solid 300-step tile, for icons sitting on paper. */
export const ACCENT_TILE: Record<Accent, string> = {
  sun: "bg-sun-300",
  mint: "bg-mint-300",
  lilac: "bg-lilac-300",
  blush: "bg-blush-300",
  sky: "bg-sky-300",
};

/** 100-step wash, for large calm areas. */
export const ACCENT_WASH: Record<Accent, string> = {
  sun: "bg-sun-100",
  mint: "bg-mint-100",
  lilac: "bg-lilac-100",
  blush: "bg-blush-100",
  sky: "bg-sky-100",
};

/** 050-step wash — the lightest tint that still reads as colored. */
export const ACCENT_TINT: Record<Accent, string> = {
  sun: "bg-sun-050",
  mint: "bg-mint-050",
  lilac: "bg-lilac-050",
  blush: "bg-blush-050",
  sky: "bg-sky-050",
};

/** Readable accent text on paper — the 500 step, never the pastels. */
export const ACCENT_TEXT: Record<Accent, string> = {
  sun: "text-sun-500",
  mint: "text-mint-500",
  lilac: "text-lilac-500",
  blush: "text-blush-500",
  sky: "text-sky-500",
};

/** Blurred orb behind hero and CTA copy. */
export const ACCENT_ORB: Record<Accent, string> = {
  sun: "bg-sun-200",
  mint: "bg-mint-200",
  lilac: "bg-lilac-200",
  blush: "bg-blush-200",
  sky: "bg-sky-200",
};

/** Hover glow for cards. Kept low-alpha so a grid of them stays quiet. */
export const ACCENT_GLOW: Record<Accent, string> = {
  sun: "group-hover:shadow-[0_28px_60px_-24px_rgb(122_69_230/0.45)]",
  mint: "group-hover:shadow-[0_28px_60px_-24px_rgb(116_107_88/0.35)]",
  lilac: "group-hover:shadow-[0_28px_60px_-24px_rgb(111_97_184/0.42)]",
  blush: "group-hover:shadow-[0_28px_60px_-24px_rgb(128_103_41/0.35)]",
  sky: "group-hover:shadow-[0_28px_60px_-24px_rgb(98_110_136/0.4)]",
};

/**
 * Gradient border, painted onto a card's `::before` and revealed on hover.
 *
 * Written as a raw `background` rather than Tailwind's gradient utilities so
 * the stop positions stay exact and the class survives any future rename of
 * the `bg-gradient-*` / `bg-linear-*` family.
 */
export const ACCENT_EDGE: Record<Accent, string> = {
  sun: "before:[background:linear-gradient(140deg,var(--color-sun-300),transparent_58%)]",
  mint: "before:[background:linear-gradient(140deg,var(--color-mint-300),transparent_58%)]",
  lilac: "before:[background:linear-gradient(140deg,var(--color-lilac-300),transparent_58%)]",
  blush: "before:[background:linear-gradient(140deg,var(--color-blush-300),transparent_58%)]",
  sky: "before:[background:linear-gradient(140deg,var(--color-sky-300),transparent_58%)]",
};
