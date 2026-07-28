"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/usePointerEffects";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "secondary"
  | "ghost"
  | "sticker";
export type ButtonSize = "sm" | "md" | "lg";

/* Per-property durations and easings, exactly as the original tuned them. */
const TRANSITION =
  "[transition:transform_280ms_var(--ease-out-back),box-shadow_280ms_var(--ease-out-expo),background-color_180ms_var(--ease-out-quad),color_180ms_var(--ease-out-quad),border-color_180ms_var(--ease-out-quad)]";

const BASE = cn(
  "relative isolate inline-flex cursor-pointer items-center justify-center gap-[0.6rem]",
  "overflow-hidden rounded-pill border border-transparent",
  "font-display font-semibold leading-none tracking-normal whitespace-nowrap",
  TRANSITION,
  "active:scale-[0.97]",
  "disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45",
  // Icons sit above the liquid fill and nudge forward on hover.
  "[&>svg]:relative [&>svg]:z-[2] [&>svg]:size-[1.05em]",
  "[&>svg]:transition-transform [&>svg]:duration-[280ms] [&>svg]:ease-out-expo",
  "hover:[&>svg]:translate-x-[3px]",
);

/** The liquid fill that rises from the bottom edge on hover. */
const FILL = cn(
  "before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:content-['']",
  "before:translate-y-[101%] before:transition-transform before:duration-[480ms] before:ease-out-expo",
  "hover:before:translate-y-0",
);

const VARIANTS: Record<ButtonVariant, string> = {
  primary: cn(FILL, "bg-ink-900 text-paper-050 shadow-md before:bg-sun-300 hover:text-ink-900 hover:shadow-lg"),
  accent: cn(FILL, "bg-sun-300 text-ink-900 shadow-glow-sun before:bg-ink-900 hover:text-paper-050"),
  secondary: cn(FILL, "border-ink-900 bg-transparent text-ink-900 before:bg-ink-900 hover:text-paper-100"),
  ghost: cn(FILL, "bg-transparent px-4 text-ink-900 before:bg-ink-050"),
  // The sticker swaps the liquid fill for a physical press.
  sticker: cn(
    "border-2 border-ink-900 bg-paper-000 text-ink-900 shadow-sticker",
    "[transition:transform_180ms_var(--ease-out-quad),box-shadow_180ms_var(--ease-out-quad)]",
    "hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-sticker-hover",
    "active:translate-x-[2px] active:translate-y-[2px] active:scale-100 active:shadow-sticker-active",
  ),
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-[38px] px-[1.1rem] text-sm",
  md: "h-[48px] px-6 text-base",
  lg: "h-[58px] px-8 text-lg",
};

const ICON_SIZES: Record<ButtonSize, string> = {
  sm: "w-[38px]",
  md: "w-[48px]",
  lg: "w-[58px]",
};

/**
 * Magnetic buttons declare their pull as a transform custom property. The
 * timing intentionally comes from the shared button transition rather than a
 * spring of its own — that is how the original cascade resolved.
 */
const MAGNETIC = "[transform:translate3d(var(--tx,0px),var(--ty,0px),0)]";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Square, pill-free icon button. */
  iconOnly?: boolean;
  block?: boolean;
  /** Cursor attraction strength. Reserved for hero-scale CTAs. */
  magnetic?: number;
  className?: string;
  children: ReactNode;
}

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children"> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & { href?: never };

export type ButtonProps = AnchorProps | NativeButtonProps;

export function Button({
  variant = "primary",
  size = "md",
  iconOnly = false,
  block = false,
  magnetic,
  className,
  children,
  ...rest
}: ButtonProps) {
  const magneticRef = useMagnetic<HTMLElement>(magnetic ?? 0.32);

  const classes = cn(
    BASE,
    VARIANTS[variant],
    SIZES[size],
    iconOnly && cn(ICON_SIZES[size], "rounded-full p-0"),
    block && "w-full",
    magnetic !== undefined && MAGNETIC,
    className,
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest as AnchorProps;
    return (
      <Link
        href={href}
        className={classes}
        ref={magnetic !== undefined ? (magneticRef as React.Ref<HTMLAnchorElement>) : undefined}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as NativeButtonProps;
  return (
    <button
      type={type}
      className={classes}
      ref={magnetic !== undefined ? (magneticRef as React.Ref<HTMLButtonElement>) : undefined}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

/** Wraps a button's text so the liquid fill sweeps behind it, never over it. */
export function ButtonLabel({ children }: { children: ReactNode }) {
  return <span className="relative z-[2] inline-block">{children}</span>;
}
