type Watcher = () => void;

const watchers = new Set<Watcher>();
let bound = false;

const runAll = () => {
  for (const watcher of watchers) watcher();
};

/**
 * One shared set of listeners for every scroll-reveal on the page, rather than
 * a pair per element.
 *
 * Fires whenever the relationship between the viewport and the document may
 * have changed: scrolling, resizing, and — the easy one to miss — the document
 * growing after load as web fonts swap in or images arrive. Late growth can
 * push an element back below the trigger line after the viewport has already
 * passed it, which is how content ends up stranded.
 */
function bind() {
  if (bound || typeof window === "undefined") return;
  bound = true;

  window.addEventListener("scroll", runAll, { passive: true });
  window.addEventListener("resize", runAll, { passive: true });
  window.addEventListener("load", runAll);
  document.fonts?.ready.then(runAll).catch(() => {});
}

export function watchViewport(watcher: Watcher) {
  bind();
  watchers.add(watcher);
  const frame = requestAnimationFrame(watcher);

  return () => {
    cancelAnimationFrame(frame);
    watchers.delete(watcher);
  };
}
