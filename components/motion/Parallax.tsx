"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

interface ParallaxProps {
  children: ReactNode;
  /** Negative values drift against the scroll direction. */
  speed?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

/**
 * Scroll-linked vertical drift.
 *
 * The offset pair puts progress 0 at "element centre level with the viewport
 * bottom" and 1 at "centre level with the viewport top", which is the same
 * −0.5…0.5 window the original engine measured by hand.
 */
export function Parallax({
  children,
  speed = -0.15,
  className,
  ...rest
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });

  const travel = speed * 50;
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: reducedMotion ? 0 : y }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
