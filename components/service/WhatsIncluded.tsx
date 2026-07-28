import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { IncludedContent } from "@/lib/services/types";
import { ACCENT_TILE } from "@/lib/accent-classes";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Spotlight } from "@/components/ui/Tilt";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { Check } from "@/components/icons";
import { MediaFrame } from "./MediaFrame";
import { ServiceFigure } from "./ServiceFigure";

/**
 * The dark band, roughly a third of the way down the page.
 *
 * It exists as much for rhythm as for content — the page runs light for three
 * sections before this and three after, so the scope list lands with weight.
 */
export function WhatsIncluded({
  included,
  accent,
}: {
  included: IncludedContent;
  accent: Accent;
}) {
  return (
    <Section id="whats-included" tint="ink" className="overflow-clip text-paper-050">
      {/* Accent haze bled into the top-left corner of the band. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full bg-lilac-500/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-32 size-[30rem] rounded-full bg-sun-500/15 blur-[120px]"
      />

      <Container width="wide">
        <div className="grid items-center gap-[clamp(2.5rem,1rem+5vw,5rem)] min-[981px]:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
          <div>
            <Reveal as="span" className="inline-block">
              <Eyebrow className="text-paper-200/70">{included.eyebrow}</Eyebrow>
            </Reveal>

            <SplitWords
              text={included.title}
              stagger={45}
              className="mt-4 font-display text-4xl font-bold leading-snug tracking-tighter text-paper-050"
            />

            <Reveal as="p" delay={160} className="mt-5 max-w-[52ch] text-lg text-ink-200">
              {included.body}
            </Reveal>

            <ul className="mt-10 grid gap-x-8 gap-y-[0.9rem] min-[621px]:grid-cols-2">
              {included.items.map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  variant="left"
                  delay={index * 70}
                  className="group/item flex items-center gap-3"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-6 shrink-0 place-items-center rounded-full text-ink-900",
                      "transition-transform duration-[280ms] ease-out-back group-hover/item:scale-110",
                      ACCENT_TILE[accent],
                      "[&>svg]:size-[13px]",
                    )}
                  >
                    <Check />
                  </span>
                  <span className="text-base text-paper-200 transition-colors duration-[180ms] group-hover/item:text-paper-000">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal
              delay={220}
              className="mt-10 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-ink-300"
            >
              <span
                aria-hidden
                className={cn("mt-[0.45rem] block size-2 shrink-0 rounded-full", ACCENT_TILE[accent])}
              />
              <p className="max-w-[52ch]">{included.note}</p>
            </Reveal>
          </div>

          <Reveal variant="right" delay={140}>
            <Spotlight className="rounded-2xl">
              <MediaFrame accent={accent} tone="ink">
                <ServiceFigure variant={included.figure} accent={accent} />
              </MediaFrame>
            </Spotlight>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
