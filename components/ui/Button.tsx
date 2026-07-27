import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "sticker";
type Size = "sm" | "md" | "lg";

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  magnetic?: number;
  block?: boolean;
  className?: string;
};

function classes({ variant = "primary", size = "md", block, className }: Common) {
  return [
    "btn",
    `btn--${variant}`,
    size !== "md" && `btn--${size}`,
    block && "btn--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * The label must stay wrapped in `.btn__label` — the liquid fill on hover is a
 * ::before pseudo-element that sits behind it. Bare text children would be
 * painted over by the fill.
 */
function Inner({ children, icon }: { children: ReactNode; icon?: IconName }) {
  return (
    <>
      <span className="btn__label">{children}</span>
      {icon && <Icon name={icon} />}
    </>
  );
}

export function Button({
  href,
  ...props
}: Common & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const { children, icon, magnetic, variant, size, block, className, ...rest } = props;
  return (
    <Link
      href={href}
      className={classes({ children, variant, size, block, className })}
      {...(magnetic ? { "data-magnetic": String(magnetic) } : {})}
      {...rest}
    >
      <Inner icon={icon}>{children}</Inner>
    </Link>
  );
}

export function ButtonEl({
  type = "button",
  ...props
}: Common & Omit<ComponentProps<"button">, "className" | "children">) {
  const { children, icon, magnetic, variant, size, block, className, ...rest } = props;
  return (
    <button
      type={type}
      className={classes({ children, variant, size, block, className })}
      {...(magnetic ? { "data-magnetic": String(magnetic) } : {})}
      {...rest}
    >
      <Inner icon={icon}>{children}</Inner>
    </button>
  );
}

/** Inline text link with the sliding underline. */
export function TextLink({
  href,
  children,
  icon = "arrowUpRight",
}: {
  href: string;
  children: ReactNode;
  icon?: IconName | null;
}) {
  return (
    <Link className="link" href={href}>
      {children}
      {icon && <Icon name={icon} />}
    </Link>
  );
}
