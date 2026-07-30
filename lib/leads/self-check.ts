/**
 * Runnable check for the quote floor and the lead parser.
 * Run: npx tsx lib/leads/self-check.ts
 */
import assert from "node:assert/strict";
import {
  HOURS_PER_WEEK_OPTIONS,
  MAX_HOURLY_RATE,
  MAX_SEATS,
  MIN_HOURLY_RATE,
  TIMELINES,
  parseLead,
  quote,
  usd,
} from "./index";

// Typed loosely on purpose: every case below overrides one field with the kind
// of value a hand-crafted POST would carry, and a literal type would reject
// exactly the input this file exists to test.
const VALID: Record<string, string> = {
  name: "Dana Ruiz",
  email: "dana@brightsmiledental.com",
  company: "Bright Smile Dental",
  phone: "(212) 555-0142",
  service: "Admin support",
  timeline: TIMELINES[1],
  details: "Two front desks, heavy insurance verification.",
  seats: "2",
  hoursPerWeek: "40",
  hourlyRate: "6",
};

const formOf = (overrides: Record<string, string> = {}) => {
  const form = new FormData();
  for (const [key, value] of Object.entries({ ...VALID, ...overrides })) {
    form.set(key, value);
  }
  return form;
};

/* ---------- The floor ---------- */

// The reason this file exists: nothing may quote below $6/hour. Both halves
// matter — the parser rejects it, and quote() clamps it even if it slips past.
const below = parseLead(formOf({ hourlyRate: "3" }));
assert.equal(below.ok, false);
assert.ok(!below.ok && below.errors.hourlyRate?.includes("$6"));

assert.equal(quote({ seats: 1, hoursPerWeek: 40, hourlyRate: 1 }).hourlyRate, MIN_HOURLY_RATE);
assert.equal(quote({ seats: 1, hoursPerWeek: 40, hourlyRate: -99 }).hourlyRate, MIN_HOURLY_RATE);
assert.equal(quote({ seats: 1, hoursPerWeek: 40, hourlyRate: Number.NaN }).hourlyRate, MIN_HOURLY_RATE);
assert.equal(
  quote({ seats: 1, hoursPerWeek: 40, hourlyRate: 500 }).hourlyRate,
  MAX_HOURLY_RATE,
);
assert.equal(parseLead(formOf({ hourlyRate: "31" })).ok, false);
assert.equal(parseLead(formOf({ hourlyRate: String(MIN_HOURLY_RATE) })).ok, true);

// Seats and schedule are clamped too, so a hand-crafted POST cannot produce a
// monthly figure the sales team would have to walk back.
assert.equal(quote({ seats: 9999, hoursPerWeek: 40, hourlyRate: 6 }).seats, MAX_SEATS);
assert.equal(quote({ seats: 0, hoursPerWeek: 40, hourlyRate: 6 }).seats, 1);
assert.equal(quote({ seats: 1, hoursPerWeek: 80, hourlyRate: 6 }).hoursPerWeek, 40);

/* ---------- The arithmetic ---------- */

// One full-time person at the floor: 40 × 52/12 ≈ 173 hours, ≈ $1,040 a month.
const fullTime = quote({ seats: 1, hoursPerWeek: 40, hourlyRate: MIN_HOURLY_RATE });
assert.equal(fullTime.hoursPerMonth, 173);
assert.equal(fullTime.monthly, 1040);
assert.equal(usd(fullTime.monthly), "$1,040");

// A month is 4.33 weeks, not 4 — quoting four would understate every estimate.
assert.ok(fullTime.hoursPerMonth > 40 * 4);

// Doubling the seats doubles the hours. Rounding lives on the money, not here.
assert.equal(quote({ seats: 2, hoursPerWeek: 40, hourlyRate: 6 }).hoursPerMonth, 347);

// Every figure the form can produce is a round $10 — an estimate that reads
// to the dollar reads like a binding price.
for (const hours of HOURS_PER_WEEK_OPTIONS) {
  for (const rate of [MIN_HOURLY_RATE, 13, MAX_HOURLY_RATE]) {
    const { monthly } = quote({ seats: 3, hoursPerWeek: hours, hourlyRate: rate });
    assert.equal(monthly % 10, 0, `${hours}h at ${rate} produced ${monthly}`);
  }
}

/* ---------- The parser ---------- */

const ok = parseLead(formOf());
assert.ok(ok.ok);
assert.equal(ok.lead.email, VALID.email);
assert.equal(ok.lead.engagement.seats, 2);
assert.equal(ok.lead.engagement.hoursPerWeek, 40);

// Whitespace-only input is absence, not a value.
assert.equal(parseLead(formOf({ name: "   " })).ok, false);
assert.equal(parseLead(formOf({ company: " " })).ok, false);

// The email check rejects typos and accepts plus-addressing.
for (const bad of ["dana", "dana@", "@clinic.com", "dana@clinic", "a b@c.com"]) {
  assert.equal(parseLead(formOf({ email: bad })).ok, false, `${bad} should be rejected`);
}
assert.equal(parseLead(formOf({ email: "dana+leads@clinic.co.uk" })).ok, true);

// Schedule and start window are closed sets — the form renders them as chips
// and a select, so anything else arrived by hand.
assert.equal(parseLead(formOf({ hoursPerWeek: "37" })).ok, false);
assert.equal(parseLead(formOf({ timeline: "whenever" })).ok, false);
assert.equal(parseLead(formOf({ seats: "0" })).ok, false);
assert.equal(parseLead(formOf({ seats: "51" })).ok, false);
assert.equal(parseLead(formOf({ seats: "abc" })).ok, false);

// Optional fields stay optional.
const sparse = parseLead(formOf({ phone: "", service: "", details: "" }));
assert.ok(sparse.ok);
assert.equal(sparse.lead.phone, "");

// Every bad field reports at once, so the form never fails one error at a time.
const messy = parseLead(formOf({ name: "", email: "nope", company: "" }));
assert.ok(!messy.ok);
assert.deepEqual(Object.keys(messy.errors).sort(), ["company", "email", "name"]);

// Long input is capped before it ever reaches the message body.
const long = parseLead(formOf({ details: "x".repeat(9000) }));
assert.ok(long.ok);
assert.equal(long.lead.details.length, 2000);

console.log("lib/leads self-check ok");
