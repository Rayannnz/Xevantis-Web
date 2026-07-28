"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHeaderState } from "@/hooks/useHeaderState";
import { Badge, Container } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { Brand } from "./Brand";

const NAV_LINK = cn(
  "relative inline-flex h-10 items-center gap-[0.3rem] rounded-pill px-[0.85rem]",
  "text-sm font-medium transition-colors duration-[180ms]",
  "before:absolute before:inset-0 before:-z-10 before:scale-[0.6] before:rounded-[inherit]",
  "before:bg-ink-900 before:opacity-0 before:content-['']",
  "before:[transition:transform_280ms_var(--ease-out-back),opacity_180ms_ease]",
  "hover:text-paper-050 hover:before:scale-100 hover:before:opacity-100",
);

/** The docs shell keeps its nav pinned — there is no hide-on-scroll here. */
export function DocsHeader() {
  const { stuck } = useHeaderState(true);

  return (
    <header className="fixed inset-x-0 top-0 z-[200] pt-4">
      <Container width="wide">
        <div
          className={cn(
            "flex h-16 items-center gap-6 rounded-pill border border-ink-900/[0.06]",
            "pl-[1.4rem] pr-[0.6rem] max-[640px]:pl-4",
            "backdrop-blur-[18px] backdrop-saturate-[160%]",
            "[transition:box-shadow_280ms_ease,background-color_280ms_ease]",
            stuck ? "bg-[rgb(253_251_247/0.92)] shadow-md" : "bg-[rgb(253_251_247/0.72)]",
          )}
        >
          <Brand href="/" priority imageClassName="h-[34px]" />

          <nav className="ml-auto hidden items-center gap-[0.15rem] min-[981px]:flex" aria-label="Primary">
            <Link href="/" className={cn(NAV_LINK, "text-ink-900")}>
              Landing page
            </Link>
            <Link
              href="/design-system"
              aria-current="page"
              className={cn(NAV_LINK, "text-paper-050 before:scale-100 before:opacity-100")}
            >
              Design system
            </Link>
          </nav>

          <div className="flex items-center gap-2 max-[980px]:ml-auto">
            <Badge tone="sun">v1.0</Badge>
            <Button href="/" size="sm" magnetic={0.25}>
              <ButtonLabel>View live site</ButtonLabel>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
