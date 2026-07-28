"use client";

import { useEffect, useState } from "react";

interface HeaderState {
  /** Past the first few pixels — the bar gains opacity and a shadow. */
  stuck: boolean;
  /** Hidden while scrolling down, revealed on the way back up. */
  hidden: boolean;
}

/**
 * One scroll listener, throttled to a frame. `pinned` opts a page out of the
 * hide-on-scroll behaviour (the design-system shell keeps its nav on screen).
 */
export function useHeaderState(pinned = false): HeaderState {
  const [state, setState] = useState<HeaderState>({ stuck: false, hidden: false });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const frame = () => {
      const y = window.scrollY;
      setState({
        stuck: y > 12,
        // Never hide near the top, where the nav is the only orientation cue.
        hidden: !pinned && y > lastY && y > 320,
      });
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(frame);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    frame();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pinned]);

  return state;
}
