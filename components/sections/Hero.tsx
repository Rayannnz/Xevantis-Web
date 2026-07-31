import type { ReactNode } from "react";
import { Container, PulseDot } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Counter, Meter } from "@/components/ui/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Threads } from "@/components/motion/Threads";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowRight } from "@/components/icons";

const PANEL_METRICS = [
  { label: "Calls answered live", value: 0.96, delay: 0 },
  { label: "Average time to answer", value: 0.82, delay: 120 },
  { label: "Cost vs a local hire", value: 0.62, delay: 240 },
];

/** Inline proof, replacing the usual avatar pile-up. */
const FACTS: { value: string; label: string }[] = [
  { value: "240+", label: "businesses served" },
  { value: "50", label: "states covered" },
  { value: "4.8/5", label: "client rating" },
];

export function Hero() {
  return (
    <section className="relative overflow-clip pb-[clamp(3rem,2rem+4vw,6rem)] pt-[calc(var(--header-height)+clamp(2.5rem,2rem+4vw,6rem))]">
      <HeroBackdrop />

      <Container width="wide">
        <ScrollFade>
          <div className="grid items-center gap-[clamp(2rem,1rem+4vw,4.5rem)] min-[941px]:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div className="grid max-w-[640px] justify-items-start gap-6">
              <Reveal variant="fade" as="span">
                <span className="inline-flex h-9 items-center gap-[0.55rem] rounded-pill border border-ink-900/15 bg-paper-000 px-4 text-sm font-medium">
                  <PulseDot />
                  Now onboarding for Q4 — 11 openings left
                </span>
              </Reveal>

              <SplitWords
                as="h1"
                text="The back office your small business never had room to hire."
                stagger={55}
                className="font-display text-hero font-extrabold tracking-tighter"
              />

              <Reveal variant="fade" delay={180} aria-hidden>
                <span className="block h-1 w-16 rounded-pill bg-sun-400" />
              </Reveal>

              <Reveal as="p" delay={220} className="max-w-[46ch] text-lg text-ink-500">
                Clinics, law firms, pharmacies and offices across the United States
                use Xevantis for the phones, the paperwork, the books and the
                software behind them. Your person starts in 2 weeks.
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

              <Reveal delay={420} className="flex flex-wrap items-center">
                {FACTS.map((fact, index) => (
                  <span
                    key={fact.label}
                    className={
                      index === 0
                        ? "flex flex-col pr-5"
                        : "flex flex-col border-l border-ink-900/15 px-5"
                    }
                  >
                    <strong className="font-display text-lg font-bold tabular-nums tracking-tight">
                      {fact.value}
                    </strong>
                    <span className="text-xs text-ink-500">{fact.label}</span>
                  </span>
                ))}
              </Reveal>
            </div>

            {/* Operations panel — the week's numbers, presented like a report. */}
            <Reveal variant="scale" delay={260}>
              <div className="relative rounded-lg border border-ink-900/12 bg-paper-000 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-900/10 px-6 py-4">
                  <span className="inline-flex items-center gap-[0.55rem] font-display text-sm font-bold">
                    <PulseDot />
                    Live this week
                  </span>
                  <span className="text-xs text-ink-400">
                    Dental practice · Queens, NY
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="mb-4 font-display text-xl font-bold leading-snug tracking-tight">
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
                        <Meter
                          value={metric.value}
                          delay={metric.delay}
                          className="mt-[0.45rem]"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 border-t border-ink-900/10 pt-4">
                    <PanelLabel>Calls handled this week</PanelLabel>
                    <PanelValue>
                      <Counter to={1240} duration={2000} />
                    </PanelValue>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </ScrollFade>
      </Container>
    </section>
  );
}

/**
 * Drafting grid fading downward, plus two soft violet glows on parallax.
 * Static radials, not morphing blobs — the hero should feel drawn, not lava.
 *
 * The Threads shader is the one exception, and it earns it by drawing lines:
 * it is masked to the lower band so the grid still owns the top and nothing
 * animates behind the headline, which is where motion costs legibility.
 */
function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 select-none">
      <div className="absolute inset-0 bg-ruled [mask-image:linear-gradient(180deg,#000_0%,transparent_82%)]" />
      <Threads
        colorToken="--color-sun-400"
        amplitude={1.4}
        distance={0.35}
        className="absolute inset-x-0 bottom-0 h-[62%] opacity-50 [mask-image:linear-gradient(180deg,transparent_0%,#000_55%)]"
      />
      <Parallax speed={0.25} className="absolute -right-48 -top-56">
        <div className="size-[38rem] rounded-full bg-[radial-gradient(closest-side,var(--color-sun-200),transparent_72%)] opacity-80" />
      </Parallax>
      <Parallax speed={-0.18} className="absolute -left-56 bottom-[-14rem]">
        <div className="size-[30rem] rounded-full bg-[radial-gradient(closest-side,var(--color-lilac-100),transparent_72%)]" />
      </Parallax>
    </div>
  );
}

function PanelLabel({ children }: { children: ReactNode }) {
  return <span className="text-sm text-ink-500">{children}</span>;
}

function PanelValue({ children }: { children: ReactNode }) {
  return <span className="font-display font-bold tabular-nums">{children}</span>;
}
