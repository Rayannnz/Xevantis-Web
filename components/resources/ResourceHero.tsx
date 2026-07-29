import type { CSSProperties, ReactNode } from "react";
import { RESOURCES, RESOURCE_TYPES, type ResourceType } from "@/lib/resources";
import { ACCENT_TILE } from "@/lib/accent-classes";
import type { Accent } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/Counter";
import { Tilt } from "@/components/ui/Tilt";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { Chat, Gauge, ListLines, PenNib, Route } from "@/components/icons";

/**
 * The format deck. Each row is a sticker card that drifts on its own clock —
 * the rotation, offset and animation delay are all deliberately mismatched so
 * five identical rows read as a hand-stacked pile rather than a list.
 */
const DECK: Record<
  ResourceType,
  { icon: ReactNode; accent: Accent; rotate: string; offset: string; float: string }
> = {
  Blog: {
    icon: <PenNib width={18} height={18} />,
    accent: "sky",
    rotate: "-2.5deg",
    offset: "min-[941px]:-translate-x-4",
    float: "animate-float",
  },
  Playbook: {
    icon: <Route width={18} height={18} />,
    accent: "mint",
    rotate: "1.5deg",
    offset: "min-[941px]:translate-x-6",
    float: "animate-float-slow [animation-delay:-2s]",
  },
  Benchmark: {
    icon: <Gauge width={18} height={18} />,
    accent: "sun",
    rotate: "-1deg",
    offset: "min-[941px]:-translate-x-1",
    float: "animate-float [animation-delay:-4s]",
  },
  Interview: {
    icon: <Chat width={18} height={18} />,
    accent: "lilac",
    rotate: "2.5deg",
    offset: "min-[941px]:translate-x-8",
    float: "animate-float-slow [animation-delay:-7s]",
  },
  "White paper": {
    icon: <ListLines width={18} height={18} />,
    accent: "blush",
    rotate: "-1.5deg",
    offset: "min-[941px]:translate-x-2",
    float: "animate-float [animation-delay:-5.5s]",
  },
};

const averageRead = Math.round(
  RESOURCES.reduce((total, r) => total + r.readTime, 0) / RESOURCES.length,
);

export function ResourceHero() {
  const counts = RESOURCE_TYPES.map((type) => ({
    type,
    count: RESOURCES.filter((r) => r.type === type).length,
  }));

  return (
    <section className="relative overflow-clip pb-[clamp(2.5rem,2rem+3vw,4.5rem)] pt-[calc(var(--header-height)+clamp(2.5rem,2rem+4vw,5.5rem))]">
      <HeroBackdrop />

      <Container width="wide">
        <div className="grid items-center gap-[clamp(2.5rem,1rem+5vw,5rem)] min-[941px]:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)]">
          <div className="max-w-[640px]">
            <Reveal as="span" variant="fade" className="inline-block">
              <Eyebrow>Resources</Eyebrow>
            </Reveal>

            <SplitWords
              as="h1"
              text="Insights for building better teams."
              stagger={45}
              className="mt-4 font-display text-hero font-extrabold tracking-tighter"
            />

            <Reveal as="p" delay={200} className="mt-5 max-w-[52ch] text-lg text-ink-500">
              Playbooks, benchmarks and interviews from the delivery floor — written
              by the specialists running the pods, not by a content team guessing at
              what they do.
            </Reveal>

            <Reveal
              delay={320}
              className="mt-9 flex flex-wrap items-stretch gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-4"
            >
              <Stat value={<Counter to={RESOURCES.length} />} label="Pieces published" />
              <Stat value={<Counter to={RESOURCE_TYPES.length} />} label="Formats" />
              <Stat
                value={<Counter to={averageRead} suffix=" min" />}
                label="Average read"
              />
            </Reveal>
          </div>

          <Reveal variant="scale" delay={260} className="min-[941px]:justify-self-end">
            <Tilt max={5} className="w-full max-w-[460px]">
              <ul className="grid gap-[0.7rem]">
                {counts.map(({ type, count }, index) => (
                  <DeckRow key={type} type={type} count={count} index={index} />
                ))}
              </ul>
            </Tilt>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div className="border-l-2 border-ink-900/10 pl-4 first:border-l-0 first:pl-0">
      <div className="font-display text-2xl font-extrabold leading-none tracking-tighter">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-ink-400">{label}</div>
    </div>
  );
}

function DeckRow({
  type,
  count,
  index,
}: {
  type: ResourceType;
  count: number;
  index: number;
}) {
  const { icon, accent, rotate, offset, float } = DECK[type];

  return (
    <li
      style={{ "--rot": rotate } as CSSProperties}
      className={cn(
        "[transform:rotate(var(--rot))] will-change-transform",
        float,
        offset,
      )}
    >
      <div
        className={cn(
          "group flex items-center gap-3 rounded-lg border-2 border-ink-900 bg-paper-000",
          "px-4 py-[0.7rem] shadow-sticker",
          "[transition:transform_280ms_var(--ease-out-quad),box-shadow_280ms_var(--ease-out-quad)]",
          "hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-sticker-lg",
        )}
      >
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-md text-ink-900",
            "transition-transform duration-[480ms] ease-out-back",
            "group-hover:-rotate-[8deg] group-hover:scale-[1.08]",
            ACCENT_TILE[accent],
          )}
        >
          {icon}
        </span>

        <span className="font-display text-base font-bold tracking-tight">{type}</span>

        <span className="ml-auto font-display text-sm font-semibold text-ink-400 [font-variant-numeric:tabular-nums]">
          <Counter to={count} duration={900 + index * 120} />
        </span>
      </div>
    </li>
  );
}

/** Drifting color orbs, tuned so neither one sits behind the headline. */
function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-[-5%] top-[-10%] -z-10 h-[130%] select-none"
    >
      <div className="absolute -left-32 -top-24 size-[28rem] animate-blob rounded-blob bg-mint-200 opacity-60 blur-[46px]" />
      <div className="absolute -right-40 top-[10rem] size-[24rem] animate-blob rounded-blob bg-sun-200 opacity-65 blur-[52px] [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-[28%] size-[20rem] animate-blob rounded-blob bg-lilac-200 opacity-55 blur-[58px] [animation-delay:-11s]" />
    </div>
  );
}
