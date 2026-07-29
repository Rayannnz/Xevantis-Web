import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ServiceContent } from "@/lib/services/types";
import { ACCENT_ORB, ACCENT_TILE } from "@/lib/accent-classes";
import { Container, PillGlass, PulseDot } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { MarkUnderline } from "@/components/motion/MarkUnderline";
import { ArrowRight, Check, ChevronDown } from "@/components/icons";
import { MediaFrame } from "./MediaFrame";
import { ServiceFigure } from "./ServiceFigure";

/**
 * Wraps `highlight` in the animated underline wherever it appears in `body`.
 *
 * Matching on the raw substring keeps the data files free of markup. A
 * highlight that no longer appears in the copy degrades to plain text rather
 * than throwing, which is the right failure for a content typo.
 */
function withHighlight(body: string, highlight?: string): ReactNode {
  if (!highlight) return body;
  const at = body.indexOf(highlight);
  if (at === -1) return body;

  return (
    <>
      {body.slice(0, at)}
      <MarkUnderline>{highlight}</MarkUnderline>
      {body.slice(at + highlight.length)}
    </>
  );
}

export function ServiceHero({ service }: { service: ServiceContent }) {
  const { hero, accent } = service;

  return (
    <section className="relative overflow-clip pb-[clamp(3rem,2rem+4vw,6rem)] pt-[calc(var(--header-height)+clamp(2rem,1.5rem+3vw,4.5rem))]">
      <HeroBackdrop accent={accent} />

      <Container width="wide">
        <Breadcrumb name={service.name} />

        <div className="mt-8 grid items-center gap-[clamp(2.5rem,1rem+5vw,5rem)] min-[941px]:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
          <div className="grid max-w-[660px] justify-items-start gap-6">
            <Reveal variant="fade" as="span">
              <PillGlass>
                <PulseDot />
                {hero.trust}
              </PillGlass>
            </Reveal>

            <div className="grid gap-5">
              <Reveal as="span" delay={60}>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-pill px-[0.9rem] py-[0.35rem]",
                    "font-display text-2xs font-bold uppercase tracking-widest text-ink-900",
                    ACCENT_TILE[accent],
                  )}
                >
                  {service.eyebrow}
                </span>
              </Reveal>

              <SplitWords
                as="h1"
                text={hero.title}
                stagger={50}
                className="font-display text-hero font-extrabold tracking-tighter"
              />
            </div>

            <Reveal as="p" delay={220} className="max-w-[52ch] text-lg text-ink-500">
              {withHighlight(hero.body, hero.highlight)}
            </Reveal>

            <Reveal delay={320} className="flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} size="lg" magnetic={0.3}>
                <ButtonLabel>{hero.primaryCta.label}</ButtonLabel>
                <ArrowRight />
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                <ButtonLabel>{hero.secondaryCta.label}</ButtonLabel>
                <ChevronDown className="size-3" />
              </Button>
            </Reveal>

            <Reveal
              delay={420}
              as="ul"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500"
            >
              {["No lock-in after month three", "Named team, not a pool", "Live in 14 days"].map(
                (point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Check className={cn("size-4 shrink-0", "text-signal-success")} />
                    {point}
                  </li>
                ),
              )}
            </Reveal>
          </div>

          <Reveal variant="scale" delay={240} className="relative">
            <Tilt max={5}>
              <MediaFrame accent={accent} zoom={false}>
                <ServiceFigure variant={hero.figure} accent={accent} />
              </MediaFrame>
            </Tilt>

            {/* Floating stat cards. Hidden on the narrowest screens, where they
                would sit on top of the artwork instead of beside it. */}
            <FloatingChip
              chip={hero.chips[0]}
              className="-left-6 top-10 max-[1180px]:-left-2 max-[560px]:hidden"
            />
            <FloatingChip
              chip={hero.chips[1]}
              className="-right-5 top-1/2 -translate-y-1/2 [animation-delay:-3s] max-[1180px]:-right-1 max-[560px]:hidden"
            />
            <FloatingChip
              chip={hero.chips[2]}
              className="-bottom-6 left-10 [animation-delay:-6s] max-[560px]:hidden"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Breadcrumb({ name }: { name: string }) {
  const crumb = "text-sm text-ink-400 transition-colors duration-[180ms] hover:text-ink-900";

  return (
    <Reveal variant="fade" as="div">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className={crumb}>
              Home
            </Link>
          </li>
          <li aria-hidden className="text-ink-300">
            /
          </li>
          <li>
            <Link href="/services" className={crumb}>
              BPO Solutions
            </Link>
          </li>
          <li aria-hidden className="text-ink-300">
            /
          </li>
          <li>
            <span aria-current="page" className="text-sm font-medium text-ink-900">
              {name}
            </span>
          </li>
        </ol>
      </nav>
    </Reveal>
  );
}

function FloatingChip({
  chip,
  className,
}: {
  chip: { label: string; value: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-[3] animate-float rounded-lg border border-ink-900/10 bg-paper-000/90 px-4 py-3",
        "shadow-lg backdrop-blur-[14px] backdrop-saturate-150",
        className,
      )}
    >
      <p className="font-display text-xl font-extrabold leading-none tracking-tight">
        {chip.value}
      </p>
      <p className="mt-1 text-xs whitespace-nowrap text-ink-500">{chip.label}</p>
    </div>
  );
}

/** Drifting color orbs. Purely decorative, so the whole layer is inert. */
function HeroBackdrop({ accent }: { accent: ServiceContent["accent"] }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-[-5%] top-[-10%] -z-10 h-[130%] select-none"
    >
      <div
        className={cn(
          "absolute -left-32 -top-24 size-[32rem] animate-blob rounded-blob opacity-70 blur-[46px]",
          ACCENT_ORB[accent],
        )}
      />
      <div className="absolute -right-40 top-[20rem] size-[26rem] animate-blob rounded-blob bg-lilac-100 opacity-80 blur-[52px] [animation-delay:-6s]" />
      <div className="absolute -bottom-32 left-[34%] size-[22rem] animate-blob rounded-blob bg-sun-100 opacity-70 blur-[56px] [animation-delay:-11s]" />
    </div>
  );
}
