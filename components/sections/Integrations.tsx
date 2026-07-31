import { INTEGRATIONS } from "@/lib/content";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
} from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

/**
 * A static wall, not a marquee: a prospect scans this list for their own
 * software, and you cannot scan a moving target.
 */
export function Integrations() {
  const tools = INTEGRATIONS.flat();

  return (
    <Section tint="paper">
      <Container width="wide">
        <div className="grid items-center gap-[clamp(2rem,1rem+4vw,5rem)] min-[901px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-5">
            <Reveal as="span">
              <Eyebrow>06 · Software</Eyebrow>
            </Reveal>
            <SplitWords
              as="h2"
              text="We work inside the software you already pay for."
              stagger={40}
              className={headingClass}
            />
            <Reveal as="p" delay={180} className={leadClass}>
              No migrations, no new logins for your staff. Your specialist
              trains on your stack in week one and works in it every day after.
            </Reveal>
            <Reveal delay={260} className="flex flex-wrap gap-3">
              <Button href="#contact">
                <ButtonLabel>Get your team</ButtonLabel>
              </Button>
            </Reveal>
          </div>

          <Reveal variant="right" delay={140}>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-pill border border-ink-900/10 bg-paper-000 px-4 py-2 text-sm font-medium text-ink-700"
                >
                  {tool}
                </li>
              ))}
              <li className="rounded-pill border border-dashed border-ink-900/20 px-4 py-2 text-sm font-medium text-ink-400">
                + whatever your office runs
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
