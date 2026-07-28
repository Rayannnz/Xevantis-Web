import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/types";
import type { FigureVariant } from "@/lib/services/types";

/**
 * Generated section artwork.
 *
 * The brand has no photography library, and stock imagery would undercut a
 * page whose whole argument is that the work is bespoke. These are drawn from
 * the same ramp as everything else, so a service's accent flows through its
 * illustrations automatically — and they cost one inline SVG rather than a
 * 300 KB hero JPEG, with no layout shift and nothing to lazy-load.
 *
 * All five variants share a 560×440 viewBox so a frame can swap between them
 * without reflowing.
 */

type Ramp = { soft: string; mid: string; core: string; deep: string };

const RAMPS: Record<Accent, Ramp> = {
  sun: {
    soft: "var(--color-sun-100)",
    mid: "var(--color-sun-200)",
    core: "var(--color-sun-300)",
    deep: "var(--color-sun-500)",
  },
  mint: {
    soft: "var(--color-mint-100)",
    mid: "var(--color-mint-200)",
    core: "var(--color-mint-300)",
    deep: "var(--color-mint-500)",
  },
  lilac: {
    soft: "var(--color-lilac-100)",
    mid: "var(--color-lilac-200)",
    core: "var(--color-lilac-300)",
    deep: "var(--color-lilac-500)",
  },
  blush: {
    soft: "var(--color-blush-100)",
    mid: "var(--color-blush-200)",
    core: "var(--color-blush-300)",
    deep: "var(--color-blush-500)",
  },
  sky: {
    soft: "var(--color-sky-100)",
    mid: "var(--color-sky-200)",
    core: "var(--color-sky-300)",
    deep: "var(--color-sky-500)",
  },
};

const INK = "var(--color-ink-900)";
const PAPER = "var(--color-paper-000)";

/** SVG transforms rotate about the viewBox origin unless the box is reset. */
const SPIN_ORIGIN = "[transform-box:fill-box] [transform-origin:center]";

export function ServiceFigure({
  variant,
  accent,
  className,
}: {
  variant: FigureVariant;
  accent: Accent;
  className?: string;
}) {
  const ramp = RAMPS[accent];
  const Figure = FIGURES[variant];

  return (
    <svg
      viewBox="0 0 560 440"
      role="presentation"
      aria-hidden
      className={cn("block h-auto w-full", className)}
    >
      <DotGrid />
      <Figure ramp={ramp} />
    </svg>
  );
}

const FIGURES: Record<FigureVariant, (props: { ramp: Ramp }) => React.JSX.Element> = {
  dashboard: Dashboard,
  network: Network,
  layers: LayerStack,
  pipeline: Pipeline,
  pulse: Pulse,
};

/** Shared texture: a faint dot field that keeps the artwork from floating. */
function DotGrid() {
  return (
    <>
      <defs>
        <pattern id="fig-dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.6" fill={INK} opacity="0.1" />
        </pattern>
      </defs>
      <rect width="560" height="440" fill="url(#fig-dots)" />
    </>
  );
}

/* ==========================================================================
   VARIANTS
   ========================================================================== */

/** Analytics panel — a KPI, a bar series and a trend, on a floating card. */
function Dashboard({ ramp }: { ramp: Ramp }) {
  const bars = [58, 92, 74, 128, 106, 152, 134];

  return (
    <>
      <g className="animate-float-slow">
        <rect x="38" y="52" width="420" height="300" rx="26" fill={PAPER} />
        <rect
          x="38"
          y="52"
          width="420"
          height="300"
          rx="26"
          fill="none"
          stroke={INK}
          strokeOpacity="0.1"
        />

        {/* Panel chrome */}
        <circle cx="70" cy="84" r="5" fill={ramp.core} />
        <circle cx="86" cy="84" r="5" fill={INK} opacity="0.14" />
        <rect x="104" y="79" width="86" height="10" rx="5" fill={INK} opacity="0.1" />
        <rect x="366" y="72" width="66" height="24" rx="12" fill={ramp.soft} />

        {/* Headline figure */}
        <text
          x="70"
          y="152"
          fill={INK}
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="44"
          fontWeight="800"
          letterSpacing="-1.6"
        >
          98.4%
        </text>
        <rect x="70" y="168" width="126" height="9" rx="4.5" fill={INK} opacity="0.12" />

        {/* Bar series */}
        <g>
          {bars.map((height, index) => (
            <rect
              key={index}
              x={70 + index * 52}
              y={312 - height}
              width="30"
              height={height}
              rx="10"
              fill={index === bars.length - 2 ? ramp.deep : ramp.core}
              opacity={index === bars.length - 2 ? 1 : 0.55}
            />
          ))}
        </g>
        <rect x="70" y="322" width="356" height="2" rx="1" fill={INK} opacity="0.1" />
      </g>

      {/* Overlapping trend card */}
      <g className="animate-float [animation-delay:-2.5s]">
        <rect x="322" y="256" width="200" height="132" rx="22" fill={INK} />
        <path
          d="M348 342c22-10 34-38 54-40s28 26 46 16 22-40 44-46"
          fill="none"
          stroke={ramp.core}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="492" cy="272" r="7" fill={ramp.core} />
        <rect x="348" y="282" width="88" height="9" rx="4.5" fill={PAPER} opacity="0.9" />
        <rect x="348" y="299" width="54" height="7" rx="3.5" fill={PAPER} opacity="0.4" />
      </g>
    </>
  );
}

/** Hub-and-satellite graph — used where the story is integration or coverage. */
function Network({ ramp }: { ramp: Ramp }) {
  const satellites = [
    { x: 280, y: 92, r: 34, fill: PAPER },
    { x: 444, y: 220, r: 30, fill: ramp.mid },
    { x: 280, y: 348, r: 34, fill: ramp.core },
    { x: 116, y: 220, r: 30, fill: PAPER },
    { x: 396, y: 104, r: 20, fill: ramp.core },
    { x: 164, y: 336, r: 20, fill: ramp.mid },
  ];

  return (
    <>
      <circle
        cx="280"
        cy="220"
        r="160"
        fill="none"
        stroke={INK}
        strokeOpacity="0.16"
        strokeWidth="2"
        strokeDasharray="7 12"
      />
      <circle cx="280" cy="220" r="104" fill={ramp.soft} opacity="0.6" />

      {/* Spokes sit under the nodes so they read as connections, not overlaps. */}
      <g stroke={INK} strokeOpacity="0.22" strokeWidth="2">
        {satellites.map((node, index) => (
          <line key={index} x1="280" y1="220" x2={node.x} y2={node.y} />
        ))}
      </g>

      <g className={cn("animate-spin-slow", SPIN_ORIGIN)}>
        {satellites.map((node, index) => (
          <circle
            key={index}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.fill}
            stroke={INK}
            strokeWidth="2.5"
          />
        ))}
      </g>

      <circle cx="280" cy="220" r="62" fill={INK} />
      <circle cx="280" cy="220" r="62" fill="none" stroke={ramp.core} strokeWidth="3" />
      <path
        d="m264 220 12 12 22-24"
        fill="none"
        stroke={ramp.core}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

/** Isometric planes — architecture, stacks, tiers. */
function LayerStack({ ramp }: { ramp: Ramp }) {
  const plates = [
    { y: 300, fill: ramp.deep, opacity: 0.9 },
    { y: 244, fill: ramp.core, opacity: 1 },
    { y: 188, fill: ramp.mid, opacity: 1 },
    { y: 132, fill: PAPER, opacity: 1 },
  ];

  return (
    <>
      {plates.map((plate, index) => (
        <g key={index} className={index === 3 ? "animate-float-slow" : undefined}>
          {/* Top face, then the extruded edge underneath it. */}
          <path
            d={`M280 ${plate.y - 62} 452 ${plate.y} 280 ${plate.y + 62} 108 ${plate.y}Z`}
            fill={plate.fill}
            opacity={plate.opacity}
            stroke={INK}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d={`M108 ${plate.y} 108 ${plate.y + 16} 280 ${plate.y + 78} 452 ${plate.y + 16} 452 ${plate.y}`}
            fill={INK}
            opacity="0.16"
            stroke={INK}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </g>
      ))}

      {/* Tag pinned to the top plate */}
      <g className="animate-float [animation-delay:-3.5s]">
        <rect x="352" y="70" width="150" height="52" rx="16" fill={INK} />
        <rect x="372" y="86" width="76" height="9" rx="4.5" fill={PAPER} opacity="0.9" />
        <rect x="372" y="102" width="46" height="7" rx="3.5" fill={ramp.core} />
        <circle cx="480" cy="96" r="9" fill={ramp.core} />
      </g>
    </>
  );
}

/** Five-stage flow with a travelling marker — process, delivery, automation. */
function Pipeline({ ramp }: { ramp: Ramp }) {
  const stages = [0, 1, 2, 3];

  return (
    <>
      {/* Rail */}
      <path
        d="M74 220h412"
        stroke={INK}
        strokeOpacity="0.14"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M74 220h286"
        stroke={ramp.core}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {stages.map((index) => {
        const x = 74 + index * 137;
        const done = index < 3;
        return (
          <g key={index}>
            <circle
              cx={x}
              cy="220"
              r="30"
              fill={done ? ramp.core : PAPER}
              stroke={INK}
              strokeWidth="2.5"
            />
            {done ? (
              <path
                d={`m${x - 11} 220 8 8 15-16`}
                fill="none"
                stroke={INK}
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <circle cx={x} cy="220" r="9" fill={INK} opacity="0.18" />
            )}

            {/* Alternating labels keep the rail readable at small widths. */}
            <rect
              x={x - 44}
              y={index % 2 === 0 ? 122 : 278}
              width="88"
              height="60"
              rx="16"
              fill={PAPER}
              stroke={INK}
              strokeOpacity="0.12"
              strokeWidth="2"
            />
            <rect
              x={x - 28}
              y={index % 2 === 0 ? 142 : 298}
              width="56"
              height="8"
              rx="4"
              fill={INK}
              opacity="0.5"
            />
            <rect
              x={x - 28}
              y={index % 2 === 0 ? 158 : 314}
              width="34"
              height="7"
              rx="3.5"
              fill={ramp.deep}
            />
            <path
              d={`M${x} ${index % 2 === 0 ? 182 : 278} v ${index % 2 === 0 ? 8 : -8}`}
              stroke={INK}
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
        );
      })}

      <circle cx="486" cy="220" r="14" fill={ramp.deep} className="animate-bob" />
    </>
  );
}

/** Signal bars plus a gauge — performance, throughput, uptime. */
function Pulse({ ramp }: { ramp: Ramp }) {
  const bars = [40, 78, 132, 96, 168, 120, 196, 148, 104, 62];
  // Circumference of r=76, with the arc stopping just short of a full turn.
  const dash = 2 * Math.PI * 76;

  return (
    <>
      <g>
        {bars.map((height, index) => (
          <rect
            key={index}
            x={64 + index * 30}
            y={330 - height / 2}
            width="14"
            height={height}
            rx="7"
            fill={index % 3 === 1 ? ramp.deep : ramp.core}
            opacity={index % 3 === 1 ? 1 : 0.5}
          />
        ))}
      </g>

      <g className="animate-float-slow">
        <circle cx="390" cy="160" r="96" fill={PAPER} stroke={INK} strokeOpacity="0.1" />
        <circle
          cx="390"
          cy="160"
          r="76"
          fill="none"
          stroke={INK}
          strokeOpacity="0.1"
          strokeWidth="16"
        />
        <circle
          cx="390"
          cy="160"
          r="76"
          fill="none"
          stroke={ramp.core}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={`${dash * 0.78} ${dash}`}
          transform="rotate(-90 390 160)"
        />
        <text
          x="390"
          y="172"
          textAnchor="middle"
          fill={INK}
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="38"
          fontWeight="800"
          letterSpacing="-1.2"
        >
          4.8
        </text>
      </g>

      <g className="animate-float [animation-delay:-4s]">
        <rect x="60" y="72" width="164" height="60" rx="18" fill={INK} />
        <circle cx="92" cy="102" r="12" fill={ramp.core} />
        <rect x="116" y="90" width="82" height="9" rx="4.5" fill={PAPER} opacity="0.9" />
        <rect x="116" y="106" width="50" height="7" rx="3.5" fill={PAPER} opacity="0.4" />
      </g>
    </>
  );
}
