"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { clamp, withThousands } from "@/lib/utils";
import { watchViewport } from "@/lib/viewport-watch";
import { usePrefersReducedMotion } from "./useMediaQuery";

interface CountUpOptions {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Counts up once, when the figure scrolls into view. A counter left reading
 * "0" reads as a broken page rather than a missed animation, so reduced-motion
 * users get the final value immediately instead of nothing.
 */
export function useCountUp<T extends HTMLElement>({
  to,
  duration = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpOptions) {
  const ref = useRef<T>(null);
  const observed = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = usePrefersReducedMotion();
  const [sweptIn, setSweptIn] = useState(false);
  const [animated, setAnimated] = useState(0);
  const inView = observed || sweptIn;

  // A counter that has no animation to show still has to read correctly, so
  // the final value is derived rather than written from an effect.
  const value = reducedMotion && inView ? to : animated;

  // Same catch-up as the reveal engine: a skipped counter left showing "0"
  // reads as a broken page, not as a missed animation.
  useEffect(() => {
    if (inView) return;
    return watchViewport(() => {
      const el = ref.current;
      if (el && el.getBoundingClientRect().top < window.innerHeight) setSweptIn(true);
    });
  }, [inView]);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = clamp((now - start) / duration, 0, 1);
      // easeOutExpo — matches --ease-out-expo's felt curve.
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setAnimated(to * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reducedMotion]);

  return {
    ref,
    text: `${prefix}${withThousands(value.toFixed(decimals))}${suffix}`,
  };
}
