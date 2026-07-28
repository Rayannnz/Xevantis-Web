import { Container, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";

export function SpotlightQuote() {
  return (
    <Section tight tint="sun" flushTop>
      <Container width="narrow" className="text-center">
        <Reveal variant="pop" className="mb-5 flex justify-center">
          <div
            aria-hidden
            className="grid size-[88px] place-items-center rounded-full border-[3px] border-ink-900 bg-paper-000 font-display text-[1.6rem] font-extrabold"
          >
            SN
          </div>
        </Reveal>

        <Reveal as="p" delay={120} className="text-2xl font-semibold leading-[1.35]">
          &ldquo;The Valentisys pod is genuinely flexible with sudden changes and
          controls 100% of routing every minute — the best our clients have ever had
          on a daily basis.&rdquo;
        </Reveal>

        <Reveal as="p" delay={220} className="mt-5 text-sm text-ink-500">
          <strong className="text-ink-900">Sarah Nakamura</strong> · Director of
          Customer Experience, Lumen Retail
        </Reveal>
      </Container>
    </Section>
  );
}
