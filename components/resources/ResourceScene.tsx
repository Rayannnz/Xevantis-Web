import type { ReactNode } from "react";
import type { Accent } from "@/lib/types";
import type { ResourceIcon } from "@/lib/resources";

/**
 * Editorial artwork for the resource panels.
 *
 * Each scene is a miniature of the site itself — sticker plates with a hard ink
 * offset, outline strokes at the same 2.5 weight as `components/icons`, and one
 * accent pop per composition. Stock photography was the obvious alternative and
 * was rejected for the reason Lucide was: the geometry has to match the sticker
 * family, and a pastel hand-drawn brand fights literal corporate photography.
 *
 * Deliberately wordless. A chart with labelled figures on a marketing card
 * reads as a claim about real numbers; unlabelled bars read as illustration.
 *
 * The viewBox matches the 16/10 card. `slice` lets the featured tile crop the
 * scene like a photograph when its panel runs taller.
 */

const INK = "var(--color-ink-900)";
const PAPER = "var(--color-paper-000)";
const MUTE = "var(--color-ink-200)";

const ACCENT_FILL: Record<Accent, string> = {
  sun: "var(--color-sun-300)",
  mint: "var(--color-mint-300)",
  lilac: "var(--color-lilac-300)",
  blush: "var(--color-blush-300)",
  sky: "var(--color-sky-300)",
};

const stroke = {
  fill: "none",
  stroke: INK,
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** A card in miniature: hard ink offset under an outlined plate. */
function Plate({
  x,
  y,
  w,
  h,
  r = 10,
  fill = PAPER,
  rotate = 0,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
  fill?: string;
  rotate?: number;
  children?: ReactNode;
}) {
  return (
    <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x + 5} y={y + 5} width={w} height={h} rx={r} fill={INK} opacity={0.88} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={INK} strokeWidth={2.5} />
      {children}
    </g>
  );
}

/** Text placeholder rule. */
function Line({
  x,
  y,
  w,
  h = 6,
  fill = MUTE,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  fill?: string;
}) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />;
}

type SceneProps = { accent: string };

/* ==========================================================================
   SCENES
   ========================================================================== */

function ChartScene({ accent }: SceneProps) {
  const bars = [
    { x: 68, h: 30 },
    { x: 92, h: 48 },
    { x: 116, h: 38 },
    { x: 140, h: 62 },
    { x: 164, h: 52 },
  ];
  return (
    <>
      <Plate x={48} y={50} w={148} h={120}>
        <Line x={64} y={64} w={54} />
        {bars.map((bar) => (
          <rect
            key={bar.x}
            x={bar.x}
            y={148 - bar.h}
            width={14}
            height={bar.h}
            rx={5}
            fill={bar.h === 62 ? accent : MUTE}
            stroke={INK}
            strokeWidth={2.5}
          />
        ))}
        <path d="M60 152h124" {...stroke} />
      </Plate>

      <g className="animate-float">
        <Plate x={206} y={74} w={72} h={54} r={14} fill={accent}>
          <path d="M226 108l14-16 12 10 12-18" {...stroke} />
          <path d="M258 84h6v6" {...stroke} />
        </Plate>
      </g>
    </>
  );
}

function LedgerScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={54} y={42} w={150} h={132} rotate={-3}>
        <Line x={72} y={62} w={62} h={7} fill={INK} />
        {[86, 104, 122, 140].map((y) => (
          <g key={y}>
            <Line x={72} y={y} w={70} />
            <Line x={152} y={y} w={30} fill={y === 104 ? accent : MUTE} />
          </g>
        ))}
      </Plate>

      <g className="animate-float [animation-delay:-3s]">
        <Plate x={196} y={106} w={70} h={62} r={18} fill={accent} rotate={6}>
          <path d="M214 138l12 12 22-26" {...stroke} />
        </Plate>
      </g>
    </>
  );
}

function PersonScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={44} y={48} w={122} h={124} fill={accent}>
        <circle cx={105} cy={100} r={22} {...stroke} />
        <path d="M74 156a31 31 0 0 1 62 0" {...stroke} />
      </Plate>

      <g className="animate-float">
        <Plate x={172} y={62} w={106} h={58} r={16}>
          <Line x={190} y={80} w={62} />
          <Line x={190} y={94} w={40} />
          <path d="M196 120l-8 16 22-16" fill={PAPER} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
        </Plate>
      </g>

      <g className="animate-float [animation-delay:-4s]">
        <Plate x={186} y={132} w={78} h={40} r={20} fill={PAPER}>
          {[206, 224, 242].map((cx, i) => (
            <circle key={cx} cx={cx} cy={152} r={6} fill={i === 1 ? accent : MUTE} />
          ))}
        </Plate>
      </g>
    </>
  );
}

function ChatScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={40} y={48} w={140} h={62} r={18}>
        <Line x={58} y={66} w={80} />
        <Line x={58} y={82} w={54} />
        <path d="M62 110l-6 16 22-16" fill={PAPER} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      </Plate>

      <g className="animate-float [animation-delay:-2s]">
        <Plate x={142} y={118} w={140} h={56} r={18} fill={accent}>
          <Line x={162} y={134} w={72} fill={INK} />
          <Line x={162} y={150} w={46} fill={INK} />
          <path d="M262 174l6 14-22-14" fill={accent} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
        </Plate>
      </g>

      <g className="animate-float [animation-delay:-5s]">
        <Plate x={206} y={48} w={72} h={40} r={20}>
          {[226, 242, 258].map((cx) => (
            <circle key={cx} cx={cx} cy={68} r={5} fill={MUTE} />
          ))}
        </Plate>
      </g>
    </>
  );
}

function BeakerScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={46} y={44} w={140} h={130} rotate={-2}>
        <Line x={64} y={62} w={58} h={7} fill={INK} />
        {[88, 112, 136].map((y, i) => (
          <g key={y}>
            <rect
              x={64}
              y={y}
              width={16}
              height={16}
              rx={5}
              fill={i === 1 ? accent : PAPER}
              stroke={INK}
              strokeWidth={2.5}
            />
            {i === 1 ? <path d="M68 96l4 5 8-9" {...stroke} strokeWidth={2.2} /> : null}
            <Line x={90} y={y + 5} w={72} />
          </g>
        ))}
      </Plate>

      <g className="animate-float [animation-delay:-3s]">
        <Plate x={196} y={78} w={76} h={82} r={16} rotate={5}>
          <path d="M224 92v22l-14 32a6 6 0 0 0 6 8h30a6 6 0 0 0 6-8l-14-32V92" {...stroke} />
          <path d="M218 92h20" {...stroke} />
          <path d="M214 134h32" stroke={accent} strokeWidth={8} strokeLinecap="round" fill="none" />
        </Plate>
      </g>
    </>
  );
}

function RocketScene({ accent }: SceneProps) {
  return (
    <>
      <path d="M48 168C86 168 118 140 138 108s46-52 84-56" {...stroke} strokeDasharray="2 12" opacity={0.55} />

      {[
        { cx: 62, cy: 166 },
        { cx: 116, cy: 130 },
      ].map((dot) => (
        <circle key={dot.cx} {...dot} r={8} fill={PAPER} stroke={INK} strokeWidth={2.5} />
      ))}

      <g className="animate-float">
        <Plate x={162} y={44} w={96} h={96} r={26} fill={accent} rotate={-8}>
          <path
            d="M210 66c14 10 20 26 18 44l-18 10-18-10c-2-18 4-34 18-44Z"
            {...stroke}
          />
          <circle cx={210} cy={92} r={7} {...stroke} />
          <path d="M198 122l-6 14 18-6 18 6-6-14" {...stroke} />
        </Plate>
      </g>

      <Plate x={54} y={112} w={72} h={40} r={12} rotate={4}>
        <Line x={68} y={126} w={44} />
        <Line x={68} y={138} w={26} fill={accent} />
      </Plate>
    </>
  );
}

function LayersScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={70} y={44} w={132} h={44} r={12} rotate={-5} fill={MUTE} />
      <Plate x={58} y={80} w={132} h={44} r={12} rotate={-2} />
      <Plate x={48} y={116} w={132} h={48} r={12} fill={accent}>
        <Line x={66} y={132} w={62} h={7} fill={INK} />
        <Line x={66} y={146} w={40} fill={INK} />
      </Plate>

      <g className="animate-float [animation-delay:-4s]">
        <Plate x={202} y={92} w={72} h={72} r={36}>
          <circle cx={238} cy={128} r={22} {...stroke} />
          <path d="M238 114v14l10 7" {...stroke} />
        </Plate>
      </g>
    </>
  );
}

function GaugeScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={62} y={46} w={196} h={128} r={16}>
        <path d="M100 146a60 60 0 0 1 120 0" {...stroke} strokeWidth={9} opacity={0.18} />
        <path d="M100 146a60 60 0 0 1 38-55.7" stroke={accent} strokeWidth={9} strokeLinecap="round" fill="none" />
        <path d="M160 146l34-32" {...stroke} />
        <circle cx={160} cy={146} r={8} fill={INK} />
        {[
          "M100 132h-9",
          "M160 86v-9",
          "M220 132h9",
        ].map((d) => (
          <path key={d} d={d} {...stroke} strokeWidth={2.2} opacity={0.45} />
        ))}
      </Plate>

      <g className="animate-float">
        <Plate x={218} y={38} w={62} h={40} r={20} fill={accent} rotate={7}>
          <path d="M236 62l10-14 8 7 10-13" {...stroke} strokeWidth={2.2} />
        </Plate>
      </g>
    </>
  );
}

function GlobeScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={56} y={40} w={134} h={134} r={67} fill={accent}>
        <circle cx={123} cy={107} r={48} {...stroke} />
        <path d="M75 107h96M123 59c14 16 14 80 0 96M123 59c-14 16-14 80 0 96" {...stroke} />
      </Plate>

      {[
        { x: 186, y: 62, d: 0 },
        { x: 214, y: 116, d: -3 },
      ].map((pin) => (
        <g key={pin.x} className="animate-float" style={{ animationDelay: `${pin.d}s` }}>
          <Plate x={pin.x} y={pin.y} w={54} h={54} r={27}>
            <path
              d={`M${pin.x + 27} ${pin.y + 16}a11 11 0 0 1 11 11c0 8-11 19-11 19s-11-11-11-19a11 11 0 0 1 11-11Z`}
              {...stroke}
            />
          </Plate>
        </g>
      ))}
    </>
  );
}

function UsersScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={44} y={56} w={166} h={112} r={16}>
        <Line x={62} y={128} w={82} h={7} fill={INK} />
        <Line x={62} y={144} w={54} />
      </Plate>

      {[
        { cx: 88, fill: accent },
        { cx: 128, fill: PAPER },
        { cx: 168, fill: MUTE },
      ].map((av, i) => (
        <g key={av.cx} className="animate-float" style={{ animationDelay: `${i * -2.5}s` }}>
          <circle cx={av.cx + 5} cy={97} r={26} fill={INK} opacity={0.88} />
          <circle cx={av.cx} cy={92} r={26} fill={av.fill} stroke={INK} strokeWidth={2.5} />
          <circle cx={av.cx} cy={84} r={9} {...stroke} />
          <path d={`M${av.cx - 14} 112a14 14 0 0 1 28 0`} {...stroke} />
        </g>
      ))}

      <g className="animate-float [animation-delay:-4s]">
        <Plate x={214} y={104} w={62} h={62} r={20} fill={accent} rotate={6}>
          <path d="M232 136l10 10 18-22" {...stroke} />
        </Plate>
      </g>
    </>
  );
}

function RouteScene({ accent }: SceneProps) {
  return (
    <>
      <path d="M60 158c40 0 34-48 74-48s36 48 76 48" {...stroke} strokeDasharray="2 12" opacity={0.55} />

      {[
        { cx: 60, cy: 158, fill: PAPER },
        { cx: 134, cy: 110, fill: accent },
      ].map((stop) => (
        <g key={stop.cx}>
          <circle cx={stop.cx + 4} cy={stop.cy + 4} r={17} fill={INK} opacity={0.88} />
          <circle cx={stop.cx} cy={stop.cy} r={17} fill={stop.fill} stroke={INK} strokeWidth={2.5} />
          <circle cx={stop.cx} cy={stop.cy} r={5} fill={INK} />
        </g>
      ))}

      <g className="animate-float">
        <Plate x={190} y={116} w={80} h={62} r={16} fill={accent}>
          <path d="M212 168V128l38 8-38 10" {...stroke} />
        </Plate>
      </g>

      <Plate x={92} y={38} w={120} h={44} r={12} rotate={-4}>
        <Line x={108} y={52} w={64} h={7} fill={INK} />
        <Line x={108} y={66} w={38} />
      </Plate>
    </>
  );
}

function ShieldScene({ accent }: SceneProps) {
  return (
    <>
      <Plate x={44} y={52} w={128} h={122} r={16}>
        {[74, 100, 126, 152].map((y, i) => (
          <g key={y}>
            <rect
              x={62}
              y={y - 8}
              width={16}
              height={16}
              rx={5}
              fill={i < 3 ? accent : PAPER}
              stroke={INK}
              strokeWidth={2.5}
            />
            {i < 3 ? <path d="M66 -3l4 5 8-9" transform={`translate(0 ${y})`} {...stroke} strokeWidth={2.2} /> : null}
            <Line x={88} y={y - 3} w={64} />
          </g>
        ))}
      </Plate>

      <g className="animate-float [animation-delay:-3s]">
        <g transform="rotate(6 232 108)">
          <path
            d="M236 50l44 18v34c0 30-24 46-44 54-20-8-44-24-44-54V68l44-18Z"
            fill={INK}
            opacity={0.88}
            transform="translate(-3 5)"
          />
          <path
            d="M236 50l44 18v34c0 30-24 46-44 54-20-8-44-24-44-54V68l44-18Z"
            fill={accent}
            stroke={INK}
            strokeWidth={2.5}
            strokeLinejoin="round"
            transform="translate(-3 0)"
          />
          <path d="M214 106l14 14 28-32" {...stroke} transform="translate(-3 0)" />
        </g>
      </g>
    </>
  );
}

const SCENES: Record<ResourceIcon, (props: SceneProps) => ReactNode> = {
  chart: ChartScene,
  ledger: LedgerScene,
  person: PersonScene,
  chat: ChatScene,
  beaker: BeakerScene,
  rocket: RocketScene,
  layers: LayersScene,
  gauge: GaugeScene,
  globe: GlobeScene,
  users: UsersScene,
  route: RouteScene,
  shield: ShieldScene,
};

export function ResourceScene({
  name,
  accent,
  className,
}: {
  name: ResourceIcon;
  accent: Accent;
  className?: string;
}) {
  const Scene = SCENES[name];

  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={className}
    >
      <Scene accent={ACCENT_FILL[accent]} />
    </svg>
  );
}
