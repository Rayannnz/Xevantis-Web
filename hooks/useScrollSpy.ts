"use client";

import { useEffect, useState } from "react";

/**
 * Highlights the sidebar link for whichever section currently owns the middle
 * band of the viewport. The asymmetric root margin collapses the observation
 * area to a thin strip, so exactly one section is active at a time.
 */
export function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
