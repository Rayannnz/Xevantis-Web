import type { CSSProperties } from "react";
import { COVERAGE, HERO_PROOF, OPS_DAY } from "@/lib/content";
import {
  coverageHours,
  coverageLabel,
  hourTick,
  tonesPresent,
  type CoverageTone,
} from "@/lib/coverage";
import { cn } from "@/lib/utils";
import { Container, HairRule, IndexRail, PulseDot } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowRight } from "@/components/icons";

/**
 * Height is what carries the meaning on the band — a covered hour is a taller
 * block. The two fills only separate who is answering, so the graphic still
 * reads correctly in monochrome or to anyone who cannot tell the fills apart.
 */
const TONE_BLOCK: Record<CoverageTone, string> = {
  live: "h-full bg-ink-900",
  extended: "h-[62%] bg-lilac-400",
  idle: "h-[26%] bg-ink-200",
};

/**
 * Seconds for one pass of the day sheet. Slow on purpose: the sheet is meant
 * to be noticed once and then read, and anything quicker turns a document into
 * a loading spinner.
 */
const SHEET_CYCLE = 12;

const LEGEND: { tone: CoverageTone; label: string; swatch: string }[] = [
  { tone: "live", label: "Answered live", swatch: "bg-ink-900" },
  { tone: "extended", label: "Extended cover", swatch: "bg-lilac-400" },
  { tone: "idle", label: "Voicemail, returned at open", swatch: "bg-ink-200" },
];

export function Hero() {
  return (
    <section
      className={cn(
        "relative overflow-clip",
        "pb-[clamp(3rem,2rem+4vw,5.5rem)]",
        "pt-[calc(var(--header-height)+clamp(2.25rem,1.75rem+3.5vw,4.5rem))]",
      )}
    >
      {/* Ruled plan-paper field. Static: the background states that this is a
          document, and a document does not drift. */}
      <div aria-hidden className="grid-field pointer-events-none absolute inset-0 -z-10" />

      <Container width="wide">
        <div className="grid gap-5 min-[821px]:grid-cols-[5.5rem_minmax(0,1fr)] min-[821px]:gap-x-10">
          <IndexRail index="01" label="Introduction" />

          <div
            className={cn(
              "grid content-start gap-[clamp(2.5rem,2rem+2vw,3.5rem)]",
              "min-[1101px]:grid-cols-[minmax(0,1fr)_minmax(0,0.84fr)]",
              "min-[1101px]:items-center min-[1101px]:gap-x-[clamp(2rem,1rem+3vw,4rem)]",
            )}
          >
          <div className="grid content-start gap-6">
            <Reveal
              as="span"
              variant="fade"
              className="inline-flex items-center gap-[0.6rem] font-mono text-2xs uppercase tracking-widest text-ink-400"
            >
              <PulseDot />
              Now onboarding for Q4 — 11 seats left
            </Reveal>

            <SplitWords
              as="h1"
              text="The back office your small business never had room to hire."
              stagger={55}
              className="max-w-[19ch] font-display text-hero font-extrabold tracking-tighter"
            />

            <Reveal as="p" delay={200} className="max-w-[54ch] text-lg text-ink-500">
              Clinics, law firms, pharmacies and offices across the United States use
              Xevantis for the phones, the paperwork, the books and the software behind
              them. Your person starts in <strong className="font-semibold text-ink-900">2 weeks</strong>.
            </Reveal>

            <Reveal delay={280} className="flex flex-wrap items-center gap-3">
              <Button href="/get-started" size="lg" magnetic={0.3}>
                <ButtonLabel>Get your team</ButtonLabel>
                <ArrowRight />
              </Button>
              <Button href="#process" variant="secondary" size="lg">
                <ButtonLabel>See how it works</ButtonLabel>
              </Button>
            </Reveal>
          </div>

            <DaySheet />
          </div>
        </div>

        <ProofRail />
        <CoverageBand />
      </Container>
    </section>
  );
}

/**
 * The day sheet: one office's work, playing out.
 *
 * The hero's visual anchor. A scan line runs the day and each entry resolves
 * as it passes, so the graphic is continuously alive without anything on it
 * drifting or floating. It stays a server component because the whole loop is
 * CSS — the per-row delay is the only thing computed, and it is derived from
 * the data so adding an entry re-times the sweep on its own.
 *
 * Overflowing its column on wide screens is deliberate: a sheet cropped by the
 * frame reads as a document lying on a desk, where the same panel centered
 * with a shadow would read as a product screenshot.
 */
function DaySheet() {
  const timing = {
    "--ops-cycle": `${SHEET_CYCLE}s`,
    "--ops-step": `${(SHEET_CYCLE / OPS_DAY.length).toFixed(3)}s`,
  } as CSSProperties;

  return (
    <Reveal
      variant="fade"
      delay={340}
      /* Pulls the right edge out to the viewport: the container's own outer
         margin plus its gutter. `max()` keeps it correct below the container's
         max width, where the outer margin is zero and only the gutter is left
         to cross. The section's `overflow-clip` does the cropping.
         The underscores are spaces — calc() requires whitespace around `-`,
         and Tailwind cannot take a literal space inside an arbitrary value. */
      className="min-[1101px]:mr-[calc(0px_-_max(0px,(100vw_-_var(--container-wide))/2)_-_var(--gutter))]"
    >
      <div
        className={cn(
          "overflow-hidden rounded-sm border border-ink-900/12 bg-paper-000",
          // Square off the cropped edge — a rounded corner running off-screen
          // reads as a panel that failed to fit rather than a cropped sheet.
          "min-[1101px]:rounded-r-none min-[1101px]:border-r-0",
        )}
      >
        <div className="flex items-center justify-between gap-4 bg-ink-900 px-5 py-[0.85rem]">
          <span className="font-mono text-2xs uppercase tracking-widest text-paper-050/70">
            A Tuesday · nine-person practice
          </span>
          <span className="shrink-0 font-mono text-2xs tracking-widest whitespace-nowrap text-lilac-300">
            &#8470;&#8202;01
          </span>
        </div>

        <div className="relative" style={timing}>
          <ol>
            {OPS_DAY.map((event, index) => (
              <li
                key={`${event.time}-${event.label}`}
                style={{ "--i": index } as CSSProperties}
                className={cn(
                  "grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-x-4",
                  "border-t border-ink-900/[0.07] px-5 py-[0.7rem] first:border-t-0",
                  "animate-ops-resolve [animation-delay:calc(var(--i)*var(--ops-step))]",
                  "motion-reduce:animate-none motion-reduce:opacity-100",
                )}
              >
                <time
                  dateTime={event.time}
                  className="font-mono text-2xs tabular-nums text-ink-400"
                >
                  {event.time}
                </time>
                <span className="text-sm text-ink-900">{event.label}</span>
                <span
                  className={cn(
                    "font-mono text-2xs uppercase tracking-widest",
                    event.flagged ? "text-lilac-500" : "text-ink-400",
                  )}
                >
                  {event.status}
                </span>
              </li>
            ))}
          </ol>

          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-x-0 h-px bg-lilac-400",
              "animate-ops-scan motion-reduce:hidden",
            )}
          />
        </div>

        <p className="border-t border-ink-900/12 bg-paper-100 px-5 py-[0.85rem] text-2xs text-ink-500">
          One item went to the practice manager. Everything else closed without
          them.
        </p>
      </div>
    </Reveal>
  );
}

/**
 * Four figures under one rule, the way a record states its totals. Replaces
 * the avatar stack: a row of invented initials is decoration, and the same
 * space spent on numbers we already stand behind is evidence.
 */
function ProofRail() {
  return (
    <div className="mt-[clamp(2.5rem,2rem+2.5vw,4.5rem)] grid gap-6">
      <HairRule />

      <dl className="grid grid-cols-2 gap-x-6 gap-y-7 min-[821px]:grid-cols-4">
        {HERO_PROOF.map((cell, index) => (
          <Reveal key={cell.label} delay={index * 60} className="grid content-start gap-1">
            <dt className="font-mono text-2xl font-medium tabular-nums tracking-tight text-ink-900">
              {cell.figure}
            </dt>
            <dd className="max-w-[22ch] text-sm text-ink-500">{cell.label}</dd>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}

/**
 * Hours of coverage, ruled like a shift board.
 *
 * The signature graphic, and the one thing on the page that is specific to
 * what a back office actually sells. Both the blocks and the description a
 * screen reader hears are derived from `COVERAGE`, so they cannot disagree.
 */
function CoverageBand() {
  const hours = coverageHours(COVERAGE);
  const midpoint = Math.round((COVERAGE.band.from + COVERAGE.band.to) / 2);
  const present = tonesPresent(hours);
  const legend = LEGEND.filter((item) => present.has(item.tone));

  return (
    <Reveal delay={120} className="mt-[clamp(2.5rem,2rem+2vw,3.5rem)] grid gap-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
          Phone coverage · {COVERAGE.timezone}
        </span>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {legend.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-2xs text-ink-500">
              <span aria-hidden className={cn("size-[9px] rounded-[2px]", item.swatch)} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div
        role="img"
        aria-label={coverageLabel(COVERAGE)}
        className="flex h-[clamp(42px,4.6vw,68px)] items-end gap-[2px]"
      >
        {hours.map(({ hour, tone }) => (
          <span
            key={hour}
            aria-hidden
            className={cn("flex-1 rounded-[1px]", TONE_BLOCK[tone])}
          />
        ))}
      </div>

      <div
        aria-hidden
        className="flex justify-between font-mono text-2xs tabular-nums text-ink-400"
      >
        <span>{hourTick(COVERAGE.band.from)}</span>
        <span className="max-[520px]:hidden">{hourTick(midpoint)}</span>
        <span>{hourTick(COVERAGE.band.to)}</span>
      </div>
    </Reveal>
  );
}
