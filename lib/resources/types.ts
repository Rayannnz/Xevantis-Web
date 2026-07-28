/** Resource type taxonomy for filters and badges. */
export type ResourceType =
  | "Blog"
  | "Playbook"
  | "Benchmark"
  | "Interview"
  | "White paper";

export type ResourceService =
  | "Customer support"
  | "IT outsourcing"
  | "Finance"
  | "HR"
  | "Sales & marketing";

export type ResourceIndustry =
  | "Consumer goods"
  | "Retail"
  | "SaaS"
  | "Healthcare"
  | "Finance";

/** Icon key resolved to an SVG in the card/featured components. */
export type ResourceIcon =
  | "person"
  | "chart"
  | "ledger"
  | "chat"
  | "beaker"
  | "rocket"
  | "layers"
  | "gauge"
  | "globe"
  | "users";

export interface Resource {
  slug: string;
  title: string;
  date: string;
  type: ResourceType;
  service: ResourceService;
  industry: ResourceIndustry;
  /** Gradient utility classes for the art panel. */
  art: string;
  icon: ResourceIcon;
  /** Featured band: `"primary"` is the large tile; `"secondary"` stacks on the right. */
  featured?: "primary" | "secondary";
}

export interface ResourceFilters {
  type: ResourceType | "";
  service: ResourceService | "";
  industry: ResourceIndustry | "";
  query: string;
}
