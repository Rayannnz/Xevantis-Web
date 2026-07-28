"use client";

import { useEffect, useRef, type RefObject } from "react";
import { clamp } from "@/lib/utils";
import { useFinePointer, usePrefersReducedMotion } from "./useMediaQuery";

/**
 * These hooks write CSS custom properties straight onto the node instead of
 * lifting pointer coordinates into state. A re-render per `pointermove` would
 * be 60 renders a second for a purely visual effect; the custom property keeps
 * the whole thing on the compositor and off React's render path. The declared
 * transform still lives in the markup, so the element stays declarative.
 */

const setVar = (el: HTMLElement, name: string, value: string) =>
  el.style.setProperty(name, value);

/** 3D tilt keyed to pointer position. Writes --rx / --ry / --mx / --my. */
export function useTilt<T extends HTMLElement>(max = 8): RefObject<T | null> {
  const ref = useRef<T>(null);
  // Both hooks must run unconditionally — `&&` would short-circuit the second.
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      setVar(el, "--ry", `${((px - 0.5) * max * 2).toFixed(2)}deg`);
      setVar(el, "--rx", `${((0.5 - py) * max * 2).toFixed(2)}deg`);
      setVar(el, "--mx", `${(px * 100).toFixed(1)}%`);
      setVar(el, "--my", `${(py * 100).toFixed(1)}%`);
    };

    const onLeave = () => {
      setVar(el, "--rx", "0deg");
      setVar(el, "--ry", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max, enabled]);

  return ref;
}

/** Pointer-following glow. Writes --mx / --my only. */
export function useSpotlight<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);
  // Both hooks must run unconditionally — `&&` would short-circuit the second.
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      setVar(el, "--mx", `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`);
      setVar(el, "--my", `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return ref;
}

/**
 * Cursor attraction for hero CTAs. Writes --tx / --ty; the spring return lives
 * in the element's own transition so the easing stays a design token.
 */
export function useMagnetic<T extends HTMLElement>(
  strength = 0.32,
  radius = 90,
): RefObject<T | null> {
  const ref = useRef<T>(null);
  // Both hooks must run unconditionally — `&&` would short-circuit the second.
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const pull = clamp(
        1 - distance / (Math.max(rect.width, rect.height) / 2 + radius),
        0,
        1,
      );

      setVar(el, "--tx", `${(dx * strength * pull).toFixed(2)}px`);
      setVar(el, "--ty", `${(dy * strength * pull).toFixed(2)}px`);
    };

    const onLeave = () => {
      setVar(el, "--tx", "0px");
      setVar(el, "--ty", "0px");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength, radius, enabled]);

  return ref;
}
