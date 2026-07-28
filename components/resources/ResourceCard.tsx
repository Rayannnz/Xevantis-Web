import type { Resource } from "@/lib/resources";
import { cn } from "@/lib/utils";
import { ResourceArtIcon } from "./ResourceArtIcon";

export function ResourceCard({
  resource,
  className,
}: {
  resource: Resource;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex w-full flex-col gap-4 overflow-hidden",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <div
          className={cn(
            "grid size-full place-items-center",
            "transition-transform duration-[720ms] ease-out-expo group-hover:scale-[1.04]",
            resource.art,
          )}
        >
          <ResourceArtIcon name={resource.icon} size={72} />
        </div>
      </div>

      <div className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-400">
          {resource.type}
        </span>
        <h3 className="font-display text-lg font-bold leading-[1.3] tracking-tight text-ink-900">
          {resource.title}
        </h3>
      </div>
    </article>
  );
}
