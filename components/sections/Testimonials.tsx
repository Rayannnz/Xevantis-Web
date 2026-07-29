"use client";

import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/lib/content";
import { useCarousel } from "@/hooks/useCarousel";
import {
  Container,
  Eyebrow,
  headingClass,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { Button } from "@/components/ui/Button";
import { CardTitle } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowLeft, ArrowRight, Star } from "@/components/icons";

const AUTOPLAY_MS = 6000;

/** Slide widths drive `perView`, so the breakpoints live here and nowhere else. */
const SLIDE_WIDTH = cn(
  "flex-[0_0_100%]",
  "min-[641px]:flex-[0_0_calc((100%_-_20px)/2)]",
  "min-[981px]:flex-[0_0_calc((100%_-_40px)/3)]",
);

export function Testimonials() {
  const {
    rootRef,
    trackRef,
    index,
    maxIndex,
    offset,
    goTo,
    next,
    previous,
    isVisible,
    pauseHandlers,
    dragHandlers,
  } = useCarousel({ count: TESTIMONIALS.length, autoplay: AUTOPLAY_MS });

  return (
    <Section id="proof" tint="paper">
      <Container width="wide">
        <SectionHead align="split" className="max-w-none">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
            <Reveal as="span" className="justify-self-start">
              <Eyebrow>Proof</Eyebrow>
            </Reveal>
            <SplitWords
              text="Trusted by 240+ small businesses across the US."
              stagger={45}
              className={headingClass}
            />
          </div>

          <Reveal delay={150} className="flex justify-end">
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                iconOnly
                aria-label="Previous testimonials"
                onClick={previous}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="secondary"
                iconOnly
                aria-label="Next testimonials"
                onClick={next}
              >
                <ArrowRight />
              </Button>
            </div>
          </Reveal>
        </SectionHead>

        <div
          ref={rootRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          className="relative overflow-hidden"
          {...pauseHandlers}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-[720ms] ease-out-expo will-change-transform"
              style={{ transform: `translate3d(${offset}px, 0, 0)` }}
              {...dragHandlers}
            >
              {TESTIMONIALS.map((testimonial, slide) => (
                <article
                  key={testimonial.title}
                  aria-hidden={!isVisible(slide)}
                  className={cn(
                    "flex flex-col gap-4 rounded-xl border border-ink-900/10 p-[var(--card-padding)]",
                    SLIDE_WIDTH,
                    testimonial.surface,
                  )}
                >
                  {/* role="img" — aria-label is ignored on a generic element. */}
                  <div className="flex gap-[3px] text-sun-500" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} className="size-4" />
                    ))}
                  </div>

                  <CardTitle>{testimonial.title}</CardTitle>
                  <p className="text-base text-ink-500">{testimonial.quote}</p>

                  <div className="mt-auto flex items-center gap-3 border-t border-ink-900/10 pt-4">
                    <span
                      className={cn(
                        "grid size-[42px] shrink-0 place-items-center rounded-full font-display font-bold",
                        testimonial.avatar,
                      )}
                    >
                      {testimonial.initials}
                    </span>
                    <div>
                      <strong className="font-display">{testimonial.role}</strong>
                      <br />
                      <span className="text-xs text-ink-400">{testimonial.meta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-[6px]">
              {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Go to slide ${dot + 1}`}
                  aria-current={dot === index ? "true" : undefined}
                  onClick={() => goTo(dot)}
                  className={cn(
                    "h-2 cursor-pointer rounded-pill",
                    "[transition:width_280ms_var(--ease-out-expo),background-color_280ms_ease]",
                    dot === index ? "w-[26px] bg-ink-900" : "w-2 bg-ink-200",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
