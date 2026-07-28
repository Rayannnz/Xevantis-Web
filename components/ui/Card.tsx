import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";

export type CardSurface = "default" | "sticker" | "flat" | "glass" | "ink";

/** Accent tiles and washes both read from the 300-level step of the ramp. */
const ACCENT_BG: Record<Accent, string> = {
  sun: "bg-sun-300",
  mint: "bg-mint-300",
  lilac: "bg-lilac-300",
  blush: "bg-blush-300",
  sky: "bg-sky-300",
};

const ACCENT_WASH: Record<Accent, string> = {
  sun: "before:bg-sun-300",
  mint: "before:bg-mint-300",
  lilac: "before:bg-lilac-300",
  blush: "before:bg-blush-300",
  sky: "before:bg-sky-300",
};

const SURFACES: Record<CardSurface, string> = {
  default: "border border-ink-900/10 bg-paper-000",
  sticker: cn(
    "border-2 border-ink-900 bg-paper-000 shadow-sticker",
    "[transition:transform_280ms_var(--ease-out-quad),box-shadow_280ms_var(--ease-out-quad)]",
  ),
  flat: "border-0 bg-ink-050",
  glass: "border border-white/75 bg-white/60 shadow-md backdrop-blur-[18px] backdrop-saturate-150",
  ink: "border border-white/10 bg-ink-gradient text-paper-050",
};

const LIFT: Record<"default" | "sticker", string> = {
  default: "hover:-translate-y-[6px] hover:border-transparent hover:shadow-lg",
  sticker: "hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-sticker-lg",
};

interface CardProps {
  as?: ElementType;
  surface?: CardSurface;
  accent?: Accent;
  /** Adds the hover lift. */
  lift?: boolean;
  /** Adds the accent flood that grows from the top edge on hover. */
  wash?: boolean;
  className?: string;
  children: ReactNode;
}

export function Card({
  as: Tag = "div",
  surface = "default",
  accent,
  lift = false,
  wash = false,
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "group relative isolate flex flex-col gap-4 overflow-hidden rounded-xl p-[var(--card-padding)]",
        "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo),border-color_280ms_ease]",
        SURFACES[surface],
        lift && LIFT[surface === "sticker" ? "sticker" : "default"],
        wash &&
          cn(
            // -z-10 keeps the flood above the card's own background but under
            // its content, which the card's `isolate` scopes to this card.
            "before:absolute before:inset-0 before:-z-10 before:-translate-y-full before:opacity-0 before:content-['']",
            "before:[transition:transform_480ms_var(--ease-out-expo),opacity_480ms_var(--ease-out-expo)]",
            "hover:before:translate-y-0 hover:before:opacity-35",
            ACCENT_WASH[accent ?? "sun"],
          ),
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardIcon({
  accent = "sun",
  className,
  children,
}: {
  accent?: Accent;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid size-[58px] place-items-center rounded-lg text-ink-900",
        "transition-transform duration-[480ms] ease-out-back",
        "group-hover:-rotate-[8deg] group-hover:scale-[1.08]",
        "[&>svg]:size-[26px]",
        ACCENT_BG[accent],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  as: Tag = "h3",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("font-display text-xl font-bold leading-snug tracking-tight", className)}>
      {children}
    </Tag>
  );
}

export function CardBody({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <p className={cn("text-base text-ink-500", className)}>{children}</p>;
}

export function CardFoot({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("mt-auto pt-2", className)}>{children}</div>;
}
