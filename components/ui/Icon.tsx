import type { SVGProps } from "react";

/* One inline sprite. Keeps icons in the RSC payload with zero client JS and
   no icon-font request. Stroke icons inherit currentColor. */

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths = {
  arrowRight: { d: "M5 12h14M13 6l6 6-6 6", stroke: true, w: 2.2 },
  arrowLeft: { d: "M19 12H5M11 6l-6 6 6 6", stroke: true, w: 2.2 },
  arrowUpRight: { d: "M7 17 17 7M9 7h8v8", stroke: true, w: 2.2 },
  chevronDown: { d: "M2.5 4.5 6 8l3.5-3.5", stroke: true, w: 1.8, box: "0 0 12 12" },
  check: { d: "m5 13 4 4L19 7", stroke: true, w: 2.4 },
  headset: { d: "M21 12a9 9 0 1 1-3.2-6.9 M8 12h8M12 8v8", stroke: true },
  headsetFull: {
    d: "M4 18v-6a8 8 0 0 1 16 0v6 M4 15h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm16 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z",
    stroke: true,
  },
  lines: { d: "M4 7h16M4 12h10M4 17h13", stroke: true },
  code: { d: "m9 8-5 4 5 4M15 8l5 4-5 4", stroke: true },
  shield: { d: "M12 3 4 7v6c0 4.5 3.4 7.6 8 8.6 4.6-1 8-4.1 8-8.6V7l-8-4Z m-3 9 2 2 4-4", stroke: true },
  window: { d: "M3 4h18v16H3z M3 9h18M8 14h6", stroke: true },
  person: { d: "M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z M4 21c0-4 3.6-6.5 8-6.5S20 17 20 21", stroke: true, w: 1.2 },
  bars: { d: "M3 20h18M6 20V10M11 20V5M16 20v-8M21 20v-4", stroke: true, w: 1.2 },
  star: { d: "m12 2 3 6.6 7 .8-5.2 4.7 1.5 7L12 17.6 5.7 21l1.5-7L2 9.4l7-.8Z", stroke: false },
  logoCircle: { d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z", stroke: false },
  logoSquare: { d: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z", stroke: false },
  logoTriangle: { d: "M12 2 22 20H2Z", stroke: false },
  logoSpark: { d: "M12 2 15 9l7 3-7 3-3 7-3-7-7-3 7-3Z", stroke: false },
  logoGrid: { d: "M5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm10 10h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z", stroke: false },
  logoArch: { d: "M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0Zm4 0a4 4 0 0 0 8 0Z", stroke: false },
  logoZig: { d: "M3 18 9 6l6 12 6-12", stroke: true, w: 2 },
  logoDuo: { d: "M8 7a5 5 0 1 1 0 10A5 5 0 0 1 8 7Zm8 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z", stroke: false },
  linkedin: {
    d: "M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 21V8.6h3.5V21Zm6.3 0V8.6h3.36v1.7c.55-.97 1.8-1.98 3.7-1.98 2.6 0 4.44 1.7 4.44 5.36V21h-3.5v-5.9c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.74-2 1.45-.1.26-.13.62-.13.98V21Z",
    stroke: false,
  },
  x: { d: "M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.7 21H1.5l7.5-8.6L1.2 3h6.6l4.5 5.6Zm-1.1 16h1.8L7.7 4.9H5.8Z", stroke: false },
  youtube: {
    d: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.3 22 12 22 12s0-3.3-.4-4.8ZM10 15V9l5.2 3Z",
    stroke: false,
  },
  instagram: {
    d: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm4 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm5.5-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    stroke: true,
    w: 2,
  },
  bolt: { d: "M12 3 4 7v6c0 4.5 3.4 7.6 8 8.6 4.6-1 8-4.1 8-8.6V7l-8-4Z", stroke: true, w: 1.6 },
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  ...rest
}: { name: IconName } & Omit<SVGProps<SVGSVGElement>, "name">) {
  const spec = paths[name] as {
    d: string;
    stroke: boolean;
    w?: number;
    box?: string;
  };
  return (
    <svg
      viewBox={spec.box ?? "0 0 24 24"}
      aria-hidden="true"
      {...(spec.stroke
        ? { ...strokeProps, strokeWidth: spec.w ?? strokeProps.strokeWidth }
        : { fill: "currentColor" })}
      {...rest}
    >
      {spec.d.split(" m").map((seg, i) => (
        <path key={i} d={i === 0 ? seg : `m${seg}`} />
      ))}
    </svg>
  );
}

/** Five-pointed star row used by testimonial cards. */
export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="quote__stars" aria-label={`${count} out of 5`}>
      {Array.from({ length: count }, (_, i) => (
        <Icon key={i} name="star" />
      ))}
    </div>
  );
}
