import type { ReactNode } from "react";
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

/**
 * The client wall, in one place.
 *
 * The home page marquee and every service page's trust strip read from this
 * list, so a new logo lands everywhere at once and the names never drift apart
 * between pages.
 */
export const CLIENT_LOGOS: { name: string; mark: ReactNode }[] = [
  { name: "Northwind", mark: <MarkCircle /> },
  { name: "Aurora Health", mark: <MarkSquare /> },
  { name: "Peakline", mark: <MarkTriangle /> },
  { name: "Lumen Retail", mark: <MarkSparkle /> },
  { name: "Gridworks", mark: <Squares /> },
  { name: "Solstice", mark: <MarkEye /> },
  { name: "Vertex Pay", mark: <MarkZigzag /> },
  { name: "Duonode", mark: <MarkDuo /> },
];
