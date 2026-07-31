import type { Accent } from "./types";

/**
 * Accent → utility class lookups.
 *
 * Tailwind cannot see `bg-${accent}-300`, so every accent-driven surface has to
 * resolve through a literal map. Centralizing them here means a service page
 * picks its accent once and the whole page follows.
 *
 * The five accents now resolve to the same restrained surfaces. Color-coding a
 * grid by rotating five pastels made every section read as a rainbow and left
 * nothing for emphasis to use; the ink ramp carries surfaces and violet marks
 * the one thing per view that matters. The union stays open and the maps stay
 * keyed by all five names so the 16 `lib/services/*` files never change — and
 * so reintroducing differentiation later is a single edit here.
 */

/** Every accent resolves to the same class. Written out per key so Tailwind's
 *  source scan still finds each literal. */
const uniform = (value: string): Record<Accent, string> => ({
  sun: value,
  mint: value,
  lilac: value,
  blush: value,
  sky: value,
});

/** Icon tile, for icons sitting on paper. Neutral: the icon carries the shape. */
export const ACCENT_TILE = uniform("bg-ink-100");

/** Large calm areas. */
export const ACCENT_WASH = uniform("bg-ink-050");

/** The lightest tint that still separates from paper. */
export const ACCENT_TINT = uniform("bg-paper-100");

/** Readable accent text on paper — the one place hue is allowed to speak. */
export const ACCENT_TEXT = uniform("text-lilac-500");

/** Soft field behind hero and CTA copy. */
export const ACCENT_ORB = uniform("bg-ink-050");

/** Hover shadow for cards. One tinted elevation, not five colored glows. */
export const ACCENT_GLOW = uniform(
  "group-hover:shadow-[0_28px_60px_-24px_rgb(30_20_80/0.28)]",
);

/**
 * Gradient border, painted onto a card's `::before` and revealed on hover.
 *
 * Written as a raw `background` rather than Tailwind's gradient utilities so
 * the stop positions stay exact and the class survives any future rename of
 * the `bg-gradient-*` / `bg-linear-*` family.
 */
export const ACCENT_EDGE = uniform(
  "before:[background:linear-gradient(140deg,var(--color-lilac-400),transparent_58%)]",
);
