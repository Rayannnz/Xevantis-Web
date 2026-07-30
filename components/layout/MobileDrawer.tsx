"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ALL_SOLUTIONS, PRIMARY_NAV } from "@/lib/content";
import { Button, ButtonLabel } from "@/components/ui/Button";
import type { NavLink } from "@/lib/types";

/** The primary nav plus a top-level entry into the solutions index. */
const DRAWER_NAV: NavLink[] = [
  ...PRIMARY_NAV.slice(0, 2),
  { label: "BPO Solutions", href: "/services" },
  ...PRIMARY_NAV.slice(2),
];

/**
 * Capped stagger: the drawer carries the full solution list, and a flat 30ms
 * step would leave the last link arriving over a second late.
 */
const delayFor = (index: number) => `${80 + Math.min(index * 30, 620)}ms`;

interface MobileDrawerProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

/**
 * The drawer sits *below* the header on purpose. It opens underneath a
 * persistent header — its padding-top reserves room for exactly that — so the
 * burger stays visible and clickable to close it. Stacked above the header,
 * the drawer would cover its own close control and trap touch users with no
 * way out but the Escape key.
 */
export function MobileDrawer({ id, open, onClose }: MobileDrawerProps) {
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* The closed state fades and nudges up rather than parking the panel fully
     outside the viewport: Chromium throttles transitions on wholly out-of-view
     elements, so a translateY(-100%) panel never animates back in. `visibility`
     is what makes it non-interactive when closed. */
  return (
    <nav
      id={id}
      aria-label="Mobile"
      className={cn(
        "fixed inset-0 z-[150] grid content-start gap-1 overflow-y-auto bg-paper-050",
        "px-[var(--gutter)] pb-8 pt-[calc(var(--header-height)+2.5rem)]",
        "[transition:opacity_280ms_var(--ease-out-quad),transform_480ms_var(--ease-out-expo),visibility_0s_linear_480ms]",
        open
          ? "visible translate-y-0 opacity-100 [transition-delay:0s]"
          : "invisible -translate-y-5 opacity-0",
      )}
    >
      {DRAWER_NAV.map((link, index) => (
        <DrawerLink
          key={link.label}
          ref={index === 0 ? firstLink : undefined}
          href={link.href}
          open={open}
          delay={delayFor(index)}
          onClose={onClose}
          className="font-display text-2xl font-bold"
        >
          {link.label}
        </DrawerLink>
      ))}

      <p className="mb-2 mt-7 font-display text-xs font-bold uppercase tracking-widest text-ink-400">
        All solutions
      </p>

      {/* The full solution set at reading size, not display size, so the whole
          mega menu stays reachable on touch. */}
      <div className="grid grid-cols-1 gap-x-4 min-[421px]:grid-cols-2">
        {ALL_SOLUTIONS.map((link, index) => (
          <DrawerLink
            key={link.label}
            href={link.href}
            open={open}
            delay={delayFor(DRAWER_NAV.length + index)}
            onClose={onClose}
            className="font-body text-sm font-medium text-ink-500"
            compact
          >
            {link.label}
          </DrawerLink>
        ))}
      </div>

      <Button
        href="/get-started"
        variant="accent"
        size="lg"
        block
        className="mt-6"
        onClick={onClose}
        tabIndex={open ? undefined : -1}
      >
        <ButtonLabel>Build your team</ButtonLabel>
      </Button>
    </nav>
  );
}

function DrawerLink({
  ref,
  href,
  open,
  delay,
  onClose,
  className,
  compact = false,
  children,
}: {
  ref?: React.Ref<HTMLAnchorElement>;
  href: string;
  open: boolean;
  delay: string;
  onClose: () => void;
  className?: string;
  compact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      ref={ref}
      href={href}
      onClick={onClose}
      tabIndex={open ? undefined : -1}
      style={{ transitionDelay: `${delay}, ${delay}` }}
      className={cn(
        "border-b border-ink-900/10",
        compact ? "py-2" : "py-[0.9rem]",
        "[transition:opacity_280ms_ease,transform_480ms_var(--ease-out-expo)]",
        open ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0",
        className,
      )}
    >
      {children}
    </Link>
  );
}
