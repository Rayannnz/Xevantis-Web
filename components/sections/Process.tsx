import { PROCESS_STEPS } from "@/lib/content";
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
import { StickySteps } from "@/components/motion/StickySteps";

export function Process() {
  return (
    <Section id="process">
      <Container width="wide">
        <SectionHead>
          <Reveal as="span">
            <Eyebrow>03 · The launch</Eyebrow>
          </Reveal>
          <SplitWords
            text="First call to fully staffed in 14 days."
            stagger={45}
            className={headingClass}
          />
          <Reveal as="p" delay={180} className={leadClass}>
            Five steps, each with a date on it. After go-live we keep adjusting
            until it runs without you having to think about it.
          </Reveal>
        </SectionHead>

        <StickySteps steps={PROCESS_STEPS} />
      </Container>
    </Section>
  );
}
