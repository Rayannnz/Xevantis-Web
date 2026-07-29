import { cn } from "@/lib/utils";
import { LAUNCH_STEPS, WHY_SWITCH } from "@/lib/content";
import type { Accent } from "@/lib/types";
import { Badge, Container, Eyebrow, Hand, Lead, Section } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/motion/Reveal";
import { Check } from "@/components/icons";

const DOT_TONES: Record<Accent, string> = {
  sun: "bg-sun-300",
  mint: "bg-mint-300",
  lilac: "bg-lilac-300",
  blush: "bg-blush-300",
  sky: "bg-sky-300",
};

export function ValueProp() {
  return (
    <Section id="about" tint="sun" className="rounded-t-2xl">
      <Container width="wide">
        <Reveal as="p" className="mb-[clamp(2rem,1.5rem+2vw,3.5rem)] text-center">
          <span className="inline text-4xl font-bold tracking-tighter">
            Your success is{" "}
          </span>
          <Hand className="text-4xl text-ink-900">our whole mission</Hand>
        </Reveal>

        <div className="grid items-center gap-[clamp(2rem,1rem+4vw,5rem)] min-[901px]:grid-cols-2">
          <Reveal
            variant="left"
            className="grid grid-cols-[minmax(0,1fr)] content-start gap-6"
          >
            <Eyebrow>Why teams switch</Eyebrow>
            <h2 className="font-display text-4xl font-bold leading-snug tracking-tighter">
              You deserve better than a call center.
            </h2>
            <Lead>
              Most outsourcing sells you seats. We build teams — recruited for your
              brand, trained on your product, measured on your outcomes, and wired
              into the same tools your in-house staff already use.
            </Lead>

            <ul className="grid grid-cols-[minmax(0,1fr)] content-start gap-[0.85rem]">
              {WHY_SWITCH.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-mint-500" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="sticker">
                <ButtonLabel>Take Xevantis for a spin</ButtonLabel>
              </Button>
            </div>
          </Reveal>

          <Reveal variant="right">
            <Tilt max={5}>
              <Card surface="sticker">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge tone="sun">Launch plan</Badge>
                  <Hand className="text-[1.6rem]">~ 2 weeks ~</Hand>
                </div>

                <div className="grid gap-3">
                  {LAUNCH_STEPS.map((step, index) => (
                    <Reveal
                      key={step.title}
                      variant="left"
                      delay={index * 110}
                      className={cn(
                        "flex items-center gap-[0.9rem] rounded-lg border border-ink-900/10",
                        "bg-paper-000 px-[1.1rem] py-[0.85rem] shadow-sm",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-[34px] shrink-0 place-items-center rounded-full",
                          "font-display text-[13px] font-bold",
                          DOT_TONES[step.accent],
                        )}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <strong className="font-display">{step.title}</strong>
                        <br />
                        <span className="text-sm text-ink-500">{step.detail}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Card>
            </Tilt>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
