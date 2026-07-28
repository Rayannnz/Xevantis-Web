"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

interface SplitWordsProps {
  text: string;
  /** Milliseconds between adjacent words. 45–120ms keeps it reading as a group. */
  stagger?: number;
  as?: keyof typeof TAGS;
  className?: string;
  id?: string;
}

const word: Variants = {
  hidden: { y: "110%", rotate: 3, opacity: 0 },
  shown: (index: number) => ({
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: {
      y: { duration: 0.95, ease: EASE_OUT_EXPO, delay: index },
      rotate: { duration: 0.95, ease: EASE_OUT_EXPO, delay: index },
      opacity: { duration: 0.6, ease: "linear", delay: index },
    },
  }),
};

/**
 * Headline that rises word-by-word out of a mask.
 *
 * The visible words are `aria-hidden` and the heading carries the full string
 * as its accessible name, so screen readers get one uninterrupted sentence
 * rather than a stream of fragments.
 */
export function SplitWords({
  text,
  stagger = 60,
  as = "h2",
  className,
  id,
}: SplitWordsProps) {
  const Tag = TAGS[as];
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  const { ref, shown } = useReveal<HTMLHeadingElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      aria-label={text}
      initial="hidden"
      animate={shown ? "shown" : "hidden"}
    >
      {/* The mask each word climbs out of. The padding/margin pair gives
          descenders room without opening a gap under the line. */}
      <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
        {words.map((unit, index) => (
          <Fragment key={`${unit}-${index}`}>
            <motion.span
              aria-hidden
              className="inline-block will-change-transform"
              variants={word}
              custom={(index * stagger) / 1000}
            >
              {unit}
            </motion.span>
            {index < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}

/** Shared type ramp for the split headings, so sizes stay consistent. */
export const headingClass = cn(
  "font-display font-bold text-4xl tracking-tighter text-balance",
);
