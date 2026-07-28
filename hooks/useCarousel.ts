"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useInView } from "framer-motion";

/** Matches the `gap` on the track. Kept in sync by the single constant. */
const GAP = 20;
const SWIPE_THRESHOLD = 45;

interface CarouselOptions {
  count: number;
  /** Autoplay interval in ms. 0 disables it. */
  autoplay?: number;
}

/**
 * Multi-item carousel that derives how many slides fit from the rendered
 * slide width, so the responsive flex-basis on the slides stays the single
 * source of truth for the breakpoints.
 *
 * Autoplay pauses on hover, on focus, and while the carousel is off-screen.
 */
export function useCarousel({ count, autoplay = 0 }: CarouselOptions) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);

  const [requestedIndex, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const inView = useInView(rootRef, { amount: 0.25 });
  const maxIndex = Math.max(0, count - perView);

  // Derived, not stored: when the viewport widens, `perView` grows and the
  // current index may fall past the new end. Clamping here keeps that a render
  // concern rather than a state-sync effect.
  const index = Math.min(requestedIndex, maxIndex);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;

    const slideWidth = first.getBoundingClientRect().width;
    const trackWidth = track.getBoundingClientRect().width;
    if (!slideWidth) return;

    setPerView(Math.max(1, Math.round(trackWidth / (slideWidth + GAP))));
    setStep(slideWidth + GAP);
  }, []);

  // Slide widths depend on fonts and CSS being settled, so remeasure whenever
  // the track itself changes size, not just on resize.
  useEffect(() => {
    measure();
    const track = trackRef.current;
    const observer = new ResizeObserver(measure);
    if (track) observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = useCallback(
    (target: number) => setIndex(Math.min(Math.max(target, 0), maxIndex)),
    [maxIndex],
  );

  // Wraps in both directions, matching how autoplay returns to the start.
  const next = useCallback(
    () => setIndex(index >= maxIndex ? 0 : index + 1),
    [index, maxIndex],
  );
  const previous = useCallback(
    () => setIndex(index <= 0 ? maxIndex : index - 1),
    [index, maxIndex],
  );

  useEffect(() => {
    if (!autoplay || paused || !inView) return;
    const timer = window.setInterval(next, autoplay);
    return () => window.clearInterval(timer);
  }, [autoplay, paused, inView, next]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const dx = event.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) <= SWIPE_THRESHOLD) return;
    if (dx < 0) next();
    else previous();
  };

  return {
    rootRef,
    trackRef,
    index,
    perView,
    maxIndex,
    offset: -index * step,
    goTo,
    next,
    previous,
    isVisible: (slide: number) => slide >= index && slide < index + perView,
    /** Spread onto the carousel root to wire pause-on-interaction. */
    pauseHandlers: {
      onPointerEnter: () => setPaused(true),
      onPointerLeave: () => setPaused(false),
      onFocusCapture: () => setPaused(true),
      onBlurCapture: () => setPaused(false),
    },
    dragHandlers: { onPointerDown, onPointerUp },
  };
}
