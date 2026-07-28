import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { TechItem } from "@/lib/services/types";
import { ACCENT_GLOW, ACCENT_TILE } from "@/lib/accent-classes";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

/**
 * Two letters, derived from the name — "Next.js" → "NX", "AWS" → "AW".
 *
 * Deliberately a monogram rather than the real vendor logo: shipping thirty
 * third-party marks means thirty trademark licences and a wall of clashing
 * brand colours, and neither improves the page.
 */
function monogram(name: string) {
  const words = name.replace(/[^\p{L}\p{N} ]/gu, "").split(/\s+/).filter(Boolean);
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0] ?? name).slice(0, 2).toUpperCase();
}

export function TechStack({
  tech,
  accent,
  eyebrow,
  title,
  body,
}: {
  tech: readonly TechItem[];
  accent: Accent;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Section id="technology" tint="paper">
      <Container width="wide">
        <SectionHead align="center">
          <Reveal as="span">
            <Eyebrow centered>{eyebrow}</Eyebrow>
          </Reveal>
          <SplitWords text={title} stagger={45} className={headingClass} />
          <Reveal as="p" delay={180} className={leadClass}>
            {body}
          </Reveal>
        </SectionHead>

        <ul className="grid grid-cols-2 gap-3 min-[641px]:grid-cols-3 min-[1025px]:grid-cols-5">
          {tech.map((item, index) => (
            <Reveal
              as="li"
              key={item.name}
              variant="pop"
              // Capped so the last card in a 20-item grid is not a second late.
              delay={Math.min(index, 9) * 55}
              className="flex"
            >
              <div
                className={cn(
                  "group flex w-full flex-col gap-3 rounded-xl border border-ink-900/10 bg-paper-000",
                  "p-[1.15rem]",
                  "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo),border-color_280ms_ease]",
                  "hover:-translate-y-[5px] hover:border-transparent",
                  ACCENT_GLOW[accent],
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "grid size-11 place-items-center rounded-md",
                    "font-display text-sm font-extrabold tracking-tight text-ink-900",
                    "transition-transform duration-[480ms] ease-out-back",
                    "group-hover:-rotate-[8deg] group-hover:scale-110",
                    ACCENT_TILE[accent],
                  )}
                >
                  {monogram(item.name)}
                </span>

                <div>
                  <p className="font-display text-base font-bold leading-snug tracking-tight">
                    {item.name}
                  </p>
                  <p className="mt-[0.2rem] text-xs text-ink-400">{item.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
