import type { Resource } from "@/lib/resources";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { ResourceArtIcon } from "./ResourceArtIcon";

function FeaturedPrimary({ resource }: { resource: Resource }) {
  return (
    <article className="group flex h-full flex-col gap-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl min-[901px]:aspect-[16/11] min-[901px]:flex-1">
        <div
          className={cn(
            "grid size-full place-items-center",
            "transition-transform duration-[720ms] ease-out-expo group-hover:scale-[1.03]",
            resource.art,
          )}
        >
          <ResourceArtIcon name={resource.icon} size={96} />
        </div>
      </div>
      <div className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-400">
          {resource.type}
        </span>
        <h2 className="font-display text-2xl font-bold leading-[1.2] tracking-tight text-ink-900 min-[901px]:text-3xl">
          {resource.title}
        </h2>
      </div>
    </article>
  );
}

function FeaturedSecondary({ resource }: { resource: Resource }) {
  return (
    <article className="group grid grid-cols-[1fr_auto] items-center gap-5 border-t border-ink-900/10 py-5 first:border-t-0 first:pt-0 last:pb-0 min-[901px]:gap-6">
      <div className="grid gap-2">
        <h3 className="font-display text-lg font-bold leading-[1.3] tracking-tight text-ink-900">
          {resource.title}
        </h3>
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-400">
          {resource.type}
        </span>
      </div>
      <div
        className={cn(
          "size-[5.5rem] shrink-0 overflow-hidden rounded-lg min-[901px]:size-[6.5rem]",
          "transition-transform duration-[720ms] ease-out-expo group-hover:scale-[1.04]",
          resource.art,
          "grid place-items-center",
        )}
      >
        <ResourceArtIcon name={resource.icon} size={40} />
      </div>
    </article>
  );
}

export function FeaturedResources({
  primary,
  secondary,
}: {
  primary: Resource;
  secondary: Resource[];
}) {
  return (
    <section className="pb-[clamp(2rem,1.5rem+2vw,3.5rem)]">
      <Container width="wide">
        <Reveal
          className={cn(
            "grid gap-8",
            "min-[901px]:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] min-[901px]:gap-10 min-[901px]:items-stretch",
          )}
        >
          <FeaturedPrimary resource={primary} />
          <div className="flex flex-col justify-center border-ink-900/10 min-[901px]:border-l min-[901px]:pl-10">
            {secondary.map((resource) => (
              <FeaturedSecondary key={resource.slug} resource={resource} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
