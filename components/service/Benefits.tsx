import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { Benefit } from "@/lib/services/types";
import { ACCENT_TEXT } from "@/lib/accent-classes";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui/primitives";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import { ArrowUpRight } from "@/components/icons";
import { MediaFrame } from "./MediaFrame";
import { ServiceFigure } from "./ServiceFigure";

/**
 * Four alternating rows, one business outcome each.
 *
 * The zig-zag is done with grid column placement rather than `flex-row-reverse`
 * so the DOM order always runs copy-then-artwork — a screen reader gets four
 * clean heading/body pairs regardless of which side the drawing is on.
 */
export function Benefits({
  benefits,
  accent,
  eyebrow,
  title,
  body,
}: {
  benefits: readonly Benefit[];
  accent: Accent;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Section id="benefits" tint="paper">
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

        <div className="grid gap-[clamp(3.5rem,2rem+6vw,7rem)]">
          {benefits.map((benefit, index) => {
            const flipped = index % 2 === 1;

            return (
              <div
                key={benefit.title}
                className="grid items-center gap-[clamp(2rem,1rem+4vw,4.5rem)] min-[901px]:grid-cols-2"
              >
                <div
                  className={cn(
                    "max-w-[46ch]",
                    flipped && "min-[901px]:col-start-2 min-[901px]:row-start-1",
                  )}
                >
                  <Reveal variant={flipped ? "right" : "left"}>
                    <span
                      className={cn(
                        "font-display text-sm font-extrabold tracking-widest uppercase",
                        ACCENT_TEXT[accent],
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 font-display text-3xl font-bold leading-snug tracking-tighter">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 text-lg text-ink-500">{benefit.body}</p>
                  </Reveal>

                  <Reveal delay={140} className="mt-7 flex flex-wrap items-end gap-6">
                    <div>
                      <p className="font-display text-5xl font-extrabold leading-none tracking-tighter">
                        {benefit.metric.prefix}
                        <Counter
                          to={benefit.metric.value}
                          suffix={benefit.metric.suffix}
                          decimals={benefit.metric.decimals}
                        />
                      </p>
                      <p className="mt-2 max-w-[24ch] text-sm text-ink-500">
                        {benefit.metric.label}
                      </p>
                    </div>

                    <span
                      aria-hidden
                      className="mb-2 hidden h-12 w-px bg-ink-900/10 min-[521px]:block"
                    />

                    <TextLink href={benefit.link.href} className="mb-2">
                      {benefit.link.label}
                      <ArrowUpRight />
                    </TextLink>
                  </Reveal>
                </div>

                <Reveal
                  variant={flipped ? "left" : "right"}
                  delay={120}
                  className={cn(flipped && "min-[901px]:col-start-1 min-[901px]:row-start-1")}
                >
                  <Parallax speed={flipped ? 0.1 : -0.1}>
                    <MediaFrame accent={accent}>
                      <ServiceFigure variant={benefit.figure} accent={accent} />
                    </MediaFrame>
                  </Parallax>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
