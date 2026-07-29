"use client";

import Link from "next/link";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useToast } from "@/components/ui/Toast";

export const DOC_SECTIONS = [
  {
    group: "Foundations",
    links: [
      { id: "logo", label: "Logo" },
      { id: "color", label: "Color" },
      { id: "typography", label: "Typography" },
      { id: "space", label: "Space & layout" },
      { id: "radius", label: "Radius & elevation" },
    ],
  },
  {
    group: "Components",
    links: [
      { id: "buttons", label: "Buttons & links" },
      { id: "badges", label: "Badges & chips" },
      { id: "cards", label: "Cards" },
      { id: "forms", label: "Forms" },
      { id: "patterns", label: "Patterns" },
    ],
  },
  {
    group: "Motion",
    links: [
      { id: "motion-tokens", label: "Timing & easing" },
      { id: "motion-library", label: "Animation library" },
      { id: "motion-rules", label: "Rules of use" },
    ],
  },
  {
    group: "Practice",
    links: [
      { id: "voice", label: "Voice & imagery" },
      { id: "a11y", label: "Accessibility" },
      { id: "usage", label: "Getting started" },
    ],
  },
] as const;

export function DocsAside() {
  const ids = useMemo(
    () => DOC_SECTIONS.flatMap((section) => section.links.map((link) => link.id)),
    [],
  );
  const active = useScrollSpy(ids);

  return (
    <nav
      aria-label="Design system sections"
      className="grid gap-[0.1rem] min-[901px]:sticky min-[901px]:top-[calc(var(--header-height)+2rem)]"
    >
      {DOC_SECTIONS.map((section) => (
        <div key={section.group} className="contents">
          <strong className="block px-[0.85rem] pb-[0.35rem] pt-4 font-display text-2xs uppercase tracking-widest text-ink-400">
            {section.group}
          </strong>
          {section.links.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              className={cn(
                "block rounded-pill px-[0.85rem] py-2 text-sm",
                "[transition:background-color_180ms_ease,color_180ms_ease,transform_180ms_ease]",
                active === link.id
                  ? "bg-ink-900 text-paper-050"
                  : "text-ink-500 hover:translate-x-[3px] hover:bg-ink-050 hover:text-ink-900",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}

/** Color chip that copies its token to the clipboard. */
export function Swatch({
  value,
  name,
  hex,
  background,
}: {
  value?: string;
  name: string;
  hex?: string;
  background: string;
}) {
  const toast = useToast();

  const copy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      toast(`Copied ${value}`);
    } catch {
      toast("Copy blocked by the browser — select the value manually.");
    }
  };

  return (
    <div className="group grid gap-2">
      <button
        type="button"
        onClick={copy}
        disabled={!value}
        aria-label={value ? `Copy ${value}` : name}
        style={{ background }}
        className={cn(
          "h-[76px] w-full rounded-md border border-ink-900/10",
          "transition-transform duration-[280ms] ease-out-back",
          value && "cursor-pointer group-hover:-translate-y-1 group-hover:scale-[1.02]",
        )}
      />
      <div className="flex justify-between gap-2 font-mono text-xs text-ink-500">
        <span>{name}</span>
        {hex ? <span>{hex}</span> : null}
      </div>
    </div>
  );
}

/** One step in a color ramp. Click to copy the token. */
export function RampStep({
  token,
  label,
  className,
  style,
}: {
  token: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const toast = useToast();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(token);
      toast(`Copied ${token}`);
    } catch {
      toast("Copy blocked by the browser — select the value manually.");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${token}`}
      style={style}
      className={cn(
        "grid h-[62px] cursor-pointer items-end rounded-sm p-[0.35rem] text-left font-mono text-[10px]",
        "transition-transform duration-[280ms] ease-out-back hover:-translate-y-[5px]",
        className,
      )}
    >
      {label}
    </button>
  );
}
