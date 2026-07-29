import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ASPECT = 900 / 240;

/**
 * The full lockup (V + orbit + wordmark). Sized by height so the aspect ratio
 * is always the artwork's own, and never allowed to flex-shrink — compressing
 * the lockup distorts it.
 *
 * `alt` is empty because the link already carries the accessible name.
 */
export function Brand({
  height = 34,
  // The logo goes home from wherever it is rendered, never to an in-page anchor.
  href = "/",
  priority = false,
  className,
  imageClassName,
}: {
  height?: number;
  href?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Xevantis home"
      className={cn("group inline-flex shrink-0 items-center gap-[0.6rem]", className)}
    >
      <Image
        src="/img/logo-valentisys.png"
        alt=""
        width={Math.round(height * ASPECT)}
        height={height}
        priority={priority}
        className={cn(
          "block w-auto shrink-0",
          "transition-transform duration-[480ms] ease-out-back group-hover:scale-[1.04]",
          imageClassName,
        )}
      />
    </Link>
  );
}
