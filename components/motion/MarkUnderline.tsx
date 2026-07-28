"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * Headline emphasis: a hand-drawn underline that draws itself when the phrase
 * scrolls into view. `preserveAspectRatio="none"` lets the stroke stretch to
 * whatever width the text ends up at.
 */
export function MarkUnderline({ children }: { children: ReactNode }) {
  const { ref, shown } = useReveal<HTMLSpanElement>();

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.18em] left-0 h-[0.4em] w-full overflow-visible"
      >
        <motion.path
          d="M4 8C46 3 108 2 196 6"
          fill="none"
          stroke="var(--color-sun-400)"
          strokeWidth={8}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: shown ? 1 : 0 }}
          transition={{ duration: 0.72, ease: EASE_OUT_EXPO, delay: 0.25 }}
        />
      </svg>
    </span>
  );
}
