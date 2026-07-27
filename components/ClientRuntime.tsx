"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initMotion } from "@/lib/motion";
import { initSite } from "@/lib/site";

/**
 * The only client component in the tree.
 *
 * The design system's behaviour layer is DOM-driven by design — markup
 * declares intent with data-* attributes and the engines wire it up. That
 * keeps the layer portable (the static build in index.html uses the identical
 * contract) and keeps every section a server component with zero client JS.
 *
 * Re-running on `pathname` is what makes it work under the App Router: client
 * navigation swaps the DOM without a reload, so the engines must re-scan for
 * new hooks. Both return a teardown, so listeners and observers from the
 * previous route are removed before the next set is bound.
 */
export function ClientRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    const stopMotion = initMotion();
    const stopSite = initSite();
    return () => {
      stopMotion();
      stopSite();
    };
  }, [pathname]);

  return null;
}
