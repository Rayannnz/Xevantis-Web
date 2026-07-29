import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

export function CtaBand() {
  return (
    <Section id="contact">
      <Container width="wide">
        <Reveal
          variant="scale"
          className="noise relative isolate animate-aurora overflow-hidden rounded-2xl bg-aurora text-center px-[clamp(1.5rem,1rem+3vw,4rem)] py-[clamp(2.5rem,2rem+4vw,5.5rem)]"
        >
          <Doodles />

          <Reveal as="span">
            <Eyebrow centered>Let&rsquo;s build it</Eyebrow>
          </Reveal>

          <SplitWords
            text="Tell us what's eating your week."
            stagger={50}
            className="mb-4 mt-3 font-display text-5xl font-bold leading-[0.98] tracking-tighter"
          />

          <Reveal as="p" delay={200} className="mx-auto max-w-[60ch] text-lg text-ink-700">
            Whether you run a clinic in Queens or a firm in Tulsa, we&rsquo;ll come back
            within one business day with who we&rsquo;d put on it, when they&rsquo;d
            start and what it costs per month.
          </Reveal>

          <SubscribeForm
            successMessage="Thanks — someone who actually runs the work will reply within one business day."
            inputId="cta-email"
            label="Work email"
            placeholder="you@yourpractice.com"
            cta="Get started"
            className="mt-8 flex justify-center"
          />

          <Reveal as="p" delay={320} className="mt-[0.85rem] text-xs text-ink-400">
            No sales sequence. One reply from a human, not a sales development rep.
          </Reveal>
        </Reveal>
      </Container>
    </Section>
  );
}

/** Hand-drawn marginalia, drifting behind the CTA copy. */
function Doodles() {
  return (
    <svg
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="var(--color-ink-900)"
      strokeWidth="2"
      aria-hidden
      className="absolute inset-0 -z-10 opacity-50"
    >
      <circle cx="120" cy="90" r="34" className="animate-float" />
      <path
        d="M1060 70c22-24 54-6 40 22s-52 22-40-22Z"
        className="animate-float [animation-delay:-3s]"
      />
      <path d="M90 320c40-30 80 20 120-10" strokeLinecap="round" className="animate-bob" />
      <path d="M980 330h70M1015 295v70" strokeLinecap="round" className="animate-float" />
      <circle cx="640" cy="40" r="12" />
      <circle cx="200" cy="200" r="7" fill="var(--color-ink-900)" />
    </svg>
  );
}
