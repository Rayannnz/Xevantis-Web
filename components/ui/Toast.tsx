"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "@/components/icons";

const EASE_OUT_BACK = [0.34, 1.56, 0.64, 1] as const;
const DISMISS_AFTER = 3200;

const ToastContext = createContext<(message: string) => void>(() => {});

export const useToast = () => useContext(ToastContext);

/** Single live region for the whole app, so announcements never stack up. */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  const show = useCallback((next: string) => {
    setMessage(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMessage(null), DISMISS_AFTER);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <AnimatePresence>
        {message ? (
          <motion.div
            role="status"
            initial={{ y: "140%" }}
            animate={{ y: "0%" }}
            exit={{ y: "140%" }}
            transition={{ duration: 0.48, ease: EASE_OUT_BACK }}
            className="fixed bottom-8 left-1/2 z-[500] flex -translate-x-1/2 items-center gap-[0.65rem] rounded-pill bg-ink-900 px-5 py-[0.85rem] text-sm text-paper-050 shadow-lg"
          >
            <Check className="size-4 shrink-0" />
            <span>{message}</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}
