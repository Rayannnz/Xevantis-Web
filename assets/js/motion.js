/* ==========================================================================
   VALENTYSIS — MOTION ENGINE
   Zero dependencies. Declarative: you add data-* attributes in markup, this
   file wires the observers/listeners and writes CSS custom properties.
   All timing/easing lives in animations.css so motion stays designable.

   Hooks
   -----
   data-reveal="up|fade|scale|left|right|blur|clip|pop"   scroll reveal
   data-delay="120"                                        ms, per element
   data-stagger="80"                                       on a parent
   data-split="words|chars"                                headline reveal
   data-parallax="-0.15"                                   scroll-linked Y
   data-marquee                                            duplicates track
   data-tilt="10"                                          3D pointer tilt
   data-magnetic="0.3"                                     cursor attraction
   data-spotlight                                          pointer glow
   data-count="1200" data-suffix="+" data-decimals="0"     counter
   data-cursor="hover"                                     grows cursor blob
   ========================================================================== */

(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const raf = window.requestAnimationFrame.bind(window);

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const lerp = (a, b, t) => a + (b - a) * t;
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /**
   * Run `fn` whenever the relationship between the viewport and the document
   * may have changed: scrolling, resizing, and — the easy one to miss — the
   * document growing after load as web fonts swap in or images arrive. Late
   * growth can push an element back below the trigger line after the viewport
   * has already passed it, which is how content ends up stranded.
   */
  function onViewportChange(fn) {
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn, { passive: true });
    window.addEventListener("load", fn);
    if ("ResizeObserver" in window) {
      new ResizeObserver(fn).observe(document.documentElement);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fn).catch(() => {});
    }
    raf(fn);
  }

  /* ======================================================================
     1. TEXT SPLITTING — must run before the reveal observer so the
     generated .split-word nodes get their stagger delays.
     ====================================================================== */
  function splitText() {
    $$("[data-split]").forEach((el) => {
      if (el.dataset.splitDone) return;
      const mode = el.dataset.split || "words";
      const step = parseInt(el.dataset.stagger || "60", 10);
      const source = el.textContent.replace(/\s+/g, " ").trim();
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
        holder.style.setProperty("--delay", i * step + "ms");
        holder.textContent = unit === " " ? " " : unit;
        line.appendChild(holder);
        if (mode !== "chars" && i < units.length - 1) {
          line.appendChild(document.createTextNode(" "));
        }
      });

      el.appendChild(line);
      el.dataset.splitDone = "true";
    });
  }

  /* ======================================================================
     2. SCROLL REVEAL
     ====================================================================== */
  function initReveal() {
    // Parent-driven stagger: children inherit an incrementing --delay.
    $$("[data-stagger]").forEach((parent) => {
      const step = parseInt(parent.dataset.stagger, 10) || 80;
      const kids = $$("[data-reveal]", parent);
      kids.forEach((kid, i) => {
        if (!kid.dataset.delay) kid.style.setProperty("--delay", i * step + "ms");
      });
    });

    $$("[data-delay]").forEach((el) => {
      el.style.setProperty("--delay", el.dataset.delay + "ms");
    });

    const targets = $$("[data-reveal], [data-split], .mark--underline, .is-inview-target");

    if (!("IntersectionObserver" in window) || reduced.matches) {
      targets.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          if (entry.target.dataset.revealRepeat === undefined) {
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    targets.forEach((el) => io.observe(el));

    // Safety net. IntersectionObserver only reports what it samples on a
    // rendered frame, which leaves three ways for content to strand at
    // opacity 0: the page never composited (background tab), the viewport
    // jumped clean past an element between samples (anchor link, restored
    // scroll, scrollbar drag), or the document grew after the viewport had
    // already passed the element. This sweep reveals anything at or above the
    // trigger line regardless, using the same -12% line as the observer so
    // the timing matches.
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

  /* ======================================================================
     3. MARQUEE — duplicate the track content so the -50% loop is seamless.
     ====================================================================== */
  function initMarquee() {
    $$("[data-marquee] .marquee__track").forEach((track) => {
      if (track.dataset.cloned) return;
      const items = Array.from(track.children);
      items.forEach((node) => {
        const clone = node.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
      track.dataset.cloned = "true";
    });
  }

  /* ======================================================================
     4. SCROLL-LINKED: progress bar, parallax, sticky header.
     One rAF loop, one scroll listener — no layout thrash.
     ====================================================================== */
  function initScroll() {
    const bar = document.querySelector(".scroll-progress");
    const header = document.querySelector("[data-header]");
    const parallaxEls = $$("[data-parallax]").map((el) => ({
      el,
      speed: parseFloat(el.dataset.parallax) || -0.15,
    }));

    let lastY = window.scrollY;
    let ticking = false;

    function frame() {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;

      if (bar) bar.style.setProperty("--progress", docH > 0 ? clamp(y / docH, 0, 1) : 0);

      if (header) {
        header.classList.toggle("is-stuck", y > 12);
        // Hide on scroll down, reveal on scroll up — but never near the top.
        const goingDown = y > lastY && y > 320;
        header.classList.toggle("is-hidden", goingDown && !header.dataset.pinned);
      }

      if (!reduced.matches) {
        const vh = window.innerHeight;
        parallaxEls.forEach(({ el, speed }) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -200 || rect.top > vh + 200) return;
          // -1 → 1 across the viewport, 0 when centred.
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.setProperty("--py", (progress * speed * 100).toFixed(2) + "px");
          el.style.setProperty("--p", clamp(0.5 - progress, 0, 1).toFixed(3));
        });
      }

      lastY = y;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        raf(frame);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    frame();
  }

  /* ======================================================================
     5. COUNTERS — count up once, on entry.
     ====================================================================== */
  function initCounters() {
    const els = $$("[data-count]");
    if (!els.length) return;

    const run = (el, instant) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "true";

      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const duration = parseInt(el.dataset.duration || "1600", 10);

      // A counter that is already off-screen has no animation to show; jump it
      // to the final value so it can never be left reading "0".
      if (reduced.matches || instant) {
        el.textContent =
          prefix +
          target.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          suffix;
        return;
      }

      const start = performance.now();
      const tick = (now) => {
        const t = clamp((now - start) / duration, 0, 1);
        // easeOutExpo
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        el.textContent =
          prefix + (target * eased).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
        if (t < 1) raf(tick);
      };
      raf(tick);
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => run(el));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          run(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));

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

  /* ======================================================================
     6. POINTER EFFECTS — tilt, magnetic, spotlight. Fine pointers only.
     ====================================================================== */
  function initPointer() {
    if (!finePointer.matches || reduced.matches) return;

    // --- 3D tilt ---
    $$("[data-tilt]").forEach((el) => {
      const max = parseFloat(el.dataset.tilt) || 8;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty("--ry", ((px - 0.5) * max * 2).toFixed(2) + "deg");
        el.style.setProperty("--rx", ((0.5 - py) * max * 2).toFixed(2) + "deg");
        el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      });
      el.addEventListener("pointerleave", () => {
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      });
    });

    // --- Spotlight only (no tilt) ---
    $$("[data-spotlight]:not([data-tilt])").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
        el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
      });
    });

    // --- Magnetic buttons ---
    $$("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic) || 0.32;
      const radius = 90;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        const pull = clamp(1 - dist / (Math.max(r.width, r.height) / 2 + radius), 0, 1);
        el.style.setProperty("--tx", (dx * strength * pull).toFixed(2) + "px");
        el.style.setProperty("--ty", (dy * strength * pull).toFixed(2) + "px");
      });
      el.addEventListener("pointerleave", () => {
        el.style.setProperty("--tx", "0px");
        el.style.setProperty("--ty", "0px");
      });
    });
  }

  /* ======================================================================
     7. CURSOR BLOB — smoothed follower that swells over interactive things.
     ====================================================================== */
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
      { passive: true }
    );

    document.addEventListener("pointerleave", () => blob.classList.remove("is-active"));

    const hoverables = "a, button, [data-cursor='hover'], input, .card--hover, summary";
    document.addEventListener("pointerover", (e) => {
      if (e.target.closest(hoverables)) blob.classList.add("is-hover");
    });
    document.addEventListener("pointerout", (e) => {
      if (e.target.closest(hoverables)) blob.classList.remove("is-hover");
    });

    (function loop() {
      cx = lerp(cx, tx, 0.16);
      cy = lerp(cy, ty, 0.16);
      blob.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf(loop);
    })();
  }

  /* ======================================================================
     8. BOOT
     ====================================================================== */
  function init() {
    splitText();
    initReveal();
    initMarquee();
    initScroll();
    initCounters();
    initPointer();
    initCursor();
    document.documentElement.classList.add("motion-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  // Expose for pages that inject markup after load.
  window.VMotion = { refresh: init, splitText, initReveal, initMarquee };
})();
