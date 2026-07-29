import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { COMPLIANCE_BADGES, FOOTER_COLUMNS } from "@/lib/content";
import { Badge, Container, TextLink } from "@/components/ui/primitives";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { Instagram, LinkedIn, X, YouTube } from "@/components/icons";
import { Brand } from "./Brand";

const SOCIALS: { label: string; icon: ReactNode }[] = [
  { label: "LinkedIn", icon: <LinkedIn /> },
  { label: "X", icon: <X /> },
  { label: "YouTube", icon: <YouTube /> },
  { label: "Instagram", icon: <Instagram /> },
];

export function Footer() {
  return (
    <footer className="bg-paper-200 pb-8 pt-[clamp(3rem,2rem+4vw,5rem)]">
      <Container width="wide">
        <div
          className={cn(
            "grid grid-cols-1 gap-8",
            "min-[561px]:grid-cols-2",
            "min-[1025px]:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))]",
          )}
        >
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
            <Brand height={44} imageClassName="h-[44px]" className="justify-self-start" />
            <p className="max-w-[46ch] text-sm text-ink-500">
              The back office your small business never had room to hire. Serving
              clinics, firms and local offices in all 50 states.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  // Placeholder — swap for the real profile URLs (and add
                  // target/rel) when they exist.
                  href="/"
                  aria-label={social.label}
                  className={cn(
                    "grid size-[38px] place-items-center rounded-full bg-ink-900 text-paper-050",
                    "[transition:transform_280ms_var(--ease-out-back),background-color_280ms_ease]",
                    "hover:-translate-y-1 hover:-rotate-[8deg] hover:bg-sun-400 hover:text-ink-900",
                    "[&>svg]:size-[17px]",
                  )}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-ink-400">
                {column.title}
              </h3>
              <ul className="grid gap-[0.65rem] text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-ink-500 [transition:color_180ms_ease,transform_180ms_ease] hover:translate-x-[3px] hover:text-ink-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-ink-400">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-ink-500">
              One operations letter a month. No fluff.
            </p>
            <SubscribeForm
              successMessage="You're on the list. First letter lands next Tuesday."
              inputId="footer-email"
              label="Email address"
              placeholder="Your email"
              cta="Sign up"
              size="sm"
              fieldClassName="max-w-none"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900/10 pt-6 text-sm text-ink-400">
          <span>© {new Date().getFullYear()} Xevantis. All rights reserved.</span>

          <div className="flex flex-wrap items-center gap-3">
            {COMPLIANCE_BADGES.map((badge) => (
              <Badge key={badge} tone="outline">
                {badge}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <TextLink href="/">Privacy</TextLink>
            <TextLink href="/">Terms</TextLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
