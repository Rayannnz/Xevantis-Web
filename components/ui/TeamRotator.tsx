"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import { ACCENT_ORB, ACCENT_TEXT, ACCENT_TILE } from "@/lib/accent-classes";
import { PulseDot } from "@/components/ui/primitives";
import { Brackets, Headset, Ledger, PenNib, ShieldCheck } from "@/components/icons";

const ROTATE_MS = 3400;

interface TeamRole {
  /** The seat, not a person — we staff roles, and inventing named faces would
   *  put fabricated employees on the homepage. */
  role: string;
  detail: string;
  /** Where a seat like this actually sits today. */
  placement: string;
  accent: Accent;
  icon: ReactNode;
}

/**
 * Icons live here rather than in `lib/content.ts` because they are JSX — the
 * same split `Services.tsx` uses to keep the content module free of React.
 */
const ROLES: TeamRole[] = [
  {
    role: "Front desk specialist",
    detail: "Answers every call live and books it straight into your schedule.",
    placement: "Dental practice · Queens, NY",
    accent: "sky",
    icon: <Headset />,
  },
  {
    role: "Insurance verifier",
    detail: "Checks benefits before the visit, so nothing bounces back later.",
    placement: "Medical clinic · Bronx, NY",
    accent: "mint",
    icon: <ShieldCheck />,
  },
  {
    role: "Bookkeeper",
    detail: "Closes your month by the fifth, working in your own QuickBooks.",
    placement: "Accounting firm · Yonkers, NY",
    accent: "sun",
    icon: <Ledger />,
  },
  {
    role: "Paralegal",
    detail: "Builds filing packets and chases records against a checklist.",
    placement: "Law firm · Brooklyn, NY",
    accent: "lilac",
    icon: <PenNib />,
  },
  {
    role: "IT engineer",
    detail: "Keeps the network up, the patches current and the backups tested.",
    placement: "Engineering firm · Long Island, NY",
    accent: "blush",
    icon: <Brackets />,
  },
];

/**
 * The hero's right-hand column: the seats we staff, cycling one at a time.
 *
 * Deliberately not a metrics dashboard. A chart of our own numbers asks a
 * visitor to trust figures they cannot check; a rotating roster answers the
 * question they actually arrived with — who would I get, and what would they
 * do all day.
 *
 * Autoplay stops when the component is off-screen, hovered or focused, so a
 * background tab is not animating and a reader is never fighting the timer.
 */
export function TeamRotator({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const inView = useInView(rootRef, { amount: 0.3 });
  // Snapping between roles every few seconds is exactly the kind of
  // involuntary movement the preference exists to stop, so honor it by
  // holding on the first seat rather than by animating faster.
  const reducedMotion = useReducedMotion();
  const running = inView && !paused && !reducedMotion;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % ROLES.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [running]);

  const active = ROLES[index];

  return (
    <div
      ref={rootRef}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className={cn("relative", className)}
    >
      {/* Drifting accent orbs, echoing the seat currently on stage. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 select-none">
        <motion.div
          animate={{ opacity: 0.55 }}
          className={cn(
            "absolute -right-10 -top-12 size-[16rem] animate-blob rounded-blob blur-[44px]",
            "transition-colors duration-[900ms] ease-out-quad",
            ACCENT_ORB[active.accent],
          )}
        />
        <div className="absolute -bottom-14 -left-10 size-[13rem] animate-blob rounded-blob bg-sun-200 opacity-60 blur-[46px] [animation-delay:-7s]" />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-ink-900/10 bg-paper-000 p-[clamp(1.25rem,1rem+1.4vw,2rem)] shadow-xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-[0.55rem] font-display text-sm font-semibold">
            <PulseDot />
            Your team
          </span>
          <span className="text-xs text-ink-400">Working today</span>
        </div>

        {/* Fixed min-height so a longer role line cannot resize the hero
            mid-rotation and shove the copy column around. `1fr auto` pins the
            roster to the bottom edge rather than leaving it floating under
            whichever seat happens to have the shortest description. */}
        <div className="grid min-h-[15rem] grid-cols-[minmax(0,1fr)] grid-rows-[1fr_auto] gap-5">
          {/* The outgoing and incoming seats are stacked rather than sequenced.
              `mode="wait"` would empty the card for the length of the exit,
              which reads as a loading glitch every few seconds. */}
          <div className="relative">
            <AnimatePresence initial={false}>
              <motion.div
                key={active.role}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                // The incoming seat waits for the outgoing one to be nearly
                // gone. Overlapping them fully leaves two role names legible
                // on top of each other; sequencing them strictly leaves the
                // card blank. The small delay is the gap between those.
                transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.26 } }}
                className="absolute inset-0 grid grid-cols-[minmax(0,1fr)] content-start gap-5"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-[86px] shrink-0 place-items-center rounded-full",
                      "border-2 border-ink-900 shadow-sticker [&_svg]:size-9",
                      ACCENT_TILE[active.accent],
                    )}
                  >
                    {active.icon}
                  </span>

                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-bold leading-snug tracking-tight">
                      {active.role}
                    </h2>
                    <p className={cn("text-sm font-semibold", ACCENT_TEXT[active.accent])}>
                      {active.placement}
                    </p>
                  </div>
                </div>

                <p className="max-w-[34ch] text-base text-ink-500">{active.detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* The roster, as Hugo-style colored circles. Doubles as the
              rotation control, so the animation is never the only way to
              reach a seat. */}
          <ul className="flex flex-wrap items-center gap-2 border-t border-ink-900/10 pt-5">
            {ROLES.map((role, roleIndex) => {
              const current = roleIndex === index;

              return (
                <li key={role.role}>
                  <button
                    type="button"
                    onClick={() => setIndex(roleIndex)}
                    aria-label={`Show ${role.role}`}
                    aria-current={current}
                    className={cn(
                      // Descendant selector, not child: the icon sits inside a
                      // presentational span, so `&>svg` would never match.
                      "grid size-[46px] place-items-center rounded-full border-2 [&_svg]:size-5",
                      "[transition:transform_320ms_var(--ease-out-back),opacity_280ms_ease,border-color_280ms_ease]",
                      "hover:-translate-y-1 focus-visible:-translate-y-1",
                      ACCENT_TILE[role.accent],
                      current
                        ? "border-ink-900 shadow-sticker"
                        : "border-ink-900/15 opacity-50 hover:opacity-100",
                    )}
                  >
                    <span aria-hidden>{role.icon}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Announced separately: screen readers get the seat once it settles
          rather than a stream of interrupting updates mid-transition. */}
      <p aria-live="polite" className="sr-only">
        {active.role} — {active.placement}
      </p>
    </div>
  );
}
