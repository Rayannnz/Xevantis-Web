"use client";

import { motion, type TargetAndTransition, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

export type RevealVariant =
  | "up"
  | "fade"
  | "scale"
  | "left"
  | "right"
  | "blur"
  | "pop"
  | "clip"
  | "rule";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_OUT_BACK = [0.34, 1.56, 0.64, 1] as const;

/**
 * Horizontal travel is capped below the narrowest gutter.
 *
 * `--gutter` bottoms out at 20px on small screens, so a 40px slide put half
 * the element past the viewport edge on the way in — clipped by the root's
 * `overflow-x: hidden` and visibly cropping the first characters of a line.
 * 16px stays inside the gutter at every breakpoint and still reads as a slide.
 */
const SLIDE_X = 16;

/**
 * Vertical travel on the default entrance.
 *
 * 32px reads as an element arriving from off-screen — the eye follows the
 * movement instead of the words. 8px reads as the page settling: enough to
 * register that something resolved, not enough to animate the reader's
 * attention away from what it says.
 */
const RISE_Y = 8;

/** Hidden states, one per `data-reveal` value in the original system. */
const hiddenByVariant: Record<RevealVariant, TargetAndTransition> = {
  up: { opacity: 0, y: RISE_Y },
  fade: { opacity: 0, y: 0 },
  scale: { opacity: 0, y: 14, scale: 0.94 },
  left: { opacity: 0, x: -SLIDE_X },
  right: { opacity: 0, x: SLIDE_X },
  blur: { opacity: 0, y: 16, filter: "blur(14px)" },
  pop: { opacity: 0, y: 10, scale: 0.8 },
  clip: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  /* Stays fully opaque: a rule that never animates should be an invisible
     zero-width line, not a visible blank strip holding open a gap. */
  rule: { opacity: 1, scaleX: 0 },
};

const shownByVariant: Record<RevealVariant, TargetAndTransition> = {
  up: { opacity: 1, y: 0 },
  fade: { opacity: 1, y: 0 },
  scale: { opacity: 1, y: 0, scale: 1 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  blur: { opacity: 1, y: 0, filter: "blur(0px)" },
  pop: { opacity: 1, y: 0, scale: 1 },
  clip: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  rule: { opacity: 1, scaleX: 1 },
};

/**
 * Seconds. One entrance speed for everything, so a page of staggered reveals
 * resolves at a single tempo rather than as several overlapping ones. The rule
 * runs longer only because a line drawing its full width at 420ms reads as a
 * flicker rather than as a stroke.
 */
const DURATION = 0.42;
const DURATION_BY_VARIANT: Partial<Record<RevealVariant, number>> = {
  rule: 0.62,
};

const TAGS = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  ul: motion.ul,
  article: motion.article,
  section: motion.section,
  figure: motion.figure,
} as const;

export interface RevealProps {
  /** Optional: `rule` reveals a bare divider, which has nothing inside it. */
  children?: ReactNode;
  /** Entrance shape. Defaults to the 32px rise used across the site. */
  variant?: RevealVariant;
  /** Milliseconds, matching the original `data-delay`. */
  delay?: number;
  as?: keyof typeof TAGS;
  className?: string;
  id?: string;
  "aria-hidden"?: boolean;
}

/**
 * Scroll entrance. Replaces the IntersectionObserver engine and its
 * `[data-reveal]` CSS with one declarative component.
 *
 * `once: true` is deliberate — replaying entrances on scroll-back is nausea,
 * not delight. The viewport margin reproduces the engine's -12% trigger line.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  as = "div",
  className,
  ...rest
}: RevealProps) {
  const Tag = TAGS[as];
  const { ref, shown } = useReveal<HTMLElement>();

  const variants: Variants = {
    hidden: hiddenByVariant[variant],
    shown: {
      ...shownByVariant[variant],
      transition: {
        duration: DURATION_BY_VARIANT[variant] ?? DURATION,
        delay: delay / 1000,
        ease: variant === "pop" ? EASE_OUT_BACK : EASE_OUT_EXPO,
      },
    },
  };

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      initial="hidden"
      animate={shown ? "shown" : "hidden"}
      variants={variants}
      {...rest}
    >
      {children}
    </Tag>
  );
}
