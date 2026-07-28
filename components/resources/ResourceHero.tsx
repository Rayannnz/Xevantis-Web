import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

export function ResourceHero() {
  return (
    <section className="relative overflow-clip pb-[clamp(1.5rem,1rem+2vw,2.5rem)] pt-[calc(var(--header-height)+clamp(2.5rem,2rem+4vw,5.5rem))]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-5%] top-[-10%] -z-10 h-[130%] select-none"
      >
        <div className="absolute -left-32 -top-24 size-[28rem] animate-blob rounded-blob bg-mint-200 opacity-60 blur-[46px]" />
        <div className="absolute -right-40 top-[12rem] size-[22rem] animate-blob rounded-blob bg-sun-200 opacity-60 blur-[52px] [animation-delay:-6s]" />
      </div>

      <Container width="wide">
        <div className="max-w-[640px]">
          <Reveal as="span" className="inline-block">
            <Eyebrow>Resources</Eyebrow>
          </Reveal>

          <SplitWords
            as="h1"
            text="Insights for building better teams."
            stagger={45}
            className="mt-4 font-display text-hero font-extrabold tracking-tighter"
          />

          <Reveal as="p" delay={200} className="mt-5 max-w-[52ch] text-lg text-ink-500">
            Playbooks, benchmarks and interviews on outsourcing, CX and the
            operating models that keep named teams shipping.
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
