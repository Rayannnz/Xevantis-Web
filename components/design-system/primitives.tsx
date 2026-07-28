import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

/* ==========================================================================
   DOCS BLOCKS
   One-off presentational pieces for the design-system page only.
   ========================================================================== */

export function Block({
  id,
  title,
  intro,
  first = false,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  first?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[calc(var(--header-height)+2rem)] py-[clamp(2.5rem,2rem+2vw,4rem)]",
        first ? "border-t-0 pt-0" : "border-t border-ink-900/10",
      )}
    >
      <div className="mb-8 grid gap-2">
        <Reveal as="h2" className="font-display text-4xl font-bold leading-snug tracking-tighter">
          {title}
        </Reveal>
        {intro ? (
          <Reveal as="p" delay={80} className="text-lg text-ink-500">
            {intro}
          </Reveal>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function Demo({
  variant,
  dark = false,
  className,
  children,
}: {
  variant?: "grid" | "stack";
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "gap-4 rounded-lg border border-dashed p-6",
        variant === "grid"
          ? "grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] items-stretch"
          : variant === "stack"
            ? "flex flex-col items-stretch"
            : "flex flex-wrap items-center",
        dark ? "border-white/[0.18] bg-ink-900" : "border-ink-900/10 bg-paper-000",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Swatches({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(122px,1fr))] gap-4">
      {children}
    </div>
  );
}

export function Ramp({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="mb-6 grid grid-cols-6 gap-[0.35rem]">
      <span className="col-span-full mb-[0.1rem] font-display text-sm font-bold">
        {name}
      </span>
      {children}
    </div>
  );
}

export function TypeRow({ meta, children }: { meta: ReactNode; children: ReactNode }) {
  return (
    <div className="grid items-baseline gap-[0.35rem] border-b border-ink-900/10 py-4 min-[641px]:grid-cols-[148px_minmax(0,1fr)] min-[641px]:gap-6">
      <div className="font-mono text-xs text-ink-400">{meta}</div>
      <div>{children}</div>
    </div>
  );
}

export function TableScroll({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-ink-900/10 bg-paper-000">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  );
}

/** Spec-table cells. `th` gets the tracked uppercase treatment. */
export const specTh =
  "border-b border-ink-900/10 px-4 py-[0.85rem] text-left align-middle font-display text-xs uppercase tracking-widest text-ink-400";
export const specTd =
  "border-b border-ink-900/10 px-4 py-[0.85rem] text-left align-middle";

export function Token({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-xs bg-ink-050 px-[0.4rem] py-[0.15rem] font-mono text-[0.92em]">
      {children}
    </code>
  );
}

export function DoDont({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 min-[641px]:grid-cols-2">{children}</div>
  );
}

export function DoDontItem({
  tone,
  children,
}: {
  tone: "do" | "dont";
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border-l-4 p-5",
        tone === "do"
          ? "border-mint-400 bg-mint-050"
          : "border-blush-400 bg-blush-050",
      )}
    >
      <strong className="font-display">{tone === "do" ? "Do" : "Don't"}</strong>
      {children}
    </div>
  );
}

export function Rules({ items }: { items: string[] }) {
  return (
    <ul className="mt-[0.6rem] grid gap-2 text-sm text-ink-500">
      {items.map((item) => (
        <li key={item}>· {item}</li>
      ))}
    </ul>
  );
}

export function MotionCard({
  label,
  caption,
  children,
  stageClassName,
}: {
  label: string;
  caption: ReactNode;
  children?: ReactNode;
  stageClassName?: string;
}) {
  return (
    <div className="grid gap-3 rounded-lg border border-ink-900/10 bg-paper-000 p-5">
      <div
        className={cn(
          "grid h-[92px] place-items-center overflow-hidden rounded-md bg-ink-050",
          stageClassName,
        )}
      >
        {children}
      </div>
      <strong className="font-display">{label}</strong>
      <span className="text-xs text-ink-400">{caption}</span>
    </div>
  );
}

export function Elev({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid h-[110px] place-items-center rounded-lg bg-paper-000 font-mono text-xs",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-md bg-ink-900 p-5 font-mono text-sm leading-[1.7] text-ink-100 [tab-size:2]">
      {children}
    </pre>
  );
}

/** Syntax tokens inside a <Code> sample. */
export const tok = {
  comment: "text-ink-400",
  prop: "text-sun-300",
  value: "text-mint-300",
} as const;
