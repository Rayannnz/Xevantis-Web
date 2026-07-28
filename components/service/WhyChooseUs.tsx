import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { Differentiator } from "@/lib/services/types";
import { ACCENT_EDGE, ACCENT_TILE } from "@/lib/accent-classes";
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
import { Chat, Clock, Cycle, Layers, Lock, Users } from "@/components/icons";

const CARD_ICONS: ReactNode[] = [
  <Users key="team" />,
  <Cycle key="agile" />,
  <Chat key="comms" />,
  <Lock key="security" />,
  <Clock key="delivery" />,
  <Layers key="scale" />,
];

export function WhyChooseUs({
  differentiators,
  accent,
  eyebrow,
  title,
  body,
}: {
  differentiators: readonly Differentiator[];
  accent: Accent;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Section id="why-us">
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

        <div className="grid gap-4 min-[641px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="flex">
              {/* p-px + an inset panel is the gradient border: the wrapper is
                  the stroke, the panel covers everything but one pixel. */}
              <article
                className={cn(
                  "group relative isolate flex w-full rounded-xl p-px",
                  "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo)]",
                  "hover:-translate-y-[6px] hover:shadow-lg",
                  "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:content-['']",
                  "before:opacity-0 before:transition-opacity before:duration-[480ms] before:ease-out-expo",
                  "hover:before:opacity-100",
                  ACCENT_EDGE[accent],
                )}
              >
                <div className="flex flex-col gap-4 rounded-[calc(var(--radius-xl)-1px)] border border-ink-900/10 bg-paper-000 p-[var(--card-padding)] transition-colors duration-[280ms] group-hover:border-transparent">
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-[52px] place-items-center rounded-lg text-ink-900",
                      "transition-transform duration-[480ms] ease-out-back",
                      "group-hover:-rotate-[8deg] group-hover:scale-[1.08]",
                      ACCENT_TILE[accent],
                      "[&>svg]:size-[24px]",
                    )}
                  >
                    {CARD_ICONS[index % CARD_ICONS.length]}
                  </span>

                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-ink-500">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
