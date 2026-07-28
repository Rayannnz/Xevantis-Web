"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query. Always reports `false` on the server and on the first
 * client render so hydration cannot mismatch, then settles on mount.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);

    update();
    list.addEventListener("change", update);
    return () => list.removeEventListener("change", update);
  }, [query]);

  return matches;
}

export const usePrefersReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");

/** Pointer effects (tilt, magnetic, cursor) are desktop-only by design. */
export const useFinePointer = () =>
  useMediaQuery("(hover: hover) and (pointer: fine)");
