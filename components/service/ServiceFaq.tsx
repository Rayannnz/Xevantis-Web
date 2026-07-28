"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/services/types";
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
import { ArrowUpRight, ChevronDown } from "@/components/icons";

/**
 * FAQ disclosure list.
 *
 * Distinct from `ui/Accordion` on purpose: that one numbers its rows and is
 * built for an ordered process, which would be wrong on a question list where
 * order carries no meaning. Panels animate `grid-template-rows: 0fr → 1fr`, so
 * there is no height measurement and no jump on long answers.
 */
export function ServiceFaq({
  faqs,
  eyebrow,
  title,
  body,
  contactHref,
}: {
  faqs: readonly Faq[];
  eyebrow: string;
  title: string;
  body: string;
  contactHref: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = faqs.length - 1;
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % faqs.length
        : event.key === "ArrowUp"
          ? (index - 1 + faqs.length) % faqs.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;

    if (next === null) return;
    event.preventDefault();
    triggers.current[next]?.focus();
  };

  return (
    <Section id="faq">
      <Container width="wide">
        <div className="grid gap-[clamp(2.5rem,1rem+4vw,4.5rem)] min-[981px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="min-[981px]:sticky min-[981px]:top-28 min-[981px]:self-start">
            <SectionHead className="mb-0">
              <Reveal as="span" className="justify-self-start">
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
              <SplitWords text={title} stagger={45} className={headingClass} />
              <Reveal as="p" delay={180} className={cn(leadClass, "max-w-[38ch]")}>
                {body}
              </Reveal>
              <Reveal delay={260}>
                <TextLink href={contactHref}>
                  Ask us something else
                  <ArrowUpRight />
                </TextLink>
              </Reveal>
            </SectionHead>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              const panelId = `${baseId}-panel-${index}`;
              const triggerId = `${baseId}-trigger-${index}`;

              return (
                <Reveal key={faq.question} delay={Math.min(index, 6) * 60}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-lg bg-paper-000",
                      "[transition:box-shadow_280ms_ease,border-color_280ms_ease]",
                      isOpen
                        ? "border border-ink-900 shadow-md"
                        : "border border-ink-900/10 hover:border-ink-900/25",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={triggerId}
                        ref={(node) => {
                          triggers.current[index] = node;
                        }}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : index)}
                        onKeyDown={(event) => onKeyDown(event, index)}
                        className="flex w-full cursor-pointer items-center gap-4 px-[1.35rem] py-[1.15rem] text-left font-display text-lg font-semibold"
                      >
                        <span className="flex-1">{faq.question}</span>
                        <span
                          aria-hidden
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-full",
                            "[transition:transform_380ms_var(--ease-out-expo),background-color_280ms_ease,color_280ms_ease]",
                            isOpen
                              ? "rotate-180 bg-ink-900 text-paper-050"
                              : "bg-ink-050 text-ink-900",
                            "[&>svg]:size-[13px]",
                          )}
                        >
                          <ChevronDown strokeWidth={2.4} />
                        </span>
                      </button>
                    </h3>

                    {/* `invisible` when collapsed so the answer leaves the tab
                        order with the animation, not before it. */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className={cn(
                        "grid",
                        "[transition:grid-template-rows_480ms_var(--ease-out-expo),visibility_0s_linear_480ms]",
                        isOpen
                          ? "visible grid-rows-[1fr] [transition-delay:0s]"
                          : "invisible grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[68ch] px-[1.35rem] pb-[1.35rem] text-base text-ink-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
