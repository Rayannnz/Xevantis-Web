import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import { ACCENT_TINT } from "@/lib/accent-classes";

/**
 * The rounded, tinted plate every piece of section artwork sits on.
 *
 * Owning the frame separately from the artwork is what keeps the page
 * consistent: one radius, one border, one hover zoom, applied everywhere.
 * `group` is declared here so the inner scale responds to a hover anywhere on
 * the plate rather than only over the drawing itself.
 */
export function MediaFrame({
  accent,
  tone = "tint",
  zoom = true,
  className,
  children,
}: {
  accent: Accent;
  /** `ink` inverts the plate for use inside dark sections. */
  tone?: "tint" | "paper" | "ink";
  zoom?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-2xl",
        "[transition:box-shadow_480ms_var(--ease-out-expo),transform_480ms_var(--ease-out-expo)]",
        tone === "tint" && cn("border border-ink-900/10 shadow-md", ACCENT_TINT[accent]),
        tone === "paper" && "border border-ink-900/10 bg-paper-000 shadow-md",
        tone === "ink" && "border border-white/10 bg-white/[0.04] backdrop-blur-[2px]",
        "hover:shadow-lg",
        className,
      )}
    >
      {/* Corner light. Sits above the plate, below the artwork. */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 -z-10 size-64 rounded-full blur-[60px]",
          tone === "ink" ? "bg-white/10" : "bg-white/70",
        )}
      />

      <div
        className={cn(
          "p-[clamp(1.25rem,0.75rem+2vw,2.5rem)]",
          zoom &&
            "transition-transform duration-[720ms] ease-out-expo group-hover:scale-[1.035] motion-reduce:group-hover:scale-100",
        )}
      >
        {children}
      </div>
    </div>
  );
}
