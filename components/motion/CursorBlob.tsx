"use client";

import { useEffect, useRef, useState } from "react";
import { cn, lerp } from "@/lib/utils";
import { useFinePointer, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const HOVERABLE =
  "a, button, input, summary, [data-cursor='hover'], [data-cursor-grow]";

/**
 * Smoothed cursor follower that swells over interactive things.
 *
 * Position is written straight to the node each frame — this is a 60fps
 * follower, so it must not go through state. Only the two boolean modes do.
 */
export function CursorBlob() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let started = false;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!started) {
        started = true;
        x = targetX;
        y = targetY;
        setVisible(true);
      }
    };

    const onLeave = () => setVisible(false);
    const onOver = (event: PointerEvent) => {
      if ((event.target as Element | null)?.closest(HOVERABLE)) setHovering(true);
    };
    const onOut = (event: PointerEvent) => {
      if ((event.target as Element | null)?.closest(HOVERABLE)) setHovering(false);
    };

    const loop = () => {
      x = lerp(x, targetX, 0.16);
      y = lerp(y, targetY, 0.16);
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[900] rounded-full mix-blend-multiply",
        "transition-[opacity,width,height] duration-[280ms] ease-out-expo",
        visible ? "opacity-100" : "opacity-0",
        hovering ? "size-[74px] bg-lilac-300" : "size-[26px] bg-sun-400",
      )}
    />
  );
}
