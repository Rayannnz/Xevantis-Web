import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { ServiceOverviewContent } from "@/lib/services/types";
import { ACCENT_TILE } from "@/lib/accent-classes";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import { MediaFrame } from "./MediaFrame";
import { ServiceFigure } from "./ServiceFigure";

/**
 * The "what this actually is" section: definition, audience, business case and
 * the reason to buy it here, answered in four short panels rather than a wall
 * of prose. The artwork drifts against the scroll to give the split some depth.
 */
export function ServiceOverview({
  overview,
  accent,
}: {
  overview: ServiceOverviewContent;
  accent: Accent;
}) {
  return (
    <Section id="overview">
      <Container width="wide">
        <div className="grid items-start gap-[clamp(2.5rem,1rem+5vw,5.5rem)] min-[981px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <Reveal as="span" className="inline-block">
              <Eyebrow>{overview.eyebrow}</Eyebrow>
            </Reveal>

            <SplitWords
              text={overview.title}
              stagger={45}
              className={cn(headingClass, "mt-4")}
            />

            <Reveal as="p" delay={160} className={cn(leadClass, "mt-5 max-w-[54ch]")}>
              {overview.body}
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-9 min-[621px]:grid-cols-2">
              {overview.panels.map((panel, index) => (
                <Reveal key={panel.heading} delay={index * 100}>
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className={cn(
                        "mt-[0.3rem] grid size-8 shrink-0 place-items-center rounded-sm",
                        "font-display text-xs font-extrabold text-ink-900",
                        ACCENT_TILE[accent],
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-snug tracking-tight">
                        {panel.heading}
                      </h3>
                      <p className="mt-2 text-base text-ink-500">{panel.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* The clip reveal wipes the plate up from its bottom edge. */}
          <Reveal variant="clip" delay={140} className="min-[981px]:sticky min-[981px]:top-28">
            <Parallax speed={-0.1}>
              <MediaFrame accent={accent}>
                <ServiceFigure variant={overview.figure} accent={accent} />
              </MediaFrame>
            </Parallax>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
