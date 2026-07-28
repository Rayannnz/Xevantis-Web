"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useSpotlight, useTilt } from "@/hooks/usePointerEffects";

interface TiltProps {
  children: ReactNode;
  /** Maximum rotation in degrees at the surface's corners. */
  max?: number;
  className?: string;
}

/**
 * 3D pointer response. Disabled on touch and under reduced motion, where the
 * custom properties simply stay at their 0deg defaults.
 */
export function Tilt({ children, max = 8, className }: TiltProps) {
  const ref = useTilt<HTMLDivElement>(max);

  return (
    <div
      ref={ref}
      className={cn(
        "[transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
        "[transform-style:preserve-3d]",
        "transition-transform duration-[280ms] ease-out-expo",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Pointer-following glow, for surfaces that have no accent wash of their own. */
export function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "relative isolate",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:content-['']",
        "before:[background:radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,50%),rgb(255_255_255/0.14),transparent_70%)]",
        "before:transition-opacity before:duration-[280ms] before:ease-out-quad",
        "hover:before:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
