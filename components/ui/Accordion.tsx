"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/lib/types";

interface AccordionProps {
  items: ProcessStep[];
  /** Index open on first paint. */
  defaultOpen?: number;
  /** Allow several panels open at once. */
  multi?: boolean;
  className?: string;
}

/**
 * Single-open accordion with roving arrow-key navigation between headers.
 *
 * The panel animates `grid-template-rows: 0fr → 1fr`, so it works at any
 * content height with no JS measurement.
 */
export function Accordion({
  items,
  defaultOpen = 0,
  multi = false,
  className,
}: AccordionProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>(defaultOpen >= 0 ? [defaultOpen] : []);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpen((current) => {
      const isOpen = current.includes(index);
      if (multi) {
        return isOpen ? current.filter((i) => i !== index) : [...current, index];
      }
      return isOpen ? [] : [index];
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % items.length
        : event.key === "ArrowUp"
          ? (index - 1 + items.length) % items.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;

    if (next === null) return;
    event.preventDefault();
    triggers.current[next]?.focus();
  };

  return (
    <div className={cn("grid gap-3", className)}>
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        const panelId = `${baseId}-panel-${index}`;
        const triggerId = `${baseId}-trigger-${index}`;

        return (
          <div
            key={item.title}
            className={cn(
              "overflow-hidden rounded-lg bg-paper-000",
              "[transition:box-shadow_280ms_ease,border-color_280ms_ease,background-color_280ms_ease]",
              isOpen ? "border border-ink-900 shadow-md" : "border border-ink-900/10",
            )}
          >
            <button
              type="button"
              id={triggerId}
              ref={(node) => {
                triggers.current[index] = node;
              }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className="flex w-full cursor-pointer items-center gap-4 px-[1.35rem] py-[1.15rem] text-left font-display text-lg font-semibold"
            >
              <span
                className={cn(
                  "grid size-[30px] shrink-0 place-items-center rounded-full text-sm font-bold",
                  "transition-colors duration-[280ms]",
                  isOpen ? "bg-sun-300" : "bg-ink-050",
                )}
              >
                {index + 1}
              </span>

              <span>{item.title}</span>

              {/* Plus that rotates into a cross. */}
              <span
                aria-hidden
                className={cn(
                  "relative ml-auto grid size-[30px] shrink-0 place-items-center rounded-full",
                  "[transition:transform_280ms_var(--ease-out-back),background-color_280ms_ease]",
                  "before:absolute before:h-[2px] before:w-3 before:rounded-[2px] before:bg-current before:content-['']",
                  "after:absolute after:h-3 after:w-[2px] after:rounded-[2px] after:bg-current after:content-['']",
                  "after:transition-transform after:duration-[280ms] after:ease-out-expo",
                  isOpen
                    ? "rotate-[135deg] border border-transparent bg-ink-900 text-paper-050 after:scale-y-0"
                    : "border border-ink-900/10",
                )}
              />
            </button>

            {/* `invisible` when collapsed so the copy leaves the accessibility
                tree and the tab order together — a 0fr grid row still exposes
                its content. The delayed visibility keeps it on screen for the
                length of the collapse. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                "grid",
                "[transition:grid-template-rows_480ms_var(--ease-out-expo),visibility_0s_linear_480ms]",
                isOpen
                  ? "visible grid-rows-[1fr] [transition-delay:0s]"
                  : "invisible grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="max-w-[62ch] pb-[1.35rem] pl-[4.1rem] pr-[1.35rem] text-ink-500">
                  {item.detail}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
