/**
 * Runnable check for the hero coverage band.
 * Run: npx tsx lib/coverage.self-check.ts
 */
import assert from "node:assert/strict";
import { COVERAGE } from "./content";
import {
  coverageHours,
  coverageLabel,
  hourLabel,
  hourTick,
  tonesPresent,
} from "./coverage";
import type { Coverage } from "./types";

/* ---------- The band matches the data ---------- */

const hours = coverageHours(COVERAGE);

// One block per hour drawn, no more and no fewer. A band that renders a
// different number of blocks than the range it claims is a graphic that lies.
assert.equal(hours.length, COVERAGE.band.to - COVERAGE.band.from);
assert.equal(hours[0].hour, COVERAGE.band.from);
assert.equal(hours[hours.length - 1].hour, COVERAGE.band.to - 1);

// The reason this file exists: `to` is exclusive on both ranges, so the last
// live hour is the one *before* it. Reading it as inclusive would draw an
// extra hour of live cover the sales team would have to walk back.
const live = hours.filter((h) => h.tone === "live");
assert.equal(live.length, COVERAGE.live.to - COVERAGE.live.from);
assert.equal(live[live.length - 1].hour, COVERAGE.live.to - 1);
assert.equal(
  hours.find((h) => h.hour === COVERAGE.live.to)?.tone !== "live",
  true,
);

// Live wins wherever the two windows overlap — extended cover is what sits
// outside the named specialist's hours, never on top of them.
for (const entry of hours) {
  if (entry.hour >= COVERAGE.live.from && entry.hour < COVERAGE.live.to) {
    assert.equal(entry.tone, "live", `${entry.hour}:00 should read as live`);
  }
}

/* ---------- A band with a gap still classifies ---------- */

// Extended cover need not reach the edges of the drawn band. Anything outside
// both windows has to fall through to `idle` rather than inheriting a tone.
const GAPPED: Coverage = {
  timezone: "ET",
  band: { from: 0, to: 24 },
  live: { from: 9, to: 17 },
  extended: { from: 8, to: 18 },
};
const gapped = coverageHours(GAPPED);
assert.equal(gapped.filter((h) => h.tone === "idle").length, 24 - 10);
assert.equal(gapped.find((h) => h.hour === 8)?.tone, "extended");
assert.equal(gapped.find((h) => h.hour === 7)?.tone, "idle");

/* ---------- The key lists only what is drawn ---------- */

// With extended cover spanning the whole band there is no uncovered hour, so
// the key must not offer a "voicemail" swatch the band never uses. This is the
// case that is easy to miss: the legend is written by hand, the band is not.
assert.deepEqual([...tonesPresent(hours)].sort(), ["extended", "live"]);
assert.deepEqual(
  [...tonesPresent(gapped)].sort(),
  ["extended", "idle", "live"],
);

/* ---------- Clock formatting ---------- */

// Noon and midnight are the two the 12-hour clock gets wrong: `hour % 12` is
// 0 for both, which formats as "0am" unless it is special-cased.
assert.equal(hourLabel(0), "12am");
assert.equal(hourLabel(12), "12pm");
assert.equal(hourLabel(6), "6am");
assert.equal(hourLabel(20), "8pm");
assert.equal(hourLabel(22), "10pm");

assert.equal(hourTick(6), "06:00");
assert.equal(hourTick(22), "22:00");

/* ---------- The spoken description ---------- */

// The label is what a screen reader hears instead of the blocks, so it has to
// state the same hours the blocks draw.
const label = coverageLabel(COVERAGE);
assert.ok(label.includes(hourLabel(COVERAGE.live.from)));
assert.ok(label.includes(hourLabel(COVERAGE.live.to)));
assert.ok(label.includes(COVERAGE.timezone));

console.log("lib/coverage self-check ok");
