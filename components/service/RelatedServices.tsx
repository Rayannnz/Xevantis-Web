import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServiceSummary } from "@/lib/services/types";
import { ACCENT_GLOW, ACCENT_TILE } from "@/lib/accent-classes";
import {
  Container,
  Eyebrow,
  headingClass,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export function RelatedServices({
  items,
  eyebrow,
  title,
}: {
  items: readonly ServiceSummary[];
  eyebrow: string;
  title: string;
}) {
  if (items.length === 0) return null;

  return (
    <Section id="related" tint="paper">
      <Container width="wide">
        <SectionHead align="split" className="max-w-none">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
            <Reveal as="span" className="justify-self-start">
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <SplitWords text={title} stagger={45} className={headingClass} />
          </div>

          <Reveal delay={150} className="flex min-[769px]:justify-end">
            <TextLink href="/services">
              Browse every solution
              <ArrowUpRight />
            </TextLink>
          </Reveal>
        </SectionHead>

        <ul className="grid gap-4 min-[641px]:grid-cols-2 min-[1121px]:grid-cols-3">
          {items.map((item, index) => (
            <Reveal as="li" key={item.slug} delay={index * 90} className="flex">
              <Link
                href={`/services/${item.slug}`}
                className={cn(
                  "group flex w-full flex-col gap-4 rounded-xl border border-ink-900/10 bg-paper-000",
                  "p-[var(--card-padding)]",
                  "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo),border-color_280ms_ease]",
                  "hover:-translate-y-[6px] hover:border-transparent",
                  ACCENT_GLOW[item.accent],
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "inline-flex w-fit items-center rounded-pill px-[0.7rem] py-[0.25rem]",
                    "font-display text-2xs font-bold uppercase tracking-widest text-ink-900",
                    ACCENT_TILE[item.accent],
                  )}
                >
                  {item.eyebrow}
                </span>

                <h3 className="font-display text-xl font-bold leading-snug tracking-tight">
                  {item.name}
                </h3>
                <p className="text-base text-ink-500">{item.summary}</p>

                <span className="mt-auto inline-flex items-center gap-2 pt-2 font-display text-sm font-semibold">
                  Explore service
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-[280ms] ease-out-expo group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
