import { Children, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const SPEEDS = {
  fast: "22s",
  base: "38s",
  slow: "60s",
} as const;

interface MarqueeProps {
  children: ReactNode;
  speed?: keyof typeof SPEEDS;
  reverse?: boolean;
  className?: string;
}

/**
 * Seamless horizontal ticker.
 *
 * The track is rendered twice so the -50% keyframe lands exactly on the loop
 * point. The duplicate is `aria-hidden`, so assistive tech reads the strip
 * once. `min-w-0` matters: the track never shrinks, so without it the
 * marquee's min-content width is the full length of the strip — enough to blow
 * open any flex or grid column it sits in.
 */
export function Marquee({
  children,
  speed = "base",
  reverse = false,
  className,
}: MarqueeProps) {
  const items = Children.toArray(children);

  const track = cn(
    "flex shrink-0 items-center will-change-transform",
    "gap-[clamp(2rem,4vw,4.5rem)] pr-[clamp(2rem,4vw,4.5rem)]",
    "animate-marquee",
    reverse && "[animation-direction:reverse]",
  );

  return (
    <div
      className={cn(
        "marquee-mask relative flex min-w-0 overflow-hidden",
        "[&:hover>div]:[animation-play-state:paused]",
        className,
      )}
      style={{ "--marquee-duration": SPEEDS[speed] } as React.CSSProperties}
    >
      <div className={track}>
        {items}
        {items.map((item, index) => (
          <div key={`clone-${index}`} aria-hidden className="contents">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

/** A single wordmark in the trusted-by / integrations strips. */
export function MarqueeItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-[0.55rem]",
        "font-display text-[1.15rem] font-bold tracking-tight text-ink-700",
        "opacity-55 grayscale",
        "[transition:opacity_280ms_ease,filter_280ms_ease,transform_280ms_var(--ease-out-back)]",
        "hover:scale-[1.06] hover:opacity-100 hover:grayscale-0",
        "[&>svg]:size-[22px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
