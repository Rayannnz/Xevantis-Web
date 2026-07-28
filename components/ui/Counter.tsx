"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/useCountUp";
import { useReveal } from "@/hooks/useReveal";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

/** Figure that counts up once on entry. Tabular figures stop the width jitter. */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration,
  className,
}: CounterProps) {
  const { ref, text } = useCountUp<HTMLSpanElement>({
    to,
    suffix,
    prefix,
    decimals,
    duration,
  });

  return (
    <span ref={ref} className={cn("[font-variant-numeric:tabular-nums]", className)}>
      {text}
    </span>
  );
}

/** Progress bar that grows to `value` (0–1) when it scrolls into view. */
export function Meter({
  value,
  delay = 0,
  className,
}: {
  value: number;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("h-2 overflow-hidden rounded-pill bg-ink-050", className)}>
      <motion.div
        className="h-full origin-left rounded-[inherit] bg-[linear-gradient(90deg,var(--color-lilac-400),var(--color-sun-400))]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: shown ? value : 0 }}
        transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: delay / 1000 }}
      />
    </div>
  );
}
