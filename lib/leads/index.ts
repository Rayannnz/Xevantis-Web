import { clamp, withThousands } from "@/lib/utils";

/**
 * The quote model behind /get-started.
 *
 * Nothing here imports the service registry or any server-only module: the
 * form is a client component and has to render the same figure the action
 * recomputes. Keeping the arithmetic in one place is the point — a floor that
 * lives in a component is a floor the next page forgets.
 */

/* ==========================================================================
   PRICING
   ========================================================================== */

/** The published floor. No surface on this site may quote below it. */
export const MIN_HOURLY_RATE = 6;

/** Slider ceiling. Above this the roles are senior enough to price by hand. */
export const MAX_HOURLY_RATE = 30;

/** 52/12. Billing four weeks to a month understates it by about 8%. */
const WEEKS_PER_MONTH = 52 / 12;

export const HOURS_PER_WEEK_OPTIONS = [10, 20, 30, 40] as const;

export const MAX_SEATS = 50;

export const TIMELINES = [
  "As soon as you can staff it",
  "In 2 to 4 weeks",
  "In 1 to 3 months",
  "Just scoping for now",
] as const;

export interface Engagement {
  seats: number;
  hoursPerWeek: number;
  hourlyRate: number;
}

export interface Quote extends Engagement {
  hoursPerMonth: number;
  monthly: number;
}

/**
 * Falls back to the minimum rather than propagating a non-finite value.
 * `clamp` is `min(max(v, lo), hi)`, and NaN survives both — so a `Number("")`
 * would otherwise sail through the clamp and out into a quote of "$NaN".
 */
const bounded = (value: number, min: number, max: number) =>
  Math.round(clamp(Number.isFinite(value) ? value : min, min, max));

/**
 * Seats × schedule × rate, with every input clamped on the way in.
 *
 * The clamp is not belt-and-braces: the action runs this on raw form values,
 * so it is the last thing standing between a hand-crafted POST and a quote
 * below the floor.
 */
export function quote({ seats, hoursPerWeek, hourlyRate }: Engagement): Quote {
  const safe = {
    seats: bounded(seats, 1, MAX_SEATS),
    hoursPerWeek: bounded(hoursPerWeek, 1, 40),
    hourlyRate: bounded(hourlyRate, MIN_HOURLY_RATE, MAX_HOURLY_RATE),
  };

  const hoursPerMonth = Math.round(safe.seats * safe.hoursPerWeek * WEEKS_PER_MONTH);

  return {
    ...safe,
    hoursPerMonth,
    // Rounded to the nearest $10. This is an estimate, and a to-the-dollar
    // figure reads like a binding price.
    monthly: Math.round((hoursPerMonth * safe.hourlyRate) / 10) * 10,
  };
}

export const usd = (value: number) => `$${withThousands(String(Math.round(value)))}`;

/* ==========================================================================
   THE LEAD
   ========================================================================== */

export interface Lead {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  timeline: string;
  details: string;
  engagement: Engagement;
}

/** Keyed by input `name`, so the form can render each one against its field. */
export type LeadFieldErrors = Record<string, string>;

export type ParseResult =
  | { ok: true; lead: Lead }
  | { ok: false; errors: LeadFieldErrors };

/**
 * Length caps, applied before validation.
 *
 * Every one of these strings ends up in an email we send ourselves, so the cap
 * is a trust boundary, not a nicety — it is what stops a submission from
 * turning into a megabyte of message body.
 */
const LIMITS = {
  name: 80,
  email: 160,
  company: 120,
  phone: 40,
  service: 90,
  timeline: 48,
  details: 2000,
} as const;

/** Deliberately permissive: this rejects typos, not unusual-but-valid addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readField(form: FormData, key: string, limit = 120): string {
  const raw = form.get(key);
  return (typeof raw === "string" ? raw : "").trim().slice(0, limit);
}

const readNumber = (form: FormData, key: string): number => {
  const parsed = Number(readField(form, key, 12));
  return Number.isFinite(parsed) ? parsed : Number.NaN;
};

export function parseLead(form: FormData): ParseResult {
  const errors: LeadFieldErrors = {};

  const name = readField(form, "name", LIMITS.name);
  if (name.length < 2) errors.name = "Tell us who to reply to.";

  const email = readField(form, "email", LIMITS.email);
  if (!EMAIL.test(email)) errors.email = "Enter a valid work email address.";

  const company = readField(form, "company", LIMITS.company);
  if (company.length < 2) errors.company = "Tell us where you work.";

  const seats = readNumber(form, "seats");
  if (!(seats >= 1 && seats <= MAX_SEATS)) {
    errors.seats = `Between 1 and ${MAX_SEATS} people.`;
  }

  const hoursPerWeek = readNumber(form, "hoursPerWeek");
  if (!HOURS_PER_WEEK_OPTIONS.some((option) => option === hoursPerWeek)) {
    errors.hoursPerWeek = "Pick a weekly schedule.";
  }

  const hourlyRate = readNumber(form, "hourlyRate");
  if (!(hourlyRate >= MIN_HOURLY_RATE)) {
    // Stated rather than silently clamped: someone who typed a lower number
    // deserves to know the floor exists before we reply with it.
    errors.hourlyRate = `${usd(MIN_HOURLY_RATE)} an hour is our floor — we cannot staff a role below it.`;
  } else if (hourlyRate > MAX_HOURLY_RATE) {
    errors.hourlyRate = `Above ${usd(MAX_HOURLY_RATE)} an hour we price by hand. Put the role in the notes and we'll come back with a number.`;
  }

  const timeline = readField(form, "timeline", LIMITS.timeline);
  if (!TIMELINES.some((option) => option === timeline)) {
    errors.timeline = "Pick a start window.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    lead: {
      name,
      email,
      company,
      phone: readField(form, "phone", LIMITS.phone),
      // Not matched against the registry: the value only ever ends up escaped
      // in an email we send ourselves, so the length cap is the security
      // property and an enum would only couple this file to lib/services.
      service: readField(form, "service", LIMITS.service),
      timeline,
      details: readField(form, "details", LIMITS.details),
      engagement: { seats, hoursPerWeek, hourlyRate },
    },
  };
}
