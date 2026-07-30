"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SOLUTION_GROUPS } from "@/lib/content";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { ArrowRight, LifeRing, ListLines, Person, Squares } from "@/components/icons";

/** One icon per column heading — an icon per row would be far too heavy at
 *  sixteen links. */
const COLUMN_ICONS: { tile: string; icon: ReactNode }[] = [
  { tile: "bg-sky-200", icon: <ListLines /> },
  { tile: "bg-blush-200", icon: <LifeRing /> },
  { tile: "bg-mint-200", icon: <Person /> },
  { tile: "bg-lilac-200", icon: <Squares /> },
];

interface MegaMenuProps {
  open: boolean;
  id: string;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}

/**
 * Anchored to the centered header container rather than to its trigger.
 *
 * A 16-link panel centered on the nav item would hang off the right edge of the
 * viewport, and it cannot use `position: fixed` either — the backdrop filter on
 * the header bar makes that element the containing block for fixed
 * descendants. Anchoring to the container is the one option that always fits.
 */
export function MegaMenu({ open, id, onPointerEnter, onPointerLeave }: MegaMenuProps) {
  return (
    <div
      id={id}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={cn(
        "absolute left-1/2 top-[calc(100%+12px)] w-[min(1080px,calc(100%-var(--gutter)*2))]",
        "rounded-xl border border-ink-900/10 bg-paper-050 px-6 pb-5 pt-6 shadow-xl",
        "[transition:opacity_280ms_var(--ease-out-quad),transform_280ms_var(--ease-out-expo),visibility_0s_linear_280ms]",
        open
          ? "visible opacity-100 [transform:translate(-50%,0)_scale(1)] [transition-delay:0s]"
          : "invisible opacity-0 [transform:translate(-50%,-10px)_scale(0.98)]",
      )}
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 min-[1121px]:grid-cols-4">
        {SOLUTION_GROUPS.map((group, index) => (
          <div key={group.heading}>
            <p className="mb-[0.6rem] flex items-center gap-2 border-b border-ink-900/10 pb-[0.6rem] font-display text-2xs font-bold uppercase tracking-widest text-ink-400">
              <span
                aria-hidden
                className={cn(
                  "grid size-[22px] shrink-0 place-items-center rounded-xs text-ink-900 [&>svg]:size-[13px]",
                  COLUMN_ICONS[index].tile,
                )}
              >
                {COLUMN_ICONS[index].icon}
              </span>
              {group.heading}
            </p>

            <div className="grid gap-px">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "-mx-[0.6rem] flex items-center gap-[0.4rem] rounded-sm px-[0.6rem] py-[0.45rem]",
                    "text-sm font-medium text-ink-900",
                    "[transition:background-color_180ms_ease,transform_180ms_ease]",
                    "hover:translate-x-[3px] hover:bg-ink-050",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900/10 pt-4">
        <p className="max-w-[46ch] text-sm text-ink-500">
          Not sure which line you need? Tell us the volumes and the outcome — we&rsquo;ll
          map it to a staffing model.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-[0.4rem] font-display text-sm font-semibold text-ink-900 transition-transform duration-[180ms] hover:translate-x-[2px]"
          >
            All solutions
            <ArrowRight aria-hidden className="size-4" />
          </Link>
          <Button href="/get-started" size="sm">
            <ButtonLabel>Talk to an expert</ButtonLabel>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
