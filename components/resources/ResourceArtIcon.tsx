import type { ReactNode } from "react";
import type { ResourceIcon } from "@/lib/resources";
import {
  BarChart,
  Beaker,
  Chat,
  Gauge,
  Globe,
  Layers,
  LedgerOutline,
  PersonOutline,
  Rocket,
  Route,
  ShieldCheck,
  Users,
} from "@/components/icons";

type IconProps = { width?: number; height?: number; className?: string };

const ICONS: Record<ResourceIcon, (props: IconProps) => ReactNode> = {
  person: (p) => <PersonOutline {...p} />,
  chart: (p) => <BarChart {...p} />,
  ledger: (p) => <LedgerOutline {...p} />,
  chat: (p) => <Chat {...p} />,
  beaker: (p) => <Beaker {...p} />,
  rocket: (p) => <Rocket {...p} />,
  layers: (p) => <Layers {...p} />,
  gauge: (p) => <Gauge {...p} />,
  globe: (p) => <Globe {...p} />,
  users: (p) => <Users {...p} />,
  route: (p) => <Route {...p} />,
  shield: (p) => <ShieldCheck {...p} />,
};

export function ResourceArtIcon({
  name,
  size = 64,
  className,
}: {
  name: ResourceIcon;
  size?: number;
  className?: string;
}) {
  return ICONS[name]({ width: size, height: size, className });
}
