"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";
import { Button, ButtonLabel } from "@/components/ui/Button";

const FIELD = cn(
  "w-full rounded-pill border border-ink-900/10 bg-paper-000 px-[1.15rem] text-base text-ink-900",
  "placeholder:text-ink-400",
  "[transition:border-color_180ms_ease,box-shadow_280ms_var(--ease-out-expo),background-color_180ms_ease]",
  "hover:border-ink-300",
  // focus-visible, not focus: a mouse click should not paint the ring, but the
  // global keyboard ring must never be suppressed.
  "focus-visible:border-ink-900 focus-visible:shadow-focus-sun focus-visible:outline-none",
  "aria-invalid:border-signal-danger aria-invalid:shadow-focus-danger",
);

const INPUT = cn(FIELD, "h-[52px]");

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="grid gap-[0.4rem]">
      <label className="text-sm font-medium text-ink-500" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
}

/** Form showcase. No backend — submit validates, clears and announces. */
export function DemoForm() {
  const toast = useToast();
  const emailRef = useRef<HTMLInputElement>(null);
  const [invalid, setInvalid] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current;

    if (email && !email.checkValidity()) {
      setInvalid(true);
      email.focus();
      return;
    }

    setInvalid(false);
    event.currentTarget.reset();
    toast("Demo submitted — no data left the page.");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <Field label="Full name" htmlFor="ds-name">
        <input className={INPUT} id="ds-name" type="text" placeholder="Alex Rivera" />
      </Field>

      <Field label="Work email" htmlFor="ds-email">
        <input
          ref={emailRef}
          className={INPUT}
          id="ds-email"
          type="email"
          placeholder="you@company.com"
          required
          aria-invalid={invalid || undefined}
          onChange={() => setInvalid(false)}
        />
      </Field>

      <Field label="Team size" htmlFor="ds-team">
        <select
          className={cn(
            INPUT,
            "appearance-none bg-[length:14px] bg-[right_1.15rem_center] bg-no-repeat pr-[2.6rem]",
            "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none' stroke='%2355515f' stroke-width='1.6'%3E%3Cpath d='M2.5 4.5 6 8l3.5-3.5'/%3E%3C/svg%3E\")]",
          )}
          id="ds-team"
          defaultValue="1–10 seats"
        >
          <option>1–10 seats</option>
          <option>11–50 seats</option>
          <option>51–200 seats</option>
          <option>200+ seats</option>
        </select>
      </Field>

      <Field label="What do you need staffed?" htmlFor="ds-msg">
        <textarea
          className={cn(FIELD, "min-h-[128px] resize-y rounded-lg py-[0.9rem]")}
          id="ds-msg"
          placeholder="Tier-1 support, 12k tickets/month, Zendesk…"
        />
      </Field>

      <Field label="Error state" htmlFor="ds-err">
        <input
          className={INPUT}
          id="ds-err"
          type="text"
          defaultValue="not-an-email"
          aria-invalid="true"
          aria-describedby="ds-err-msg"
        />
        <span className="text-xs text-signal-danger" id="ds-err-msg">
          Enter a valid work email address.
        </span>
      </Field>

      <Button type="submit" className="justify-self-start">
        <ButtonLabel>Submit</ButtonLabel>
      </Button>
    </form>
  );
}
