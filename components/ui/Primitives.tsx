import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/* Small structural helpers shared by both pages. Every one of these is a
   server component — behaviour comes from the data-* engines, not from React
   state, so none of this ships JavaScript. */

export function Marquee({
  children,
  reverse,
  speed,
  className,
  style,
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: "fast" | "slow";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={["marquee", reverse && "marquee--reverse", speed && `marquee--${speed}`, className]
        .filter(Boolean)
        .join(" ")}
      data-marquee=""
      style={style}
    >
      <div className="marquee__track">{children}</div>
    </div>
  );
}

export function LogoItem({ name, icon }: { name: string; icon?: IconName }) {
  return (
    <span className="logo-strip__item">
      {icon && <Icon name={icon} />}
      {name}
    </span>
  );
}

export function Eyebrow({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <span className={`eyebrow${center ? " eyebrow--center" : ""}`} data-reveal="">
      {children}
    </span>
  );
}

/** Hand-drawn underline that draws itself when the phrase scrolls into view. */
export function Underline({ children }: { children: ReactNode }) {
  return (
    <span className="mark mark--underline">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 8C46 3 108 2 196 6" />
      </svg>
    </span>
  );
}

export function Wave({ fill = "var(--sun-100)" }: { fill?: string }) {
  return (
    <div className="wave" aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d="M0 40c180 46 340 46 540 12s420-54 640-12 260 40 260 40V0H0Z" fill={fill} />
      </svg>
    </div>
  );
}

export function Badge({
  children,
  tone,
  outline,
}: {
  children: ReactNode;
  tone?: "sun" | "mint" | "lilac" | "blush" | "sky" | "ink";
  outline?: boolean;
}) {
  return (
    <span className={["badge", tone && `badge--${tone}`, outline && "badge--outline"].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}

export function Counter({
  value,
  suffix,
  prefix,
  decimals,
  duration,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <span
      className={["counter", className].filter(Boolean).join(" ")}
      data-count={value}
      {...(suffix ? { "data-suffix": suffix } : {})}
      {...(prefix ? { "data-prefix": prefix } : {})}
      {...(decimals ? { "data-decimals": String(decimals) } : {})}
      {...(duration ? { "data-duration": String(duration) } : {})}
    >
      {/* SSR fallback: renders the real number so the page is correct with
          JS off, then the engine animates up to it on first view. */}
      {prefix}
      {value.toFixed(decimals ?? 0)}
      {suffix}
    </span>
  );
}

export function Meter({ value, delay }: { value: number; delay?: number }) {
  return (
    <div className="meter">
      <div
        className="meter__fill"
        style={{ "--value": value, ...(delay ? { "--delay": `${delay}ms` } : {}) } as CSSProperties}
      />
    </div>
  );
}
