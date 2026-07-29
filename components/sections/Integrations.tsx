import { INTEGRATIONS } from "@/lib/content";
import { Container, headingClass, Section, SectionHead } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Marquee, MarqueeItem } from "@/components/ui/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

export function Integrations() {
  return (
    <Section tint="paper">
      <Container width="wide">
        <SectionHead align="center">
          <SplitWords
            text="We work inside the software you already pay for."
            stagger={40}
            className={headingClass}
          />
          <Reveal delay={220} className="flex flex-wrap justify-center gap-3">
            <Button href="#contact">
              <ButtonLabel>Get your team</ButtonLabel>
            </Button>
          </Reveal>
        </SectionHead>
      </Container>

      {/* Full-bleed on purpose: the strips run edge to edge. */}
      <div className="grid grid-cols-[minmax(0,1fr)] gap-4">
        {INTEGRATIONS.map((row, index) => (
          <Marquee key={index} reverse={index % 2 === 1}>
            {row.map((tool) => (
              <MarqueeItem key={tool}>{tool}</MarqueeItem>
            ))}
          </Marquee>
        ))}
      </div>
    </Section>
  );
}
