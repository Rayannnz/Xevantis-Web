import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

/**
 * The close. The drafting grid returns from the hero so the page bookends on
 * the same texture, with one violet rule doing the emphasis.
 */
export function CtaBand() {
  return (
    <Section id="contact">
      <Container width="wide">
        <Reveal
          variant="scale"
          className="relative isolate overflow-hidden rounded-xl border border-ink-900/12 bg-paper-000 px-[clamp(1.5rem,1rem+3vw,4rem)] py-[clamp(2.5rem,2rem+3vw,4.5rem)] shadow-md"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-ruled [mask-image:linear-gradient(115deg,transparent_38%,#000_100%)]"
          />
          <span aria-hidden className="absolute inset-y-0 left-0 w-[4px] bg-sun-400" />

          <div className="grid items-center gap-[clamp(2rem,1rem+3vw,4rem)] min-[901px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
              <Reveal as="span">
                <Eyebrow>Let&rsquo;s plan it</Eyebrow>
              </Reveal>

              <SplitWords
                text="Tell us what's eating your week."
                stagger={50}
                className="font-display text-4xl font-bold leading-[1.05] tracking-tighter"
              />

              <Reveal as="p" delay={200} className="max-w-[52ch] text-lg text-ink-500">
                Whether you run a clinic in Queens or a firm in Tulsa, we&rsquo;ll
                come back within one business day with who we&rsquo;d put on it,
                when they&rsquo;d start and what it costs per month.
              </Reveal>
            </div>

            <div className="grid gap-3 justify-self-stretch min-[901px]:justify-self-end">
              <SubscribeForm
                successMessage="Thanks — someone who actually runs the work will reply within one business day."
                inputId="cta-email"
                label="Work email"
                placeholder="you@yourpractice.com"
                cta="Get started"
              />
              <Reveal as="p" delay={320} className="text-xs text-ink-400">
                No sales sequence. One reply from a human, not a sales development
                rep.
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
