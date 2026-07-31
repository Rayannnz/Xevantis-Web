"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/lib/types";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const TOTAL_DAYS = 14;

/**
 * Scroll-driven step walkthrough: a pinned rail on the left keeps the current
 * day marker in view while the steps scroll past on the right, each lighting
 * up as the progress line reaches it.
 *
 * Inactive steps dim, never hide — at 0.45 opacity the content stays readable
 * if JS never runs, and with reduced motion nothing dims at all.
 */
export function StickySteps({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  // 0.55: a step activates when it crosses just below the viewport's middle,
  // which is where the reader's eye actually is during a long scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.55", "end 0.55"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.floor(progress * steps.length);
    setActive(Math.min(steps.length - 1, Math.max(0, next)));
  });

  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const current = steps[active];

  // "Days 5–13" → 13. The calendar fills to the end of the active step's range.
  const dayEnd = (step?: ProcessStep) => {
    const match = step?.day?.match(/(\d+)\s*$/);
    return match ? Number(match[1]) : 0;
  };
  const filledDays = reducedMotion ? TOTAL_DAYS : dayEnd(current);

  return (
    <div
      ref={ref}
      className="grid gap-[clamp(2rem,1rem+3vw,4rem)] min-[901px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
    >
      {/* Pinned rail. On mobile it simply leads the list. */}
      <div className="self-start min-[901px]:sticky min-[901px]:top-[calc(var(--header-height)+5rem)]">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-ink-400">
          Where you are
        </span>
        <div className="mt-2 overflow-hidden">
          <motion.p
            key={reducedMotion ? "static" : active}
            initial={reducedMotion ? false : { y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-extrabold tabular-nums tracking-tighter"
          >
            {current?.day ?? `Step ${active + 1}`}
          </motion.p>
        </div>
        <p className="mt-3 text-sm text-ink-500">
          Step {active + 1} of {steps.length} · trained and answering your phone
          in as little as two weeks.
        </p>

        {/* The launch, as a wall calendar: two weeks, filling in as you read. */}
        <div className="mt-6 max-w-[300px] rounded-lg border border-ink-900/10 bg-paper-000 p-4">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-ink-400">
              The 14 days
            </span>
            <span className="font-display text-xs font-bold tabular-nums text-sun-500">
              {filledDays}/{TOTAL_DAYS}
            </span>
          </div>
          <div aria-hidden className="grid grid-cols-7 gap-[6px]">
            {Array.from({ length: TOTAL_DAYS }, (_, day) => (
              <span
                key={day}
                className={cn(
                  "grid aspect-square place-items-center rounded-[6px] border font-display text-[10px] font-bold tabular-nums",
                  "transition-colors duration-500",
                  day < filledDays
                    ? "border-transparent bg-sun-300 text-ink-900"
                    : "border-ink-900/10 bg-paper-050 text-ink-300",
                )}
              >
                {day + 1}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ol className="relative">
        {/* Track and its scroll-driven fill. */}
        <span
          aria-hidden
          className="absolute bottom-2 left-[5px] top-2 w-[2px] rounded-pill bg-ink-900/10"
        />
        <motion.span
          aria-hidden
          style={{ scaleY: reducedMotion ? 1 : lineScale }}
          className="absolute bottom-2 left-[5px] top-2 w-[2px] origin-top rounded-pill bg-sun-400"
        />

        {steps.map((step, index) => (
          <li
            key={step.title}
            className={cn(
              "relative pb-10 pl-10 transition-opacity duration-500 last:pb-0",
              !reducedMotion && index !== active && "opacity-45",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-[0.45rem] size-3 rounded-full border-2 border-paper-100 transition-colors duration-500",
                index <= active ? "bg-sun-400" : "bg-ink-200",
              )}
            />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-ink-400">
              {step.day}
            </span>
            <h3 className="mt-1 font-display text-xl font-bold leading-snug tracking-tight">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[56ch] text-base text-ink-500">{step.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
