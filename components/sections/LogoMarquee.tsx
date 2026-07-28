import { Marquee, MarqueeItem } from "@/components/ui/Marquee";
import { CLIENT_LOGOS } from "@/components/ui/ClientLogos";

export function LogoMarquee() {
  return (
    <section aria-label="Trusted by" className="py-8">
      <Marquee speed="slow">
        {CLIENT_LOGOS.map((client) => (
          <MarqueeItem key={client.name}>
            {client.mark}
            {client.name}
          </MarqueeItem>
        ))}
      </Marquee>
    </section>
  );
}
