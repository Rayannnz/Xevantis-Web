import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, PillGlass, PulseDot } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Counter, Meter } from "@/components/ui/Counter";
import { Tilt } from "@/components/ui/Tilt";
import { Badge } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { MarkUnderline } from "@/components/motion/MarkUnderline";
import { ArrowRight } from "@/components/icons";

const AVATARS = [
  { initials: "AR", tone: "bg-sun-300" },
  { initials: "KL", tone: "bg-mint-300" },
  { initials: "TN", tone: "bg-lilac-300" },
  { initials: "MJ", tone: "bg-blush-300" },
  { initials: "+", tone: "bg-sky-300" },
];

const PANEL_METRICS = [
  { label: "Calls answered live", value: 0.96, delay: 0 },
  { label: "Average time to answer", value: 0.82, delay: 120 },
  { label: "Cost vs a local hire", value: 0.62, delay: 240 },
];

export function Hero() {
  return (
    <section className="relative overflow-clip pb-[clamp(3rem,2rem+4vw,6rem)] pt-[calc(var(--header-height)+clamp(2.5rem,2rem+4vw,6rem))]">
      <HeroBackdrop />

      <Container width="wide">
        <div className="grid items-center gap-[clamp(2rem,1rem+4vw,4.5rem)] min-[941px]:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <div className="grid max-w-[640px] justify-items-start gap-6">
            <Reveal variant="fade" as="span">
              <PillGlass>
                <PulseDot />
                Now onboarding for Q4 — 11 openings left
              </PillGlass>
            </Reveal>

            <SplitWords
              as="h1"
              text="The back office your small business never had room to hire."
              stagger={55}
              className="font-display text-hero font-extrabold tracking-tighter"
            />

            <Reveal as="p" delay={220} className="max-w-[46ch] text-lg text-ink-500">
              Clinics, law firms, pharmacies and offices across the United States use
              Xevantis for the phones, the paperwork, the books and the software behind
              them. Your person starts in <MarkUnderline>2 weeks</MarkUnderline>.
            </Reveal>

            <Reveal delay={320} className="flex flex-wrap items-center gap-3">
              <Button href="/get-started" size="lg" magnetic={0.3}>
                <ButtonLabel>Get your team</ButtonLabel>
                <ArrowRight />
              </Button>
              <Button href="#process" variant="secondary" size="lg">
                <ButtonLabel>See how it works</ButtonLabel>
              </Button>
            </Reveal>

            <Reveal delay={420} className="flex flex-wrap items-center gap-4">
              <div className="group flex" aria-hidden>
                {AVATARS.map((avatar) => (
                  <span
                    key={avatar.initials}
                    className={cn(
                      "-ml-3 grid size-[38px] place-items-center rounded-full border-2 border-paper-050 first:ml-0",
                      "font-display text-xs font-bold text-ink-900",
                      "transition-transform duration-[280ms] ease-out-back group-hover:-translate-y-1",
                      avatar.tone,
                    )}
                  >
                    {avatar.initials}
                  </span>
                ))}
              </div>
              <p className="max-w-[26ch] text-sm text-ink-500">
                <strong className="text-ink-900">240+ local businesses</strong> served
                across all 50 states.
              </p>
            </Reveal>
          </div>

          {/* Floating product panel */}
          <Reveal variant="scale" delay={260} className="relative">
            <Tilt max={6}>
              <div className="relative rounded-2xl border border-ink-900/10 bg-paper-000 p-6 shadow-xl">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <Badge tone="ink">Dental practice · Queens, NY</Badge>
                  <span className="text-xs text-ink-400">Today</span>
                </div>

                <h2 className="mb-3 font-display text-xl font-bold leading-snug tracking-tight">
                  30 days with Xevantis
                </h2>

                <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
                  {PANEL_METRICS.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <PanelLabel>{metric.label}</PanelLabel>
                        <PanelValue>
                          {index === 0 ? <Counter to={96} suffix="%" /> : null}
                          {index === 1 ? (
                            <>
                              42<span className="text-[0.7em]"> sec</span>
                            </>
                          ) : null}
                          {index === 2 ? (
                            <>
                              &minus;
                              <Counter to={38} suffix="%" />
                            </>
                          ) : null}
                        </PanelValue>
                      </div>
                      <Meter value={metric.value} delay={metric.delay} className="mt-[0.45rem]" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-ink-900/10 py-[0.7rem]">
                  <PanelLabel>Calls handled this week</PanelLabel>
                  <PanelValue>
                    <Counter to={1240} duration={2000} />
                  </PanelValue>
                </div>
              </div>
            </Tilt>

            <StickyNote
              className="-left-[3.25rem] -top-9 bg-sun-200 max-[1180px]:-left-5 max-[520px]:hidden"
              rotate="-6deg"
            >
              🎯 0 calls to voicemail
            </StickyNote>
            <StickyNote
              className="-bottom-7 right-6 bg-mint-200 [animation-delay:-3s] max-[520px]:hidden"
              rotate="5deg"
            >
              ⚡ Go-live: day 12
            </StickyNote>
            <StickyNote
              className="-bottom-6 -left-4 bg-lilac-200 animate-float-slow max-[1180px]:left-4 max-[520px]:hidden"
              rotate="-3deg"
            >
              💬 Client rating 4.8 / 5
            </StickyNote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Drifting color orbs behind the hero copy. */
function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-[-5%] top-[-10%] -z-10 h-[130%] select-none"
    >
      <div className="absolute -left-32 -top-24 size-[30rem] animate-blob rounded-blob bg-lilac-200 opacity-75 blur-[40px]" />
      <div className="absolute -right-40 top-[22rem] size-[26rem] animate-blob rounded-blob bg-sun-200 opacity-80 blur-[50px] [animation-delay:-6s]" />
      <div className="absolute -bottom-32 left-[32%] size-[22rem] animate-blob rounded-blob bg-mint-200 opacity-60 blur-[55px] [animation-delay:-11s]" />
    </div>
  );
}

function PanelLabel({ children }: { children: ReactNode }) {
  return <span className="text-sm text-ink-500">{children}</span>;
}

function PanelValue({ children }: { children: ReactNode }) {
  return <span className="font-display font-bold">{children}</span>;
}

/**
 * Notes hang off the panel's corners — the offsets keep them clear of the
 * panel's own badge row and metric values.
 */
function StickyNote({
  rotate,
  className,
  children,
}: {
  rotate: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      style={{ "--rot": rotate } as CSSProperties}
      className={cn(
        "absolute z-[3] animate-float rounded-md border-2 border-ink-900 bg-paper-000",
        "px-4 py-[0.7rem] font-display text-sm font-semibold whitespace-nowrap shadow-sticker",
        "[transform:rotate(var(--rot,-4deg))]",
        className,
      )}
    >
      {children}
    </span>
  );
}

