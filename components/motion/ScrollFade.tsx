"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

/**
 * Scroll-linked exit: the wrapped block drifts up and fades as it scrolls off
 * the top of the viewport. Entrances stay with `Reveal`; this only handles
 * leaving, so the two never fight over opacity.
 */
export function ScrollFade({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reducedMotion ? undefined : { opacity, y }}
    >
      {children}
    </motion.div>
  );
}
