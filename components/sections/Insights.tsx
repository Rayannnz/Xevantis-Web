import { getLatestResources } from "@/lib/resources";
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
import { ArrowUpRight } from "@/components/icons";
import { ResourceArtIcon } from "@/components/resources/ResourceArtIcon";

export function Insights() {
  const posts = getLatestResources(3);

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
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 120} className="flex">
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
                    <ResourceArtIcon name={post.icon} size={86} />
                  </div>
                </div>

                <div className="grid gap-3 px-6 pb-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-ink-400">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.type}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-[1.3] tracking-tight">
                    {post.title}
                  </h3>
                  <TextLink href="/resources" className="justify-self-start">
                    Read article
                    <ArrowUpRight />
                  </TextLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Button href="/resources" variant="secondary">
            <ButtonLabel>Check out all our resources</ButtonLabel>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
