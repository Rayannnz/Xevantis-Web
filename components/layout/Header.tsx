"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState, type FocusEvent } from "react";
import { cn } from "@/lib/utils";
import { PRIMARY_NAV } from "@/lib/content";
import { useHeaderState } from "@/hooks/useHeaderState";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Container } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { ArrowRight, ChevronDown } from "@/components/icons";
import { Brand } from "./Brand";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";

/** Pill nav item: the ink background scales in from 60% behind the label. */
const NAV_LINK = cn(
  "relative inline-flex h-10 cursor-pointer items-center gap-[0.3rem] rounded-pill px-[0.85rem]",
  "text-sm font-medium text-ink-900 transition-colors duration-[180ms]",
  "before:absolute before:inset-0 before:-z-10 before:scale-[0.6] before:rounded-[inherit]",
  "before:bg-ink-900 before:opacity-0 before:content-['']",
  "before:[transition:transform_280ms_var(--ease-out-back),opacity_180ms_ease]",
  "hover:text-paper-050 hover:before:scale-100 hover:before:opacity-100",
  "aria-expanded:text-paper-050 aria-expanded:before:scale-100 aria-expanded:before:opacity-100",
);

/** Bridges the 12px gap between the trigger and the panel. */
const HOVER_CLOSE_DELAY = 140;

export function Header() {
  const { stuck, hidden } = useHeaderState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuId = useId();
  const drawerId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const hoverCapable = useMediaQuery("(hover: hover)");

  const openMenu = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback((delay = 0) => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), delay);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuOpen) {
        closeMenu();
        triggerRef.current?.focus();
      }
      if (drawerOpen) {
        setDrawerOpen(false);
        // Focus was inside a panel that is about to become invisible; without
        // this it lands on <body> and the user loses their place.
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, drawerOpen, closeMenu]);

  /* Closes the panel once focus leaves the trigger/panel pair entirely. */
  const onBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
  };

  const hoverProps = hoverCapable
    ? {
        onPointerEnter: openMenu,
        onPointerLeave: () => closeMenu(HOVER_CLOSE_DELAY),
      }
    : { onPointerEnter: () => {}, onPointerLeave: () => {} };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[200] pt-4",
          "transition-transform duration-[480ms] ease-out-expo",
          // Transform does not remove anything from the tab order, so a
          // keyboard user could otherwise focus controls parked off-screen.
          "focus-within:translate-y-0",
          hidden && !drawerOpen && !menuOpen && "-translate-y-[130%]",
        )}
      >
        {/* The menu anchors to the container, not the nav item — see MegaMenu. */}
        <Container width="wide" className="relative" >
          <div onBlurCapture={onBlurCapture}>
            <div
              className={cn(
                "flex h-16 items-center gap-6 rounded-pill border border-ink-900/[0.06]",
                "pl-[1.4rem] pr-[0.6rem] max-[640px]:pl-4",
                "backdrop-blur-[18px] backdrop-saturate-[160%]",
                "[transition:box-shadow_280ms_ease,background-color_280ms_ease]",
                stuck
                  ? "bg-[rgb(253_251_247/0.92)] shadow-md"
                  : "bg-[rgb(253_251_247/0.72)]",
              )}
            >
              <Brand priority className="max-[640px]:[&_img]:h-[30px]" imageClassName="h-[34px]" />

              <nav className="ml-auto hidden items-center gap-[0.15rem] min-[981px]:flex" aria-label="Primary">
                {PRIMARY_NAV.slice(0, 2).map((link) => (
                  <Link key={link.label} href={link.href} className={NAV_LINK}>
                    {link.label}
                  </Link>
                ))}

                <button
                  ref={triggerRef}
                  type="button"
                  // No `aria-haspopup`: that announces a menu widget, but this
                  // panel is a group of navigation links, not menu commands.
                  // aria-expanded + aria-controls is the correct disclosure.
                  aria-expanded={menuOpen}
                  aria-controls={menuId}
                  onClick={() => (menuOpen ? closeMenu() : openMenu())}
                  {...hoverProps}
                  className={NAV_LINK}
                >
                  BPO Solutions
                  <ChevronDown
                    className={cn(
                      "size-3 transition-transform duration-[280ms] ease-out-expo",
                      menuOpen && "rotate-180",
                    )}
                  />
                </button>

                {PRIMARY_NAV.slice(2).map((link) => (
                  <Link key={link.label} href={link.href} className={NAV_LINK}>
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2 max-[980px]:ml-auto">
                <Button href="/get-started" size="sm" magnetic={0.25}>
                  <ButtonLabel>Get started</ButtonLabel>
                  <ArrowRight />
                </Button>

                <Burger
                  ref={burgerRef}
                  open={drawerOpen}
                  controls={drawerId}
                  onClick={() => setDrawerOpen((open) => !open)}
                />
              </div>
            </div>

            <MegaMenu
              id={menuId}
              open={menuOpen}
              onPointerEnter={hoverProps.onPointerEnter}
              onPointerLeave={hoverProps.onPointerLeave}
            />
          </div>
        </Container>
      </header>

      <MobileDrawer id={drawerId} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

function Burger({
  ref,
  open,
  controls,
  onClick,
}: {
  ref?: React.Ref<HTMLButtonElement>;
  open: boolean;
  controls: string;
  onClick: () => void;
}) {
  const bar = "block h-[2px] w-[18px] rounded-[2px] bg-ink-900 [transition:transform_280ms_var(--ease-out-expo),opacity_180ms_ease]";

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Close menu" : "Open menu"}
      className="hidden size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-ink-900/10 max-[980px]:grid"
    >
      <span className={cn(bar, open && "translate-y-[7px] rotate-45")} />
      <span className={cn(bar, "mt-[5px]", open && "opacity-0")} />
      <span className={cn(bar, "mt-[5px]", open && "-translate-y-[7px] -rotate-45")} />
    </button>
  );
}
