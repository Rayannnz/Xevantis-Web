import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { CtaLink } from "@/lib/services/types";
import { ACCENT_ORB } from "@/lib/accent-classes";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowRight } from "@/components/icons";

/** Drift offsets for the light motes. Fixed, so the layout never jitters. */
const MOTES = [
  { left: "8%", top: "22%", size: 8, delay: "-1s" },
  { left: "18%", top: "70%", size: 5, delay: "-4s" },
  { left: "31%", top: "14%", size: 6, delay: "-7s" },
  { left: "47%", top: "82%", size: 4, delay: "-2s" },
  { left: "63%", top: "18%", size: 7, delay: "-9s" },
  { left: "78%", top: "64%", size: 5, delay: "-5s" },
  { left: "89%", top: "30%", size: 9, delay: "-3s" },
];

export function ServiceCta({
  title,
  body,
  accent,
  eyebrow,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  body: string;
  accent: Accent;
  eyebrow: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}) {
  return (
    <Section id="contact">
      <Container width="wide">
        <Reveal
          variant="scale"
          className={cn(
            "noise relative isolate overflow-hidden rounded-2xl text-center",
            "animate-aurora bg-aurora",
            "px-[clamp(1.5rem,1rem+3vw,4rem)] py-[clamp(3rem,2rem+4vw,6rem)]",
          )}
        >
          {/* Blobs sit behind the grain layer, motes in front of it. */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <span
              className={cn(
                "absolute -left-24 -top-24 size-[26rem] animate-blob rounded-blob opacity-60 blur-[60px]",
                ACCENT_ORB[accent],
              )}
            />
            <span className="absolute -bottom-32 -right-20 size-[24rem] animate-blob rounded-blob bg-paper-000 opacity-50 blur-[70px] [animation-delay:-8s]" />
          </div>

          <div aria-hidden className="pointer-events-none absolute inset-0">
            {MOTES.map((mote) => (
              <span
                key={`${mote.left}-${mote.top}`}
                className="absolute animate-float rounded-full bg-paper-000/70 shadow-sm"
                style={{
                  left: mote.left,
                  top: mote.top,
                  width: mote.size,
                  height: mote.size,
                  animationDelay: mote.delay,
                }}
              />
            ))}
          </div>

          <Reveal as="span" className="inline-block">
            <Eyebrow centered>{eyebrow}</Eyebrow>
          </Reveal>

          <SplitWords
            text={title}
            stagger={50}
            className="mx-auto mb-5 mt-4 max-w-[18ch] font-display text-5xl font-bold leading-[0.98] tracking-tighter"
          />

          <Reveal as="p" delay={200} className="mx-auto max-w-[58ch] text-lg text-ink-700">
            {body}
          </Reveal>

          <Reveal delay={300} className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={primaryCta.href} size="lg" magnetic={0.3}>
              <ButtonLabel>{primaryCta.label}</ButtonLabel>
              <ArrowRight />
            </Button>
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              <ButtonLabel>{secondaryCta.label}</ButtonLabel>
            </Button>
          </Reveal>

          <Reveal as="p" delay={380} className="mt-6 text-xs text-ink-500">
            One reply from the delivery lead who would run your account — not a sales
            sequence.
          </Reveal>
        </Reveal>
      </Container>
    </Section>
  );
}
