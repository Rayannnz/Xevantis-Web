import type { Post } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Container,
  headingClass,
  leadClass,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowUpRight, BarChart, LedgerOutline, PersonOutline } from "@/components/icons";

const POSTS: Post[] = [
  {
    date: "18 Nov 2026",
    category: "Interview",
    title:
      "Marcus Delgado on the impact of Generative AI in consumer goods support",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-200),var(--color-blush-200))]",
    icon: <PersonOutline width={86} height={86} />,
  },
  {
    date: "02 Nov 2026",
    category: "Playbook",
    title: "Transforming customer service in the home furnishings industry",
    art: "bg-[linear-gradient(140deg,var(--color-mint-200),var(--color-sky-200))]",
    icon: <BarChart width={86} height={86} />,
  },
  {
    date: "21 Oct 2026",
    category: "Benchmark",
    title: "What 4 million tickets taught us about first-contact resolution",
    art: "bg-[linear-gradient(140deg,var(--color-sun-200),var(--color-blush-100))]",
    icon: <LedgerOutline width={86} height={86} />,
  },
];

export function Insights() {
  return (
    <Section id="insights">
      <Container width="wide">
        <SectionHead align="center">
          <SplitWords
            text="See what's new and what's next."
            stagger={45}
            className={headingClass}
          />
          <Reveal as="p" delay={180} className={leadClass}>
            Thought leadership and actionable insights to help you grow faster.
          </Reveal>
        </SectionHead>

        <div className="grid grid-cols-1 gap-6 min-[621px]:grid-cols-2 min-[861px]:grid-cols-3">
          {POSTS.map((post, index) => (
            <Reveal key={post.title} delay={index * 120} className="flex">
              <article
                className={cn(
                  "group flex w-full flex-col gap-4 overflow-hidden rounded-xl",
                  "border border-ink-900/10 bg-paper-000",
                  "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo)]",
                  "hover:-translate-y-[6px] hover:shadow-lg",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className={cn(
                      "grid size-full place-items-center",
                      "transition-transform duration-[720ms] ease-out-expo group-hover:scale-[1.06]",
                      post.art,
                    )}
                  >
                    {post.icon}
                  </div>
                </div>

                <div className="grid gap-3 px-6 pb-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-ink-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-[1.3] tracking-tight">
                    {post.title}
                  </h3>
                  <TextLink href="#insights" className="justify-self-start">
                    Read article
                    <ArrowUpRight />
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Button href="#insights" variant="secondary">
            <ButtonLabel>Check out all our resources</ButtonLabel>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
