/* ==========================================================================
   VALENTISYS — SITE BEHAVIOUR (Next.js port of assets/js/site.js)

   Navigation, accordion, carousel, tabs, form demo. Accessible by default:
   real ARIA state, keyboard support, focus management.

   Like the motion engine, `initSite()` returns a teardown so nothing leaks
   across client-side navigations.
   ========================================================================== */

type Cleanup = () => void;

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector(sel) as T | null;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll(sel)) as unknown as T[];

/** Transient status toast. Exported so React components can use it directly. */
export function toast(message: string) {
  if (typeof document === "undefined") return;
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg><span></span>';
  const span = $("span", el);
  if (span) span.textContent = message;
  requestAnimationFrame(() => el!.classList.add("is-open"));
  const holder = el as HTMLElement & { _t?: ReturnType<typeof setTimeout> };
  clearTimeout(holder._t);
  holder._t = setTimeout(() => el!.classList.remove("is-open"), 3200);
}

export function initSite(): Cleanup {
  if (typeof window === "undefined") return () => {};

  const ac = new AbortController();
  const { signal } = ac;
  const observers: Array<{ disconnect: () => void }> = [];
  const timers: Array<ReturnType<typeof setInterval>> = [];
  const teardowns: Cleanup[] = [];

  /* ====================================================================
     MEGA MENU (hover on desktop, click/keyboard everywhere)
     ==================================================================== */
  function initMegaMenu() {
    $$("[data-menu]").forEach((wrap) => {
      const trigger = $("[data-menu-trigger]", wrap);
      const panel = $("[data-menu-panel]", wrap);
      if (!trigger || !panel) return;

      let closeTimer: ReturnType<typeof setTimeout>;
      const open = () => {
        clearTimeout(closeTimer);
        $$("[data-menu-panel].is-open").forEach((p) => {
          if (p === panel) return;
          p.classList.remove("is-open");
          $("[data-menu-trigger]", p.closest("[data-menu]")!)?.setAttribute("aria-expanded", "false");
        });
        panel.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      };
      const close = (delay = 0) => {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
          panel.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
        }, delay);
      };

      trigger.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          if (panel.classList.contains("is-open")) close();
          else open();
        },
        { signal }
      );
      wrap.addEventListener(
        "pointerenter",
        () => {
          if (window.matchMedia("(hover: hover)").matches) open();
        },
        { signal }
      );
      wrap.addEventListener(
        "pointerleave",
        () => {
          if (window.matchMedia("(hover: hover)").matches) close(140);
        },
        { signal }
      );
      wrap.addEventListener(
        "focusout",
        (e) => {
          if (!wrap.contains(e.relatedTarget as Node)) close();
        },
        { signal }
      );
      document.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Escape" && panel.classList.contains("is-open")) {
            close();
            trigger.focus();
          }
        },
        { signal }
      );
      teardowns.push(() => clearTimeout(closeTimer));
    });
  }

  /* ====================================================================
     MOBILE DRAWER
     ==================================================================== */
  function initDrawer() {
    const burger = $("[data-burger]");
    const drawer = $("[data-drawer]");
    if (!burger || !drawer) return;

    $$("a", drawer).forEach((a, i) => a.style.setProperty("--delay", `${90 + i * 55}ms`));

    const setOpen = (open: boolean) => {
      drawer.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      if (open) $("a", drawer)?.focus({ preventScroll: true });
    };

    burger.addEventListener(
      "click",
      () => setOpen(burger.getAttribute("aria-expanded") !== "true"),
      { signal }
    );
    $$("a", drawer).forEach((a) => a.addEventListener("click", () => setOpen(false), { signal }));
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape" && drawer.classList.contains("is-open")) {
          setOpen(false);
          burger.focus();
        }
      },
      { signal }
    );

    // Navigating away with the drawer open would leave the body scroll-locked.
    teardowns.push(() => {
      document.body.style.overflow = "";
      drawer.classList.remove("is-open");
    });
  }

  /* ====================================================================
     ACCORDION — data-accordion (data-accordion="multi" allows many open)
     ==================================================================== */
  function initAccordion() {
    $$("[data-accordion]").forEach((group) => {
      const multi = group.dataset.accordion === "multi";
      const items = $$(".acc", group);

      items.forEach((item, index) => {
        const trigger = $("button.acc__trigger", item);
        const panel = $(".acc__panel", item);
        if (!trigger || !panel) return;

        const id = panel.id || `acc-panel-${index}-${Math.random().toString(36).slice(2, 7)}`;
        panel.id = id;
        trigger.setAttribute("aria-controls", id);
        trigger.setAttribute("aria-expanded", String(item.classList.contains("is-open")));

        trigger.addEventListener(
          "click",
          () => {
            const willOpen = !item.classList.contains("is-open");
            if (!multi) {
              items.forEach((other) => {
                other.classList.remove("is-open");
                $("button.acc__trigger", other)?.setAttribute("aria-expanded", "false");
              });
            }
            item.classList.toggle("is-open", willOpen);
            trigger.setAttribute("aria-expanded", String(willOpen));
          },
          { signal }
        );

        trigger.addEventListener(
          "keydown",
          (e) => {
            const triggers = $$("button.acc__trigger", group);
            const i = triggers.indexOf(trigger);
            let next: HTMLElement | undefined;
            if (e.key === "ArrowDown") next = triggers[(i + 1) % triggers.length];
            if (e.key === "ArrowUp") next = triggers[(i - 1 + triggers.length) % triggers.length];
            if (e.key === "Home") next = triggers[0];
            if (e.key === "End") next = triggers[triggers.length - 1];
            if (next) {
              e.preventDefault();
              next.focus();
            }
          },
          { signal }
        );
      });
    });
  }

  /* ====================================================================
     CAROUSEL — prev/next, dots, drag, autoplay
     ==================================================================== */
  function initCarousel() {
    $$("[data-carousel]").forEach((root) => {
      const track = $("[data-carousel-track]", root);
      const slides = Array.from(track?.children || []) as HTMLElement[];
      const prev = $<HTMLButtonElement>("[data-carousel-prev]", root);
      const next = $<HTMLButtonElement>("[data-carousel-next]", root);
      const dotsWrap = $("[data-carousel-dots]", root);
      if (!track || !slides.length) return;

      let index = 0;
      let timer: ReturnType<typeof setInterval> | null = null;
      const interval = parseInt(root.dataset.autoplay || "0", 10);

      const perView = () => {
        const trackWidth = track.getBoundingClientRect().width;
        const slideWidth = slides[0].getBoundingClientRect().width;
        return Math.max(1, Math.round(trackWidth / (slideWidth + 20)));
      };
      const maxIndex = () => Math.max(0, slides.length - perView());

      function renderDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = "";
        for (let i = 0; i <= maxIndex(); i++) {
          const b = document.createElement("button");
          b.type = "button";
          b.setAttribute("aria-label", `Go to slide ${i + 1}`);
          b.setAttribute("aria-current", String(i === index));
          b.addEventListener("click", () => go(i), { signal });
          dotsWrap.appendChild(b);
        }
      }

      function go(i: number) {
        index = Math.min(Math.max(i, 0), maxIndex());
        const gap = parseFloat(getComputedStyle(track!).columnGap || "20") || 20;
        const step = slides[0].getBoundingClientRect().width + gap;
        track!.style.transform = `translate3d(${-index * step}px, 0, 0)`;
        slides.forEach((s, si) => {
          const visible = si >= index && si < index + perView();
          s.setAttribute("aria-hidden", String(!visible));
        });
        if (dotsWrap) {
          $$("button", dotsWrap).forEach((d, di) =>
            d.setAttribute("aria-current", String(di === index))
          );
        }
        if (prev) prev.disabled = index === 0;
        if (next) next.disabled = index === maxIndex();
      }

      prev?.addEventListener("click", () => go(index - 1), { signal });
      next?.addEventListener("click", () => go(index + 1), { signal });

      let startX: number | null = null;
      track.addEventListener(
        "pointerdown",
        (e) => {
          startX = e.clientX;
          track.setPointerCapture(e.pointerId);
        },
        { signal }
      );
      track.addEventListener(
        "pointerup",
        (e) => {
          if (startX === null) return;
          const dx = e.clientX - startX;
          if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
          startX = null;
        },
        { signal }
      );

      function play() {
        if (!interval) return;
        stop();
        timer = setInterval(() => go(index >= maxIndex() ? 0 : index + 1), interval);
        timers.push(timer);
      }
      function stop() {
        if (timer) clearInterval(timer);
        timer = null;
      }
      root.addEventListener("pointerenter", stop, { signal });
      root.addEventListener("pointerleave", play, { signal });
      root.addEventListener("focusin", stop, { signal });
      root.addEventListener("focusout", play, { signal });

      if ("IntersectionObserver" in window && interval) {
        const io = new IntersectionObserver(
          (entries) => entries.forEach((en) => (en.isIntersecting ? play() : stop())),
          { threshold: 0.25 }
        );
        io.observe(root);
        observers.push(io);
      }

      // Slide widths depend on fonts and CSS being settled, so recompute on
      // resize, on load, and whenever the track itself changes size.
      const relayout = () => {
        renderDots();
        go(Math.min(index, maxIndex()));
      };
      window.addEventListener("resize", relayout, { signal });
      window.addEventListener("load", relayout, { signal });
      if ("ResizeObserver" in window) {
        const ro = new ResizeObserver(relayout);
        ro.observe(track);
        observers.push(ro);
      }

      relayout();
      teardowns.push(stop);
    });
  }

  /* ====================================================================
     TABS
     ==================================================================== */
  function initTabs() {
    $$("[data-tabs]").forEach((root) => {
      const tabs = $$("[role='tab']", root);
      const panels = $$<HTMLElement>("[role='tabpanel']", root);
      if (!tabs.length) return;

      const activate = (i: number) => {
        tabs.forEach((t, ti) => {
          const on = ti === i;
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
          t.classList.toggle("is-active", on);
        });
        panels.forEach((p, pi) => {
          p.hidden = pi !== i;
          if (pi === i) p.classList.add("is-inview");
        });
      };

      tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => activate(i), { signal });
        tab.addEventListener(
          "keydown",
          (e) => {
            let n: number | null = null;
            if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
            if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
            if (n !== null) {
              e.preventDefault();
              activate(n);
              tabs[n].focus();
            }
          },
          { signal }
        );
      });

      activate(Math.max(0, tabs.findIndex((t) => t.getAttribute("aria-selected") === "true")));
    });
  }

  /* ====================================================================
     DEMO FORMS + COPY TO CLIPBOARD
     ==================================================================== */
  function initForms() {
    $$<HTMLFormElement>("[data-demo-form]").forEach((form) => {
      form.addEventListener(
        "submit",
        (e) => {
          e.preventDefault();
          const email = $<HTMLInputElement>("input[type='email']", form);
          if (email && !email.checkValidity()) {
            email.setAttribute("aria-invalid", "true");
            email.focus();
            return;
          }
          email?.removeAttribute("aria-invalid");
          form.reset();
          toast(form.dataset.demoForm || "Thanks — we'll be in touch within one business day.");
        },
        { signal }
      );
      $$("input, textarea", form).forEach((f) =>
        f.addEventListener("input", () => f.removeAttribute("aria-invalid"), { signal })
      );
    });
  }

  function initCopy() {
    document.addEventListener(
      "click",
      async (e) => {
        const trigger = (e.target as Element).closest?.<HTMLElement>("[data-copy]");
        if (!trigger) return;
        const value = trigger.dataset.copy!;
        try {
          await navigator.clipboard.writeText(value);
          toast(`Copied ${value}`);
        } catch {
          toast("Copy blocked by the browser — select the value manually.");
        }
      },
      { signal }
    );
  }

  /* ====================================================================
     SCROLL SPY for the in-page docs nav
     ==================================================================== */
  function initScrollSpy() {
    const links = $$<HTMLAnchorElement>("[data-spy] a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const map = new Map<Element, HTMLAnchorElement>();
    links.forEach((l) => {
      const target = document.getElementById(l.getAttribute("href")!.slice(1));
      if (target) map.set(target, l);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((l) => l.classList.remove("is-active"));
          map.get(en.target)?.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    map.forEach((_, section) => io.observe(section));
    observers.push(io);
  }

  /* ==================================================================== */
  initMegaMenu();
  initDrawer();
  initAccordion();
  initCarousel();
  initTabs();
  initForms();
  initCopy();
  initScrollSpy();

  return () => {
    ac.abort();
    observers.forEach((o) => o.disconnect());
    timers.forEach((t) => clearInterval(t));
    teardowns.forEach((fn) => fn());
  };
}
