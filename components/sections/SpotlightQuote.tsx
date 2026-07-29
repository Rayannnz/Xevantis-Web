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
            OM
          </div>
        </Reveal>

        <Reveal as="p" delay={120} className="text-2xl font-semibold leading-[1.35]">
          &ldquo;I run a nine-person office. I did not want a vendor, I wanted one more
          competent person. That is what I got, and she has been with us two years
          now.&rdquo;
        </Reveal>

        <Reveal as="p" delay={220} className="mt-5 text-sm text-ink-500">
          <strong className="text-ink-900">Office Manager</strong> · Multi-specialty
          medical practice, Westchester County, NY
        </Reveal>
      </Container>
    </Section>
  );
}
