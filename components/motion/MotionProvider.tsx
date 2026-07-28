"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Honours `prefers-reduced-motion` for every Framer-driven animation.
 *
 * The CSS media query in globals.css only neutralises CSS animations and
 * transitions — JS-driven ones keep running at full duration unless Framer is
 * told otherwise. `reducedMotion="user"` snaps transform and opacity
 * animations to their end state, so revealed content still appears.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
