import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/services/types";
import { ACCENT_TINT } from "@/lib/accent-classes";
import {
  Badge,
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui/primitives";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowUpRight } from "@/components/icons";
import { ServiceFigure } from "./ServiceFigure";

export function CaseStudies({
  cases,
  eyebrow,
  title,
  body,
  contactHref,
}: {
  cases: readonly CaseStudy[];
  eyebrow: string;
  title: string;
  body: string;
  contactHref: string;
}) {
  return (
    <Section id="work" tint="paper">
      <Container width="wide">
        <SectionHead align="split" className="max-w-none">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
            <Reveal as="span" className="justify-self-start">
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <SplitWords text={title} stagger={45} className={headingClass} />
          </div>
          <Reveal as="p" delay={150} className={cn(leadClass, "max-w-[46ch]")}>
            {body}
          </Reveal>
        </SectionHead>

        <div className="grid gap-5 min-[721px]:grid-cols-2 min-[1121px]:grid-cols-3">
          {cases.map((study, index) => (
            <Reveal key={study.title} delay={index * 110} className="flex">
              <article
                className={cn(
                  "group flex w-full flex-col overflow-hidden rounded-xl border border-ink-900/10 bg-paper-000",
                  "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo),border-color_280ms_ease]",
                  "hover:-translate-y-[6px] hover:border-transparent hover:shadow-lg",
                )}
              >
                {/* Thumbnail */}
                <div
                  className={cn(
                    "relative isolate overflow-hidden border-b border-ink-900/10 px-6 pb-2 pt-6",
                    ACCENT_TINT[study.accent],
                  )}
                >
                  <ServiceFigure
                    variant={study.figure}
                    accent={study.accent}
                    className="transition-transform duration-[720ms] ease-out-expo group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
                  />

                  {/* Overlay wipes up from the bottom edge on hover. */}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-end justify-center bg-ink-900/80 p-6",
                      "opacity-0 backdrop-blur-[2px] transition-opacity duration-[380ms] ease-out-quad",
                      "group-hover:opacity-100 group-focus-within:opacity-100",
                    )}
                  >
                    <span className="translate-y-3 rounded-pill bg-sun-300 px-5 py-[0.6rem] font-display text-sm font-semibold text-ink-900 transition-transform duration-[480ms] ease-out-expo group-hover:translate-y-0">
                      Read the detail
                    </span>
                  </div>

                  <span className="absolute left-5 top-5 z-[1]">
                    <Badge tone="ink">{study.industry}</Badge>
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-[var(--card-padding)]">
                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight">
                    {study.title}
                  </h3>

                  <dl className="grid gap-3 text-base">
                    <div>
                      <dt className="font-display text-2xs font-bold uppercase tracking-widest text-ink-400">
                        Challenge
                      </dt>
                      <dd className="mt-1 text-ink-500">{study.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-display text-2xs font-bold uppercase tracking-widest text-ink-400">
                        Solution
                      </dt>
                      <dd className="mt-1 text-ink-500">{study.solution}</dd>
                    </div>
                  </dl>

                  <ul className="mt-auto grid grid-cols-3 gap-3 border-t border-ink-900/10 pt-4">
                    {study.results.map((result) => (
                      <li key={result.label}>
                        <p className="font-display text-2xl font-extrabold leading-none tracking-tighter">
                          {result.prefix}
                          <Counter
                            to={result.value}
                            suffix={result.suffix}
                            decimals={result.decimals}
                          />
                        </p>
                        <p className="mt-1 text-2xs leading-snug text-ink-400">{result.label}</p>
                      </li>
                    ))}
                  </ul>

                  <TextLink href={contactHref} className="text-sm">
                    Talk about a similar build
                    <ArrowUpRight />
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
