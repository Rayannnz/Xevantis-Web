"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { ServiceQuote } from "@/lib/services/types";
import { ACCENT_TILE } from "@/lib/accent-classes";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteMark, Star } from "@/components/icons";

const AUTOPLAY_MS = 7000;

/**
 * Single large quote on the dark band, cross-fading on a timer.
 *
 * Every quote is rendered into the same grid cell rather than swapped in and
 * out, so the section's height is the tallest quote from first paint — a fader
 * that re-measures on each slide is a guaranteed layout shift.
 */
export function ServiceQuotes({
  quotes,
  accent,
  eyebrow,
}: {
  quotes: readonly ServiceQuote[];
  accent: Accent;
  eyebrow: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Auto-advancing content under reduced motion is exactly what the setting
    // asks us not to do; the dots still work.
    if (paused || reducedMotion || quotes.length < 2) return;

    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % quotes.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, quotes.length]);

  return (
    <Section tint="ink" className="overflow-clip text-paper-050">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lilac-500/20 blur-[130px]"
      />

      <Container width="page">
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          className="text-center"
        >
          <Reveal as="span" className="inline-block">
            <Eyebrow centered className="text-paper-200/70">
              {eyebrow}
            </Eyebrow>
          </Reveal>

          <Reveal variant="scale" delay={100} className="mt-8">
            <span
              aria-hidden
              className={cn(
                "mx-auto grid size-14 place-items-center rounded-full text-ink-900",
                ACCENT_TILE[accent],
                "[&>svg]:w-[26px]",
              )}
            >
              <QuoteMark />
            </span>
          </Reveal>

          <div className="mt-9 grid">
            {quotes.map((quote, index) => {
              const shown = index === active;

              return (
                <figure
                  key={quote.name}
                  aria-hidden={!shown}
                  // Stacked in one cell; only the active layer is interactive.
                  className={cn(
                    "[grid-area:1/1] transition-opacity duration-[600ms] ease-out-quad",
                    shown ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <blockquote className="mx-auto max-w-[46ch] font-display text-2xl font-semibold leading-snug tracking-tight text-paper-050 min-[721px]:text-3xl">
                    &ldquo;{quote.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-9 flex flex-col items-center gap-3">
                    <span
                      className="flex gap-[3px] text-sun-300"
                      role="img"
                      aria-label={`Rated ${quote.rating} out of 5`}
                    >
                      {Array.from({ length: quote.rating }, (_, star) => (
                        <Star key={star} className="size-[15px]" />
                      ))}
                    </span>

                    <span className="mt-1 flex items-center gap-3">
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-11 place-items-center rounded-full font-display text-sm font-bold text-ink-900",
                          ACCENT_TILE[accent],
                        )}
                      >
                        {quote.initials}
                      </span>
                      <span className="text-left">
                        <span className="block font-display font-bold text-paper-050">
                          {quote.name}
                        </span>
                        <span className="block text-sm text-ink-300">
                          {quote.role}, {quote.company}
                        </span>
                      </span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center gap-[6px]">
            {quotes.map((quote, index) => (
              <button
                key={quote.name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${quote.name}`}
                aria-current={index === active ? "true" : undefined}
                className={cn(
                  "h-2 cursor-pointer rounded-pill",
                  "[transition:width_280ms_var(--ease-out-expo),background-color_280ms_ease]",
                  index === active ? "w-[26px] bg-sun-300" : "w-2 bg-white/25 hover:bg-white/50",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
