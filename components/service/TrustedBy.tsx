import { Container } from "@/components/ui/primitives";
import { Marquee, MarqueeItem } from "@/components/ui/Marquee";
import { CLIENT_LOGOS } from "@/components/ui/ClientLogos";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Trust strip. Deliberately quiet — it sits directly under the hero, so it
 * earns its place with a single line of copy and no section chrome.
 */
export function TrustedBy({ label }: { label: string }) {
  return (
    <section aria-label="Trusted by" className="py-[clamp(2rem,1.5rem+2vw,3.5rem)]">
      <Container width="wide">
        <Reveal variant="fade" as="p" className="mb-7 text-center text-sm text-ink-400">
          {label}
        </Reveal>
      </Container>

      <Reveal variant="fade" delay={120}>
        <Marquee speed="slow">
          {CLIENT_LOGOS.map((client) => (
            <MarqueeItem key={client.name}>
              {client.mark}
              {client.name}
            </MarqueeItem>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
