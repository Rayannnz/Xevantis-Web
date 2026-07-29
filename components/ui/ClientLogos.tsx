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
 * list, so a change lands everywhere at once and the strip never drifts apart
 * between pages.
 *
 * These are the segments we serve, not company names. Our clients are small
 * practices and firms whose logos would mean nothing to a stranger, and
 * inventing eight plausible-looking brands would read as a customer list we do
 * not have. Naming the industries says the same thing honestly and doubles as
 * the "is this for me?" answer a visitor is scanning for.
 */
export const CLIENT_LOGOS: { name: string; mark: ReactNode }[] = [
  { name: "Medical clinics", mark: <MarkCircle /> },
  { name: "Dental practices", mark: <MarkSquare /> },
  { name: "Independent pharmacies", mark: <MarkTriangle /> },
  { name: "Law firms", mark: <MarkSparkle /> },
  { name: "Engineering firms", mark: <Squares /> },
  { name: "Accounting firms", mark: <MarkEye /> },
  { name: "Real estate agencies", mark: <MarkZigzag /> },
  { name: "Corporate offices", mark: <MarkDuo /> },
];
