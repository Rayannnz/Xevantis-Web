import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import logo from "@/assets/img/logo-valentisys.png";

/**
 * Primary lockup. Sized by height only — `--logo-height` drives the CSS and
 * `width: auto` keeps the artwork's own aspect ratio, so the mark can never be
 * stretched. `.brand` is `flex: none` for the same reason.
 *
 * `alt` is empty because the link already carries the accessible name; a
 * duplicate would make screen readers announce the brand twice.
 */
export function Brand({
  href = "/",
  height,
  priority,
}: {
  href?: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Link
      className="brand"
      href={href}
      aria-label="Valentisys home"
      style={height ? ({ "--logo-height": `${height}px` } as CSSProperties) : undefined}
    >
      <Image className="brand__logo" src={logo} alt="" priority={priority} sizes="200px" />
    </Link>
  );
}
