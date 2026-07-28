"use client";

import { useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "./Toast";
import { Button, ButtonLabel, type ButtonSize } from "./Button";

interface SubscribeFormProps {
  /** Confirmation announced on a successful submit. */
  successMessage: string;
  inputId: string;
  label: string;
  placeholder: string;
  cta: string;
  size?: ButtonSize;
  className?: string;
  fieldClassName?: string;
}

/**
 * Inline email capture.
 *
 * There is no backend here — the original site was a static build — so submit
 * validates, clears, and announces. Errors set `aria-invalid` and move focus;
 * colour alone never carries the message.
 */
export function SubscribeForm({
  successMessage,
  inputId,
  label,
  placeholder,
  cta,
  size = "md",
  className,
  fieldClassName,
}: SubscribeFormProps) {
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [invalid, setInvalid] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = inputRef.current;
    if (!input) return;

    if (!input.checkValidity()) {
      setInvalid(true);
      input.focus();
      return;
    }

    setInvalid(false);
    event.currentTarget.reset();
    toast(successMessage);
  };

  const errorId = `${inputId}-error`;

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      <div
        className={cn(
          "flex max-w-[420px] gap-2 rounded-pill border bg-paper-000 p-[0.35rem]",
          // The field itself has no border, so the focus ring lives on the
          // wrapper — the pill is the control as far as the eye is concerned.
          "[transition:border-color_180ms_ease,box-shadow_280ms_var(--ease-out-expo)]",
          "focus-within:border-ink-900 focus-within:shadow-focus-sun",
          invalid ? "border-signal-danger shadow-focus-danger" : "border-ink-900/10",
          fieldClassName,
        )}
      >
        <label className="sr-only" htmlFor={inputId}>
          {label}
        </label>
        <input
          ref={inputRef}
          id={inputId}
          type="email"
          name="email"
          required
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? errorId : undefined}
          onChange={() => setInvalid(false)}
          className={cn(
            "h-[44px] w-full min-w-0 rounded-pill border-0 bg-transparent px-[1.15rem] text-base text-ink-900",
            "placeholder:text-ink-400 focus:outline-none",
          )}
        />
        <Button type="submit" size={size} className="shrink-0">
          <ButtonLabel>{cta}</ButtonLabel>
        </Button>
      </div>

      {/* Colour alone never carries the message. */}
      {invalid ? (
        <p id={errorId} className="mt-2 px-[1.15rem] text-xs text-signal-danger">
          Enter a valid work email address.
        </p>
      ) : null}
    </form>
  );
}
