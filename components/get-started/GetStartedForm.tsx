"use client";

import { useActionState, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  HOURS_PER_WEEK_OPTIONS,
  MAX_HOURLY_RATE,
  MAX_SEATS,
  MIN_HOURLY_RATE,
  TIMELINES,
  quote,
  usd,
} from "@/lib/leads";
import { submitLead, type LeadState } from "@/lib/leads/actions";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { ArrowRight, Check, ChevronDown } from "@/components/icons";

/** Serializable shape of the solutions registry — the page owns the data. */
export interface ServiceOptionGroup {
  heading: string;
  options: readonly string[];
}

/* ==========================================================================
   CONTROL SURFACES
   The field has no ring of its own: focus is the ink border plus the sun glow,
   the same pair SubscribeForm uses, so the two forms read as one control set.
   ========================================================================== */

const CONTROL = cn(
  "w-full rounded-md border border-ink-900/[0.12] bg-paper-000 px-4 text-base text-ink-900",
  "placeholder:text-ink-400",
  "[transition:border-color_180ms_ease,box-shadow_280ms_var(--ease-out-expo)]",
  "focus:border-ink-900 focus:shadow-focus-sun focus:outline-none",
);

const CONTROL_HEIGHT = "h-[52px]";

const CONTROL_INVALID = "border-signal-danger shadow-focus-danger";

const CARD = "rounded-lg border border-ink-900/10 bg-paper-000 p-[var(--card-padding)] shadow-sm";

/** Schedule chip. The radio itself is `sr-only`, so the ring lives on the label. */
const CHIP = cn(
  "grid h-[52px] cursor-pointer place-items-center rounded-pill border-2 border-ink-900/10 bg-paper-000 px-6",
  "font-display text-sm font-semibold text-ink-700",
  "[transition:background-color_180ms_ease,border-color_180ms_ease,color_180ms_ease]",
  "hover:border-ink-900/30",
  "peer-checked:border-ink-900 peer-checked:bg-ink-900 peer-checked:text-paper-050",
  "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[3px]",
  "peer-focus-visible:outline-lilac-400",
);

const INITIAL: LeadState = { status: "idle" };

type TextField = "name" | "email" | "company" | "phone" | "service" | "timeline" | "details";

const EMPTY: Record<TextField, string> = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  timeline: "",
  details: "",
};

export function GetStartedForm({ serviceGroups }: { serviceGroups: ServiceOptionGroup[] }) {
  const [state, formAction, pending] = useActionState(submitLead, INITIAL);

  // Every field is controlled, including the plain text ones. React resets an
  // uncontrolled field once the action settles, so a Resend outage or a single
  // bad email would otherwise hand the visitor an empty form to retype.
  const [values, setValues] = useState(EMPTY);

  // Seats stays a string so clearing the field shows an empty box rather than
  // snapping to 0. `quote` bounds whatever falls out of it.
  const [seats, setSeats] = useState("1");
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [hourlyRate, setHourlyRate] = useState(MIN_HOURLY_RATE);

  const bind = (field: TextField) => ({
    value: values[field],
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => setValues((current) => ({ ...current, [field]: event.target.value })),
  });

  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;
  const formRef = useRef<HTMLFormElement>(null);

  const errors = state.status === "invalid" ? state.errors : undefined;
  const estimate = quote({ seats: Number(seats), hoursPerWeek, hourlyRate });

  // Server-side rejection has to move focus, or a keyboard user is told the
  // form failed and left standing at the submit button with no way to find out
  // which field did it.
  useEffect(() => {
    if (state.status !== "invalid") return;
    formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  if (state.status === "sent") return <Sent firstName={state.firstName} />;

  /** Wires a control to its error or hint text. */
  const describedBy = (name: string, hint?: boolean) =>
    errors?.[name] ? `${fieldId(name)}-error` : hint ? `${fieldId(name)}-hint` : undefined;

  const invalid = (name: string) => (errors?.[name] ? true : undefined);

  return (
    <form ref={formRef} action={formAction} noValidate className="grid gap-6">
      {state.status === "failed" ? (
        <p
          role="alert"
          className="rounded-md border-2 border-signal-danger bg-blush-050 px-5 py-4 text-sm font-medium text-ink-900"
        >
          {state.message}
        </p>
      ) : null}

      {/* Off-screen rather than hidden: a bot reading the DOM fills it, a
          person never reaches it. */}
      <div aria-hidden className="absolute left-[-9999px] top-0 h-px w-px overflow-hidden">
        <label htmlFor={fieldId("company_website")}>Company website</label>
        <input
          id={fieldId("company_website")}
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Step index={1} title="Who we'd be replying to" className={CARD}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={fieldId("name")} label="Full name" error={errors?.name}>
            <input
              {...bind("name")}
              id={fieldId("name")}
              name="name"
              required
              autoComplete="name"
              placeholder="Dana Ruiz"
              aria-invalid={invalid("name")}
              aria-describedby={describedBy("name")}
              className={cn(CONTROL, CONTROL_HEIGHT, errors?.name && CONTROL_INVALID)}
            />
          </Field>

          <Field id={fieldId("email")} label="Work email" error={errors?.email}>
            <input
              {...bind("email")}
              id={fieldId("email")}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@yourpractice.com"
              aria-invalid={invalid("email")}
              aria-describedby={describedBy("email")}
              className={cn(CONTROL, CONTROL_HEIGHT, errors?.email && CONTROL_INVALID)}
            />
          </Field>

          <Field id={fieldId("company")} label="Company" error={errors?.company}>
            <input
              {...bind("company")}
              id={fieldId("company")}
              name="company"
              required
              autoComplete="organization"
              placeholder="Bright Smile Dental"
              aria-invalid={invalid("company")}
              aria-describedby={describedBy("company")}
              className={cn(CONTROL, CONTROL_HEIGHT, errors?.company && CONTROL_INVALID)}
            />
          </Field>

          <Field id={fieldId("phone")} label="Phone" optional error={errors?.phone}>
            <input
              {...bind("phone")}
              id={fieldId("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(212) 555-0142"
              className={cn(CONTROL, CONTROL_HEIGHT)}
            />
          </Field>
        </div>
      </Step>

      <Step
        index={2}
        title="What the team looks like"
        hint="Rough is fine. The number below moves as you change it, and nothing here is binding."
        className={CARD}
      >
        <Field id={fieldId("service")} label="What do you need covered?" optional>
          <Select {...bind("service")} id={fieldId("service")} name="service">
            <option value="">Not sure yet — help me scope it</option>
            {serviceGroups.map((group) => (
              <optgroup key={group.heading} label={group.heading}>
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))}
          </Select>
        </Field>

        <div className="grid gap-5 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)]">
          <Field id={fieldId("seats")} label="How many people?" error={errors?.seats}>
            <input
              id={fieldId("seats")}
              name="seats"
              type="number"
              inputMode="numeric"
              min={1}
              max={MAX_SEATS}
              step={1}
              required
              value={seats}
              onChange={(event) => setSeats(event.target.value)}
              aria-invalid={invalid("seats")}
              aria-describedby={describedBy("seats")}
              className={cn(CONTROL, CONTROL_HEIGHT, errors?.seats && CONTROL_INVALID)}
            />
          </Field>

          {/* Left as a real fieldset rather than a grid: a `display: grid`
              fieldset moves the legend into the flow and browsers disagree
              about where it lands. */}
          <fieldset>
            <legend className="mb-[0.4rem] font-display text-sm font-semibold text-ink-900">
              Hours a week, each
            </legend>
            <div className="flex flex-wrap gap-2">
              {HOURS_PER_WEEK_OPTIONS.map((hours) => (
                <label key={hours}>
                  <input
                    type="radio"
                    name="hoursPerWeek"
                    value={hours}
                    checked={hoursPerWeek === hours}
                    onChange={() => setHoursPerWeek(hours)}
                    className="peer sr-only"
                  />
                  <span className={CHIP}>
                    {hours} hrs
                    {hours === 40 ? <span className="sr-only"> — full time</span> : null}
                  </span>
                </label>
              ))}
            </div>
            {errors?.hoursPerWeek ? (
              <p className="mt-[0.4rem] text-xs font-medium text-signal-danger">
                {errors.hoursPerWeek}
              </p>
            ) : null}
          </fieldset>
        </div>

        <Field
          id={fieldId("hourlyRate")}
          label={`Hourly rate you're working to — ${usd(hourlyRate)}/hr`}
          error={errors?.hourlyRate}
          hint={`Our floor is ${usd(MIN_HOURLY_RATE)} an hour. Move it up for licensed, senior or software roles.`}
        >
          <input
            id={fieldId("hourlyRate")}
            name="hourlyRate"
            type="range"
            min={MIN_HOURLY_RATE}
            max={MAX_HOURLY_RATE}
            step={1}
            value={hourlyRate}
            onChange={(event) => setHourlyRate(Number(event.target.value))}
            aria-invalid={invalid("hourlyRate")}
            aria-describedby={describedBy("hourlyRate", true)}
            aria-valuetext={`${usd(hourlyRate)} per hour`}
            className="h-6 w-full cursor-pointer accent-ink-900"
          />
          <div className="flex justify-between font-display text-xs font-semibold text-ink-400">
            <span>{usd(MIN_HOURLY_RATE)} floor</span>
            <span>{usd(MAX_HOURLY_RATE)}+</span>
          </div>
        </Field>

        <Estimate
          monthly={estimate.monthly}
          seats={estimate.seats}
          hoursPerMonth={estimate.hoursPerMonth}
          hourlyRate={estimate.hourlyRate}
        />
      </Step>

      <Step index={3} title="Timing, and anything we should know" className={CARD}>
        <Field id={fieldId("timeline")} label="When would you want them starting?" error={errors?.timeline}>
          <Select
            {...bind("timeline")}
            id={fieldId("timeline")}
            name="timeline"
            required
            invalid={Boolean(errors?.timeline)}
            aria-describedby={describedBy("timeline")}
          >
            <option value="" disabled>
              Pick a start window
            </option>
            {TIMELINES.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          id={fieldId("details")}
          label="What's eating your week?"
          optional
          hint="The systems you run on, the volumes, the thing that keeps slipping. Two lines is plenty."
        >
          <textarea
            {...bind("details")}
            id={fieldId("details")}
            name="details"
            rows={5}
            maxLength={2000}
            placeholder="We're on Dentrix, about 80 insurance verifications a week, and the front desk can't get to the phones by Thursday."
            aria-describedby={describedBy("details", true)}
            className={cn(CONTROL, "resize-y py-3 leading-relaxed")}
          />
        </Field>
      </Step>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button type="submit" size="lg" disabled={pending} magnetic={0.25}>
          <ButtonLabel>{pending ? "Sending…" : "Send it to the team"}</ButtonLabel>
          <ArrowRight />
        </Button>
        <p className="max-w-[38ch] text-xs text-ink-400">
          One reply from the delivery lead who would run your account, within one
          business day. No sales sequence.
        </p>
      </div>
    </form>
  );
}

/* ==========================================================================
   PIECES
   ========================================================================== */

function Step({
  index,
  title,
  hint,
  className,
  children,
}: {
  index: number;
  title: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <div className="mb-6 flex items-start gap-4">
        <span
          aria-hidden
          className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink-900 bg-sun-300 font-display text-sm font-bold"
        >
          {index}
        </span>
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight">{title}</h2>
          {hint ? <p className="mt-1 max-w-[58ch] text-sm text-ink-500">{hint}</p> : null}
        </div>
      </div>
      <div className="grid gap-5">{children}</div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  optional = false,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-[0.4rem]">
      <label htmlFor={id} className="font-display text-sm font-semibold text-ink-900">
        {label}
        {optional ? (
          <span className="ml-2 font-body text-xs font-normal tracking-normal text-ink-400">
            Optional
          </span>
        ) : null}
      </label>

      {children}

      {/* Color alone never carries the message. */}
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-signal-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs text-ink-400">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

/** Native select with the OS chevron swapped for the brand one. */
function Select({
  invalid = false,
  className,
  children,
  ...rest
}: { invalid?: boolean } & React.ComponentPropsWithoutRef<"select">) {
  return (
    <div className="relative">
      <select
        aria-invalid={invalid || undefined}
        className={cn(
          CONTROL,
          CONTROL_HEIGHT,
          "cursor-pointer appearance-none pr-11",
          invalid && CONTROL_INVALID,
          className,
        )}
        {...rest}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-ink-400"
      />
    </div>
  );
}

/**
 * The running figure.
 *
 * `role="status"` so the monthly number is announced as the slider moves —
 * that number is the entire reason the controls above it exist.
 */
function Estimate({
  monthly,
  seats,
  hoursPerMonth,
  hourlyRate,
}: {
  monthly: number;
  seats: number;
  hoursPerMonth: number;
  hourlyRate: number;
}) {
  return (
    <div
      role="status"
      className="rounded-lg border-2 border-ink-900 bg-sun-100 p-6 shadow-sticker"
    >
      <p className="font-display text-xs font-bold uppercase tracking-widest text-ink-500">
        Ballpark
      </p>
      <p className="mt-2 font-display text-4xl font-bold leading-none tracking-tighter">
        {usd(monthly)}
        <span className="text-xl font-semibold text-ink-500"> / month</span>
      </p>
      {/* One template literal rather than interleaved JSX: the separators and
          the spaces around them survive the compiler's whitespace trimming. */}
      <p className="mt-3 text-sm text-ink-700">
        {`${seats} ${seats === 1 ? "person" : "people"} · ${hoursPerMonth} hours a month · ${usd(hourlyRate)}/hr`}
      </p>
      <p className="mt-3 text-xs text-ink-500">
        An estimate, not a quote. Built on {usd(hourlyRate)} an hour across 4.33 weeks — we
        confirm the real number once we know the roles and the tools.
      </p>
    </div>
  );
}

function Sent({ firstName }: { firstName: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // The panel is far shorter than the form it replaced, so without this the
  // page can be left scrolled past the only thing on it.
  useEffect(() => ref.current?.focus(), []);

  return (
    <div
      ref={ref}
      role="status"
      tabIndex={-1}
      className="rounded-lg border-2 border-ink-900 bg-paper-000 p-[var(--card-padding)] shadow-sticker-lg"
    >
      <span className="grid size-12 place-items-center rounded-full bg-mint-300">
        <Check aria-hidden className="size-6" />
      </span>

      <h2 className="mt-5 font-display text-3xl font-bold tracking-tighter">
        {firstName ? `Thanks, ${firstName} — ` : "Thanks — "}it&rsquo;s with the team.
      </h2>

      <p className="mt-3 max-w-[54ch] text-lg text-ink-500">
        You&rsquo;ll get one reply within one business day: who we&rsquo;d put on it, when
        they&rsquo;d start and what it costs a month. From a person who runs the work, not a
        sales development rep.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href="/" variant="secondary">
          <ButtonLabel>Back to the homepage</ButtonLabel>
        </Button>
        <Button href="/resources" variant="ghost">
          <ButtonLabel>Read something while you wait</ButtonLabel>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
