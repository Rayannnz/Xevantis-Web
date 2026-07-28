"use client";

import { motion, useScroll } from "framer-motion";

/** Reading-progress hairline pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[500] h-[3px] origin-left bg-[linear-gradient(90deg,var(--color-lilac-400),var(--color-blush-400),var(--color-sun-400))] pointer-events-none"
    />
  );
}
