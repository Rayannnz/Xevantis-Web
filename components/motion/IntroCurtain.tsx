"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

/**
 * The intro belongs to the document load, not the route. Mounted in the root
 * layout so every route gets it once. Module scope is what gives it that
 * lifetime: it survives soft navigations (so the curtain does not replay on
 * every client-side hop) and resets on a real reload, which is exactly when
 * the effect is worth showing again.
 */
let played = false;

const WORDMARK = "Valentisys";

/**
 * Load screen: the wordmark types itself onto the paper field, then the logo
 * violet and the sun accent chase each other across it and the whole thing
 * retreats into the bottom-left corner.
 *
 * Corner-anchored `clip-path: circle()` sweeps, the same mechanism the
 * reference site uses. Anchoring the radius to a corner rather than the centre
 * is the point — the visitor sees an arc travelling across the screen, never a
 * circle closing in on itself.
 *
 * Deliberately pure CSS on server-rendered markup, sequenced with delays rather
 * than callbacks: the first frame has to be the finished load screen, and
 * anything gated on hydration or on framer-motion loading shows the page first,
 * which is the opposite effect. `globals.css` owns the whole timeline.
 */
export function IntroCurtain() {
  const [showing, setShowing] = useState(!played);

  if (!showing) return null;

  return (
    <div
      aria-hidden
      // motion-reduce:hidden rather than leaning on the global animation kill:
      // every stage here is placed by animation-delay, and the `duration`
      // override does not touch delays — the screen would just sit there.
      // pointer-events-none keeps a click during the ~2s on target anyway.
      className="pointer-events-none fixed inset-0 z-[900] animate-curtain-out bg-paper-100 motion-reduce:hidden"
      onAnimationEnd={(event) => {
        // Every glyph and both sweeps bubble through here on their way out.
        if (event.target !== event.currentTarget) return;
        played = true;
        setShowing(false);
      }}
    >
      <p className="absolute inset-0 flex items-center justify-center font-logo text-5xl font-semibold tracking-tight text-brand-violet">
        {Array.from(WORDMARK, (glyph, index) => (
          <span
            key={index}
            style={{ "--i": index } as CSSProperties}
            className="inline-block animate-type-in [animation-delay:calc(var(--i)*var(--type-step))]"
          >
            {glyph}
          </span>
        ))}
      </p>

      <span className="absolute inset-0 block animate-curtain-in bg-brand-violet" />
      <span className="absolute inset-0 block animate-curtain-in-late bg-sun-300" />
    </div>
  );
}
