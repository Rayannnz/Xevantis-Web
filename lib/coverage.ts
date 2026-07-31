import type { Coverage, HourRange } from "./types";

/**
 * The hero coverage band.
 *
 * Kept apart from the component because the band makes a claim about business
 * hours in two places at once — the drawn blocks and the description a screen
 * reader hears. Both are derived here from one object, so they cannot disagree.
 */

export type CoverageTone = "live" | "extended" | "idle";

export interface CoverageHour {
  hour: number;
  tone: CoverageTone;
}

/** `to` is exclusive: a range of 7–20 covers the hour beginning at 19:00. */
const covers = (hour: number, range: HourRange) =>
  hour >= range.from && hour < range.to;

/** One entry per hour the band draws, in clock order. */
export function coverageHours(coverage: Coverage): CoverageHour[] {
  const hours: CoverageHour[] = [];

  for (let hour = coverage.band.from; hour < coverage.band.to; hour++) {
    hours.push({
      hour,
      tone: covers(hour, coverage.live)
        ? "live"
        : covers(hour, coverage.extended)
          ? "extended"
          : "idle",
    });
  }

  return hours;
}

/**
 * The tones the band actually draws.
 *
 * The key is built from this rather than from the full list of tones: a legend
 * entry with nothing on the band to match it is a claim about hours we do not
 * cover that way, and the reader has no way to tell it is vestigial.
 */
export function tonesPresent(hours: CoverageHour[]): Set<CoverageTone> {
  return new Set(hours.map((entry) => entry.tone));
}

/** How an hour is spoken: "6am", "12pm", "8pm". */
export function hourLabel(hour: number): string {
  const period = hour % 24 < 12 ? "am" : "pm";
  const clock = hour % 12 === 0 ? 12 : hour % 12;
  return `${clock}${period}`;
}

/** How an hour is ruled under the band: "06:00". */
export function hourTick(hour: number): string {
  return `${String(hour).padStart(2, "0")}:00`;
}

/**
 * The band's text equivalent. Generated rather than written alongside the
 * data: a hand-written description is a second source for the same claim, and
 * the one that drifts is always the one nobody can see.
 */
export function coverageLabel({ live, extended, timezone }: Coverage): string {
  return (
    `Phone coverage. Answered live by your specialist from ${hourLabel(live.from)} ` +
    `to ${hourLabel(live.to)} ${timezone}, with extended cover from ` +
    `${hourLabel(extended.from)} to ${hourLabel(extended.to)} ${timezone}.`
  );
}
