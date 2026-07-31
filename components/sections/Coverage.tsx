import { SURGE_MOMENTS } from "@/lib/content";
import { Container, Eyebrow, headingClass, Section } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

/** Weekly call volume across a surge, on a 0–100 scale. */
const SURGE_BARS = [38, 42, 40, 46, 44, 52, 78, 96, 88, 60, 46, 42];
/** Where the client's own team tops out — everything above it is ours. */
const CAPACITY = 55;

/**
 * Surge cover as a plain contractual fact, not a branded add-on — small
 * offices distrust products bolted onto products.
 */
export function Coverage() {
  return (
    <Section id="scale" tint="blush" tight>
      <Container width="wide">
        <div className="grid items-center gap-[clamp(2rem,1rem+4vw,5rem)] min-[901px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-5">
            <Reveal as="span">
              <Eyebrow>04 · Surge cover</Eyebrow>
            </Reveal>
            <SplitWords
              as="h2"
              text="When the week doubles, your team can too."
              stagger={45}
              className={headingClass}
            />
            <Reveal as="p" delay={180} className="text-lg text-ink-700">
              A small office has no bench, so we are it. Trained cover joins
              within 72 hours, stays for the season or the emergency, and rolls
              off when it&rsquo;s over — no penalty in either direction. It is a
              clause in the contract, not an upsell.
            </Reveal>
            <Reveal delay={280} className="flex flex-wrap items-center gap-3">
              <Button href="#contact">
                <ButtonLabel>Plan your cover</ButtonLabel>
              </Button>
            </Reveal>
          </div>

          <Reveal variant="right" delay={160}>
            <div className="rounded-lg border border-ink-900/12 bg-paper-000 p-6 shadow-md">
              <SurgeChart />
              <p className="mb-4 mt-6 border-t border-ink-900/10 pt-5 font-display text-sm font-bold">
                The weeks we cover most
              </p>
              <ul className="grid grid-cols-1 gap-2 min-[521px]:grid-cols-2">
                {SURGE_MOMENTS.map((moment, index) => (
                  <li
                    key={moment}
                    className="flex items-baseline gap-3 rounded-md border border-ink-900/[0.08] bg-paper-050 px-3 py-[0.55rem] text-sm font-medium"
                  >
                    <span className="font-display text-xs font-bold tabular-nums text-sun-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {moment}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** A flu-season week, drawn like the report it would appear in. */
function SurgeChart() {
  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 320 108"
        role="img"
        aria-label="Bar chart of one surge season: weekly volume rises past the in-house team's capacity, and the overage is absorbed by Xevantis cover"
        className="block w-full"
      >
        {SURGE_BARS.map((height, index) => {
          const x = index * 26 + 6;
          const base = Math.min(height, CAPACITY);
          const overage = height - CAPACITY;
          return (
            <g key={index}>
              <rect
                x={x}
                y={104 - base}
                width={17}
                height={base}
                rx={3}
                fill="var(--color-sky-200)"
              />
              {overage > 0 ? (
                <rect
                  x={x}
                  y={104 - height}
                  width={17}
                  height={overage - 2}
                  rx={3}
                  fill="var(--color-sun-400)"
                />
              ) : null}
            </g>
          );
        })}
        <line
          x1="0"
          x2="320"
          y1={104 - CAPACITY}
          y2={104 - CAPACITY}
          stroke="var(--color-ink-900)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          opacity="0.45"
        />
      </svg>
      <figcaption className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-500">
        <span className="flex items-center gap-[0.45rem]">
          <span aria-hidden className="size-[10px] rounded-[3px] bg-sky-200" />
          Your team today
        </span>
        <span className="flex items-center gap-[0.45rem]">
          <span aria-hidden className="size-[10px] rounded-[3px] bg-sun-400" />
          The surge, covered by us
        </span>
      </figcaption>
    </figure>
  );
}
