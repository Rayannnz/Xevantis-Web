import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const withThousands = (value: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * Reads a `@theme` color token as its literal hex. WebGL shaders take numbers,
 * not `var(--color-sun-400)`, so the canvas backgrounds resolve their palette
 * here at mount rather than hardcoding a hex the token layer already owns.
 * Client-only — returns the fallback during SSR.
 */
export const cssToken = (name: string, fallback = "#000000") => {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
};
