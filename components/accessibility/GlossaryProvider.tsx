"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useI18n } from "@/lib/i18n/provider";
import { getGlosarioTerminos } from "@/lib/i18n/data";
import { GlossaryPopover } from "./GlossaryPopover";

interface ActiveTerm {
  slug: string;
  trigger: HTMLElement;
}

interface GlossaryContextValue {
  openTerm: (slug: string, trigger: HTMLElement) => void;
  closeTerm: () => void;
}

const GlossaryContext = createContext<GlossaryContextValue | null>(null);

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const terminos = useMemo(() => getGlosarioTerminos(t), [t]);
  const [active, setActive] = useState<ActiveTerm | null>(null);
  const previousTriggerRef = useRef<HTMLElement | null>(null);

  const closeTerm = useCallback(() => setActive(null), []);

  const openTerm = useCallback((slug: string, trigger: HTMLElement) => {
    setActive((prev) =>
      prev && prev.trigger === trigger && prev.slug === slug
        ? null
        : { slug, trigger }
    );
  }, []);

  useEffect(() => {
    const previous = previousTriggerRef.current;
    if (previous && previous !== active?.trigger) {
      previous.setAttribute("aria-expanded", "false");
      previous.classList.remove("glossary-term-active");
    }
    if (active) {
      active.trigger.setAttribute("aria-expanded", "true");
      active.trigger.classList.add("glossary-term-active");
      previousTriggerRef.current = active.trigger;
    } else {
      previousTriggerRef.current = null;
    }
  }, [active]);

  const value = useMemo(
    () => ({ openTerm, closeTerm }),
    [openTerm, closeTerm]
  );

  const activeTerm = active
    ? terminos.find((term) => term.slug === active.slug) ?? null
    : null;

  return (
    <GlossaryContext.Provider value={value}>
      {children}
      {active && activeTerm ? (
        <GlossaryPopover
          term={activeTerm}
          trigger={active.trigger}
          onClose={closeTerm}
        />
      ) : null}
    </GlossaryContext.Provider>
  );
}

export function useGlossary(): GlossaryContextValue {
  const ctx = useContext(GlossaryContext);
  if (!ctx) {
    throw new Error("useGlossary debe usarse dentro de GlossaryProvider");
  }
  return ctx;
}
