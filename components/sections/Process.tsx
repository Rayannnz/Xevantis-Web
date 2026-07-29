import { PROCESS_STEPS } from "@/lib/content";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { Accordion } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

export function Process() {
  return (
    <Section id="process" tint="paper" flushTop>
      <Container width="wide">
        <SectionHead align="center">
          <Reveal as="span">
            <Eyebrow centered>The launch</Eyebrow>
          </Reveal>
          <SplitWords text="Working in five steps." stagger={45} className={headingClass} />
          <Reveal as="p" delay={180} className={leadClass}>
            Hired, trained and answering your phone in as little as two weeks. After
            that, we keep adjusting until it runs without you having to think about it.
          </Reveal>
        </SectionHead>

        <div className="grid items-center gap-[clamp(2rem,1rem+4vw,5rem)] min-[901px]:grid-cols-2">
          <Reveal variant="left">
            <Accordion items={PROCESS_STEPS} />
          </Reveal>

          <Reveal variant="right" aria-hidden>
            <Parallax speed={-0.12} className="relative">
              <Card
                surface="sticker"
                className="grid aspect-square place-items-center rounded-2xl bg-sun-200"
              >
                <OrbitDiagram />
              </Card>
            </Parallax>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Four satellites orbiting the "14 days" hub. */
function OrbitDiagram() {
  return (
    <svg
      viewBox="0 0 320 320"
      width="100%"
      fill="none"
      aria-hidden
      className="max-w-[320px]"
    >
      <g className="animate-spin-slow [transform-origin:160px_160px]">
        <circle cx="160" cy="60" r="26" fill="var(--color-paper-000)" stroke="var(--color-ink-900)" strokeWidth="3" />
        <circle cx="260" cy="160" r="26" fill="var(--color-mint-300)" stroke="var(--color-ink-900)" strokeWidth="3" />
        <circle cx="160" cy="260" r="26" fill="var(--color-lilac-300)" stroke="var(--color-ink-900)" strokeWidth="3" />
        <circle cx="60" cy="160" r="26" fill="var(--color-blush-300)" stroke="var(--color-ink-900)" strokeWidth="3" />
      </g>
      <circle
        cx="160"
        cy="160"
        r="118"
        stroke="var(--color-ink-900)"
        strokeWidth="2"
        strokeDasharray="6 10"
        opacity=".45"
      />
      <circle cx="160" cy="160" r="54" fill="var(--color-ink-900)" />
      <text
        x="160"
        y="152"
        textAnchor="middle"
        fill="var(--color-sun-300)"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="26"
        fontWeight="800"
      >
        14
      </text>
      <text
        x="160"
        y="176"
        textAnchor="middle"
        fill="var(--color-paper-050)"
        fontFamily="Inter, sans-serif"
        fontSize="12"
      >
        days
      </text>
    </svg>
  );
}
