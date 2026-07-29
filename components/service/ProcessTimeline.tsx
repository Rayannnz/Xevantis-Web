"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { ProcessPhase } from "@/lib/services/types";
import { ACCENT_TILE } from "@/lib/accent-classes";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { Beaker, Brackets, Compass, PenNib, Rocket, Route } from "@/components/icons";

/** Phase icons cycle in fixed order, so step 3 looks the same on every page. */
const PHASE_ICONS: ReactNode[] = [
  <Compass key="discovery" />,
  <Route key="strategy" />,
  <PenNib key="design" />,
  <Brackets key="build" />,
  <Beaker key="qa" />,
  <Rocket key="launch" />,
];

/** Rail geometry. The node is centered on the line, so both read from this. */
const NODE = 56;

export function ProcessTimeline({
  phases,
  accent,
  eyebrow,
  title,
  body,
}: {
  phases: readonly ProcessPhase[];
  accent: Accent;
  eyebrow: string;
  title: string;
  body: string;
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 70%"],
  });

  // Spring keeps the fill from twitching on a trackpad's sub-pixel deltas.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <Section id="process">
      <Container width="wide">
        <SectionHead align="center">
          <Reveal as="span">
            <Eyebrow centered>{eyebrow}</Eyebrow>
          </Reveal>
          <SplitWords text={title} stagger={45} className={headingClass} />
          <Reveal as="p" delay={180} className={leadClass}>
            {body}
          </Reveal>
        </SectionHead>

        <ol ref={listRef} className="relative mx-auto grid max-w-[900px] gap-4">
          {/* Rail. Inert, and hidden from assistive tech — the ordered list
              already communicates the sequence. */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-10 top-10 w-[2px] rounded-pill bg-ink-900/10"
            style={{ left: NODE / 2 - 1 }}
          >
            <motion.div
              className={cn("h-full w-full origin-top rounded-pill", ACCENT_TILE[accent])}
              style={{ scaleY: reducedMotion ? 1 : progress }}
            />
          </div>

          {phases.map((phase, index) => (
            <li key={phase.title} className="relative">
              <Reveal delay={index * 80}>
                {/* The group is the row, not the card: hovering either half
                    should animate the node and the icon together. */}
                <div className="group/step grid items-start gap-5 min-[561px]:grid-cols-[56px_minmax(0,1fr)]">
                  <span
                    aria-hidden
                    className={cn(
                      "relative z-[1] grid place-items-center rounded-full",
                      "border-2 border-ink-900 bg-paper-000 font-display text-base font-extrabold",
                      "transition-transform duration-[280ms] ease-out-back",
                      "group-hover/step:scale-110",
                    )}
                    style={{ width: NODE, height: NODE }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={cn(
                      "relative rounded-xl border border-ink-900/10 bg-paper-000",
                      "p-[clamp(1.25rem,1rem+1vw,1.75rem)]",
                      "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo),border-color_280ms_ease]",
                      "hover:-translate-y-[4px] hover:border-transparent hover:shadow-lg",
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-md text-ink-900",
                          "transition-transform duration-[480ms] ease-out-back",
                          "group-hover/step:-rotate-[8deg] group-hover/step:scale-110",
                          ACCENT_TILE[accent],
                          "[&>svg]:size-[19px]",
                        )}
                      >
                        {PHASE_ICONS[index % PHASE_ICONS.length]}
                      </span>

                      <h3 className="font-display text-xl font-bold leading-snug tracking-tight">
                        {phase.title}
                      </h3>

                      <span className="ml-auto rounded-pill bg-ink-050 px-3 py-1 font-display text-2xs font-bold uppercase tracking-widest text-ink-500">
                        {phase.duration}
                      </span>
                    </div>

                    <p className="mt-4 max-w-[68ch] text-base text-ink-500">{phase.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
