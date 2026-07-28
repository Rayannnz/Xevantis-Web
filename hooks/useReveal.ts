"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { watchViewport } from "@/lib/viewport-watch";

/** Same -12% trigger line the IntersectionObserver uses. */
const TRIGGER_RATIO = 0.88;

const VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -12% 0px",
} as const;

/**
 * Scroll-reveal trigger with a safety net.
 *
 * An IntersectionObserver only reports what it samples on a rendered frame,
 * which leaves three ways for content to strand at opacity 0: the page never
 * composited (background tab), the viewport jumped clean past an element
 * between samples (anchor link, restored scroll, scrollbar drag), or the
 * document grew after the viewport had already passed it. The sweep reveals
 * anything at or above the trigger line regardless.
 *
 * Content that only appears if an animation ran is content that can disappear.
 */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, VIEWPORT);
  const [sweptIn, setSweptIn] = useState(false);

  useEffect(() => {
    if (sweptIn || inView) return;

    return watchViewport(() => {
      const el = ref.current;
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight * TRIGGER_RATIO) {
        setSweptIn(true);
      }
    });
  }, [sweptIn, inView]);

  return { ref, shown: inView || sweptIn };
}
