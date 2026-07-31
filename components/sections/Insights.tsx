import Link from "next/link";
import { formatDate, getLatestResources } from "@/lib/resources";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowUpRight } from "@/components/icons";
import { ResourceScene } from "@/components/resources/ResourceScene";

/**
 * An index, not a card rack — titles carry an article list better than
 * thumbnails, and rows keep all three posts scannable in one glance.
 */
export function Insights() {
  const posts = getLatestResources(3);

  return (
    <Section id="insights">
      <Container width="wide">
        <SectionHead align="split" className="max-w-none">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
            <Reveal as="span">
              <Eyebrow>From the desk</Eyebrow>
            </Reveal>
            <SplitWords
              text="Written for the people who run the place."
              stagger={45}
              className={headingClass}
            />
            <Reveal as="p" delay={180} className={leadClass}>
              Practical guides for small and local businesses, written from what
              we see running New York offices.
            </Reveal>
          </div>
          <Reveal delay={220} className="flex md:justify-end">
            <TextLink href="/resources">
              All resources
              <ArrowUpRight />
            </TextLink>
          </Reveal>
        </SectionHead>

        <ul className="border-t border-ink-900/10">
          {posts.map((post, index) => (
            <Reveal as="li" key={post.slug} delay={index * 110}>
              <Link
                href={`/resources/${post.slug}`}
                className="group flex items-center gap-5 border-b border-ink-900/10 py-5 transition-colors duration-200 hover:bg-paper-000"
              >
                <span
                  aria-hidden
                  className={cn(
                    "hidden size-16 shrink-0 place-items-center overflow-hidden rounded-md border border-ink-900/[0.08]",
                    "transition-transform duration-[480ms] ease-out-expo group-hover:scale-[1.05]",
                    "min-[521px]:grid",
                    post.art,
                  )}
                >
                  <ResourceScene name={post.icon} accent={post.accent} className="size-full" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    {post.type} · {formatDate(post.date)}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold leading-snug tracking-tight">
                    {post.title}
                  </h3>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-ink-400 transition-transform duration-[280ms] ease-out-expo group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-ink-900" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
