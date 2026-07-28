import type { ReactNode } from "react";
import { Marquee, MarqueeItem } from "@/components/ui/Marquee";
import {
  MarkCircle,
  MarkDuo,
  MarkEye,
  MarkSparkle,
  MarkSquare,
  MarkTriangle,
  MarkZigzag,
  Squares,
} from "@/components/icons";

const CLIENTS: { name: string; mark: ReactNode }[] = [
  { name: "Northwind", mark: <MarkCircle /> },
  { name: "Aurora Health", mark: <MarkSquare /> },
  { name: "Peakline", mark: <MarkTriangle /> },
  { name: "Lumen Retail", mark: <MarkSparkle /> },
  { name: "Gridworks", mark: <Squares /> },
  { name: "Solstice", mark: <MarkEye /> },
  { name: "Vertex Pay", mark: <MarkZigzag /> },
  { name: "Duonode", mark: <MarkDuo /> },
];

export function LogoMarquee() {
  return (
    <section aria-label="Trusted by" className="py-8">
      <Marquee speed="slow">
        {CLIENTS.map((client) => (
          <MarqueeItem key={client.name}>
            {client.mark}
            {client.name}
          </MarqueeItem>
        ))}
      </Marquee>
    </section>
  );
}
