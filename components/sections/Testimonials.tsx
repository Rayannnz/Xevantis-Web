"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/content";
import {
  Container,
  Eyebrow,
  headingClass,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { QuoteMark } from "@/components/icons";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * One story at a time. A wall of testimonial cards reads as wallpaper; a
 * single quote with the client list alongside reads as a reference call.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = TESTIMONIALS[active];

  return (
    <Section id="proof">
      <Container width="wide">
        <SectionHead>
          <Reveal as="span">
            <Eyebrow>05 · Proof</Eyebrow>
          </Reveal>
          <SplitWords
            text="Trusted by 240+ small businesses across the US."
            stagger={45}
            className={headingClass}
          />
        </SectionHead>

        <div className="grid gap-[clamp(2rem,1rem+3vw,4rem)] min-[901px]:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          {/* min-h reserves the tallest quote so switching never shifts layout */}
          <div aria-live="polite" className="min-h-[19rem] min-[521px]:min-h-[16rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={testimonial.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              >
                <QuoteMark aria-hidden className="size-8 text-sun-400" />
                <blockquote className="mt-4">
                  <p className="font-display text-2xl font-bold leading-snug tracking-tight">
                    {testimonial.title}
                  </p>
                  <p className="mt-4 max-w-[58ch] text-lg text-ink-500">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <strong className="font-display text-ink-900">
                    {testimonial.role}
                  </strong>
                  <span className="text-ink-400"> · {testimonial.meta}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <Reveal variant="right" delay={150}>
            <ul className="grid grid-cols-[minmax(0,1fr)] gap-2">
              {TESTIMONIALS.map((entry, index) => (
                <li key={entry.title}>
                  <button
                    type="button"
                    aria-pressed={index === active}
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 text-left",
                      "transition-colors duration-200",
                      index === active
                        ? "border-sun-400 bg-paper-000 shadow-sm"
                        : "border-ink-900/10 bg-transparent hover:bg-paper-000",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "grid size-[42px] shrink-0 place-items-center rounded-full font-display text-sm font-bold",
                        entry.avatar,
                      )}
                    >
                      {entry.initials}
                    </span>
                    <span className="min-w-0">
                      <strong className="block truncate font-display text-sm">
                        {entry.role}
                      </strong>
                      <span className="block truncate text-xs text-ink-400">
                        {entry.meta}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
