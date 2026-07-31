import Link from "next/link";
import { SERVICE_SUMMARY_GROUPS } from "@/lib/services";
import type { Accent } from "@/lib/types";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { CardIcon } from "@/components/ui/Card";
import { ArrowUpRight, Gauge, Headset, Users, Globe } from "@/components/icons";
import type { ReactNode } from "react";

/** One accent per column, fixed — the group is the unit of color, not the row. */
const GROUP_ACCENTS: Accent[] = ["sun", "sky", "blush", "mint"];

/** Registry order: Core functions, Customer & admin, HR & payroll, Models & sectors. */
const GROUP_ICONS: ReactNode[] = [<Gauge key="g" />, <Headset key="h" />, <Users key="u" />, <Globe key="gl" />];

const GROUP_RULES: Record<Accent, string> = {
  sun: "bg-sun-400",
  mint: "bg-mint-400",
  lilac: "bg-lilac-400",
  blush: "bg-blush-400",
  sky: "bg-sky-400",
};

/**
 * The full registry as an index, not a sampler. Sixteen linked services say
 * "this is the whole catalog" in a way four teaser cards never could.
 */
export function Services() {
  return (
    <Section id="services" tint="paper">
      <Container width="wide">
        <SectionHead align="split" className="max-w-none">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
            <Reveal as="span">
              <Eyebrow>02 · What we run</Eyebrow>
            </Reveal>
            <SplitWords
              text="Sixteen services. One contract."
              stagger={45}
              className={headingClass}
            />
            <Reveal as="p" delay={180} className={leadClass}>
              Take one seat or staff a whole function — the price is per seat
              either way, and every engagement gets the same named-specialist
              setup.
            </Reveal>
          </div>
          <Reveal delay={220} className="flex md:justify-end">
            <TextLink href="/services">
              Browse all 16 services
              <ArrowUpRight />
            </TextLink>
          </Reveal>
        </SectionHead>

        <div className="grid grid-cols-1 gap-5 min-[621px]:grid-cols-2 min-[1025px]:grid-cols-4">
          {SERVICE_SUMMARY_GROUPS.map((group, groupIndex) => {
            const accent = GROUP_ACCENTS[groupIndex] ?? "sun";
            return (
              <Reveal key={group.heading} delay={groupIndex * 110} className="flex">
                <div className="group flex w-full flex-col rounded-lg border border-ink-900/10 bg-paper-000">
                  <span aria-hidden className={`h-[3px] w-full rounded-t-lg ${GROUP_RULES[accent]}`} />
                  <div className="flex items-start justify-between gap-3 px-5 pt-5">
                    <CardIcon accent={accent} className="size-[46px] rounded-md [&>svg]:size-[22px]">
                      {GROUP_ICONS[groupIndex]}
                    </CardIcon>
                    <span className="font-display text-xs font-bold tabular-nums text-ink-300">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="px-5 pb-1 pt-4 font-display text-base font-bold tracking-tight">
                    {group.heading}
                  </h3>
                  <ul className="flex flex-col px-2 pb-3">
                    {group.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group/link flex items-center justify-between gap-3 rounded-md px-3 py-[0.6rem] text-sm font-medium text-ink-700 transition-colors duration-200 hover:bg-ink-050 hover:text-ink-900"
                        >
                          {service.name}
                          <ArrowUpRight className="size-[0.9em] shrink-0 opacity-0 transition-opacity duration-200 group-hover/link:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
