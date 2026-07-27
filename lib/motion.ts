/* ==========================================================================
   VALENTISYS — MOTION ENGINE (Next.js port of assets/js/motion.js)

   Same declarative contract as the static build: markup declares intent with
   data-* attributes, this module wires observers/listeners and writes CSS
   custom properties. All timing/easing still lives in animations.css.

   Difference from the static version: `initMotion()` returns a teardown
   function. Under the App Router the runtime is mounted in an effect and
   re-runs on navigation, so every listener and observer must be removable or
   they accumulate on each route change.
   ========================================================================== */

type Cleanup = () => void;

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll(sel)) as unknown as T[];

export function initMotion(): Cleanup {
  if (typeof window === "undefined") return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const raf = window.requestAnimationFrame.bind(window);

  // Every listener registered through this signal is removed in one call.
  const ac = new AbortController();
  const { signal } = ac;
  const observers: Array<{ disconnect: () => void }> = [];
  const frames: number[] = [];
  const teardowns: Cleanup[] = [];

  /**
   * Run `fn` whenever the relationship between the viewport and the document
   * may have changed: scroll, resize, and — the easy one to miss — the
   * document growing after load as fonts swap in or images arrive. Late growth
   * can push an element back below the trigger line after the viewport has
   * already passed it, which is how content ends up stranded at opacity 0.
   */
  function onViewportChange(fn: () => void) {
    window.addEventListener("scroll", fn, { passive: true, signal });
    window.addEventListener("resize", fn, { passive: true, signal });
    window.addEventListener("load", fn, { signal });
    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(fn);
      ro.observe(document.documentElement);
      observers.push(ro);
    }
    if (document.fonts?.ready) document.fonts.ready.then(fn).catch(() => {});
    frames.push(raf(fn));
  }

  /* ====================================================================
     1. TEXT SPLITTING — runs before the reveal observer so generated
     .split-word nodes get their stagger delays.
     ==================================================================== */
  function splitText() {
    $$("[data-split]").forEach((el) => {
      if (el.dataset.splitDone) return;
      const mode = el.dataset.split || "words";
      const step = parseInt(el.dataset.stagger || "60", 10);
      const source = (el.textContent || "").replace(/\s+/g, " ").trim();
      const units = mode === "chars" ? source.split("") : source.split(" ");
      const cls = mode === "chars" ? "split-char" : "split-word";

      el.setAttribute("aria-label", source);
      el.textContent = "";

      const line = document.createElement("span");
      line.className = "split-line";

      units.forEach((unit, i) => {
        const holder = document.createElement("span");
        holder.className = cls;
        holder.setAttribute("aria-hidden", "true");
        holder.style.setProperty("--delay", `${i * step}ms`);
        holder.textContent = unit === " " ? " " : unit;
        line.appendChild(holder);
        if (mode !== "chars" && i < units.length - 1) {
          line.appendChild(document.createTextNode(" "));
        }
      });

      el.appendChild(line);
      el.dataset.splitDone = "true";
    });
  }

  /* ====================================================================
     2. SCROLL REVEAL
     ==================================================================== */
  function initReveal() {
    $$("[data-stagger]").forEach((parent) => {
      const step = parseInt(parent.dataset.stagger || "", 10) || 80;
      $$("[data-reveal]", parent).forEach((kid, i) => {
        if (!kid.dataset.delay) kid.style.setProperty("--delay", `${i * step}ms`);
      });
    });

    $$("[data-delay]").forEach((el) => {
      el.style.setProperty("--delay", `${el.dataset.delay}ms`);
    });

    const targets = $$("[data-reveal], [data-split], .mark--underline");

    if (!("IntersectionObserver" in window) || reduced.matches) {
      targets.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          if ((entry.target as HTMLElement).dataset.revealRepeat === undefined) {
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    targets.forEach((el) => io.observe(el));
    observers.push(io);

    // Safety net. IntersectionObserver only reports what it samples on a
    // rendered frame, which leaves three ways for content to strand at
    // opacity 0: the page never composited (background tab), the viewport
    // jumped clean past an element between samples (anchor link, restored
    // scroll, scrollbar drag), or the document grew after the viewport had
    // already passed it. This sweep reveals anything at or above the trigger
    // line regardless, using the same -12% line as the observer.
    let pending = targets.filter((el) => el.dataset.revealRepeat === undefined);
    onViewportChange(() => {
      if (!pending.length) return;
      const line = window.innerHeight * 0.88;
      pending = pending.filter((el) => {
        if (el.classList.contains("is-inview")) return false;
        if (el.getBoundingClientRect().top < line) {
          el.classList.add("is-inview");
          return false;
        }
        return true;
      });
    });
  }

  /* ====================================================================
     3. MARQUEE — duplicate the track so the -50% loop is seamless.
     ==================================================================== */
  function initMarquee() {
    $$("[data-marquee] .marquee__track").forEach((track) => {
      if (track.dataset.cloned) return;
      Array.from(track.children).forEach((node) => {
        const clone = node.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
      track.dataset.cloned = "true";
    });
  }

  /* ====================================================================
     4. SCROLL-LINKED: progress bar, parallax, sticky header.
     One rAF loop, one scroll listener — no layout thrash.
     ==================================================================== */
  function initScroll() {
    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    const header = document.querySelector<HTMLElement>("[data-header]");
    const parallaxEls = $$("[data-parallax]").map((el) => ({
      el,
      speed: parseFloat(el.dataset.parallax || "") || -0.15,
    }));

    let lastY = window.scrollY;
    let ticking = false;

    function frame() {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;

      if (bar) bar.style.setProperty("--progress", String(docH > 0 ? clamp(y / docH, 0, 1) : 0));

      if (header) {
        header.classList.toggle("is-stuck", y > 12);
        const goingDown = y > lastY && y > 320;
        header.classList.toggle("is-hidden", goingDown && !header.dataset.pinned);
      }

      if (!reduced.matches) {
        const vh = window.innerHeight;
        parallaxEls.forEach(({ el, speed }) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -200 || rect.top > vh + 200) return;
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.setProperty("--py", `${(progress * speed * 100).toFixed(2)}px`);
          el.style.setProperty("--p", clamp(0.5 - progress, 0, 1).toFixed(3));
        });
      }

      lastY = y;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        frames.push(raf(frame));
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true, signal });
    window.addEventListener("resize", onScroll, { passive: true, signal });
    frame();

    // Leaving the page with the header mid-hide would strand it off-screen.
    teardowns.push(() => header?.classList.remove("is-hidden", "is-stuck"));
  }

  /* ====================================================================
     5. COUNTERS
     ==================================================================== */
  function initCounters() {
    const els = $$("[data-count]");
    if (!els.length) return;

    const run = (el: HTMLElement, instant?: boolean) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "true";

      const target = parseFloat(el.dataset.count || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const duration = parseInt(el.dataset.duration || "1600", 10);
      const fmt = (n: number) =>
        prefix + n.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;

      // A counter already off-screen has no animation to show; jump it to the
      // final value so it can never be left reading "0".
      if (reduced.matches || instant) {
        el.textContent = fmt(target);
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const t = clamp((now - start) / duration, 0, 1);
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
        el.textContent = fmt(target * eased);
        if (t < 1) frames.push(raf(tick));
      };
      frames.push(raf(tick));
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => run(el));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          run(e.target as HTMLElement);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
    observers.push(io);

    // Same catch-up as the reveal engine: a skipped counter left showing "0"
    // reads as a broken page, not as a missed animation.
    let pending = els.slice();
    onViewportChange(() => {
      if (!pending.length) return;
      const vh = window.innerHeight;
      pending = pending.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top > vh) return true;
        run(el, r.bottom < 0);
        io.unobserve(el);
        return false;
      });
    });
  }

  /* ====================================================================
     6. POINTER EFFECTS — tilt, magnetic, spotlight. Fine pointers only.
     ==================================================================== */
  function initPointer() {
    if (!finePointer.matches || reduced.matches) return;

    $$("[data-tilt]").forEach((el) => {
      const max = parseFloat(el.dataset.tilt || "") || 8;
      el.addEventListener(
        "pointermove",
        (e) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          el.style.setProperty("--ry", `${((px - 0.5) * max * 2).toFixed(2)}deg`);
          el.style.setProperty("--rx", `${((0.5 - py) * max * 2).toFixed(2)}deg`);
          el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
          el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
        },
        { signal }
      );
      el.addEventListener(
        "pointerleave",
        () => {
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
        },
        { signal }
      );
    });

    $$("[data-spotlight]:not([data-tilt])").forEach((el) => {
      el.addEventListener(
        "pointermove",
        (e) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
          el.style.setProperty("--my", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
        },
        { signal }
      );
    });

    $$("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || "") || 0.32;
      const radius = 90;
      el.addEventListener(
        "pointermove",
        (e) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          const dist = Math.hypot(dx, dy);
          const pull = clamp(1 - dist / (Math.max(r.width, r.height) / 2 + radius), 0, 1);
          el.style.setProperty("--tx", `${(dx * strength * pull).toFixed(2)}px`);
          el.style.setProperty("--ty", `${(dy * strength * pull).toFixed(2)}px`);
        },
        { signal }
      );
      el.addEventListener(
        "pointerleave",
        () => {
          el.style.setProperty("--tx", "0px");
          el.style.setProperty("--ty", "0px");
        },
        { signal }
      );
    });
  }

  /* ====================================================================
     7. CURSOR BLOB — smoothed follower that swells over interactive things.
     ==================================================================== */
  function initCursor() {
    if (!finePointer.matches || reduced.matches) return;

    const blob = document.createElement("div");
    blob.className = "cursor-blob";
    blob.setAttribute("aria-hidden", "true");
    document.body.appendChild(blob);

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let active = false;
    let alive = true;

    window.addEventListener(
      "pointermove",
      (e) => {
        tx = e.clientX;
        ty = e.clientY;
        if (!active) {
          active = true;
          cx = tx;
          cy = ty;
          blob.classList.add("is-active");
        }
      },
      { passive: true, signal }
    );

    document.addEventListener("pointerleave", () => blob.classList.remove("is-active"), { signal });

    const hoverables = "a, button, [data-cursor='hover'], input, .card--hover, summary";
    document.addEventListener(
      "pointerover",
      (e) => {
        if ((e.target as Element).closest?.(hoverables)) blob.classList.add("is-hover");
      },
      { signal }
    );
    document.addEventListener(
      "pointerout",
      (e) => {
        if ((e.target as Element).closest?.(hoverables)) blob.classList.remove("is-hover");
      },
      { signal }
    );

    (function loop() {
      if (!alive) return;
      cx = lerp(cx, tx, 0.16);
      cy = lerp(cy, ty, 0.16);
      blob.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf(loop);
    })();

    teardowns.push(() => {
      alive = false;
      blob.remove();
    });
  }

  /* ==================================================================== */
  splitText();
  initReveal();
  initMarquee();
  initScroll();
  initCounters();
  initPointer();
  initCursor();
  document.documentElement.classList.add("motion-ready");

  return () => {
    ac.abort();
    observers.forEach((o) => o.disconnect());
    frames.forEach((id) => cancelAnimationFrame(id));
    teardowns.forEach((fn) => fn());
    document.documentElement.classList.remove("motion-ready");
  };
}
