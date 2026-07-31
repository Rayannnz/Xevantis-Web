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
  | "clip";

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

/** Hidden states, one per `data-reveal` value in the original system. */
const hiddenByVariant: Record<RevealVariant, TargetAndTransition> = {
  up: { opacity: 0, y: 32 },
  fade: { opacity: 0, y: 0 },
  scale: { opacity: 0, y: 14, scale: 0.94 },
  left: { opacity: 0, x: -SLIDE_X },
  right: { opacity: 0, x: SLIDE_X },
  blur: { opacity: 0, y: 16, filter: "blur(14px)" },
  pop: { opacity: 0, y: 10, scale: 0.8 },
  clip: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
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
  children: ReactNode;
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
        duration: 0.9,
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
