"use client";

import { useEffect, useId, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  BookMarked,
  BookOpen,
  Boxes,
  Brain,
  Cpu,
  MessageSquare,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n/provider";
import type { GlosarioTerminoLocalizado } from "@/lib/i18n/data";

const FOCUSABLE_SELECTOR =
  'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const CATEGORIA_ICONOS: Record<string, LucideIcon> = {
  conceptos: BookOpen,
  ml: Brain,
  modelos: Cpu,
  tecnico: Settings,
  prompting: MessageSquare,
  herramientas: Boxes,
  limitaciones: AlertTriangle,
};

interface GlossaryPopoverProps {
  term: GlosarioTerminoLocalizado;
  trigger: HTMLElement | null;
  onClose: () => void;
}

export function GlossaryPopover({
  term,
  trigger,
  onClose,
}: GlossaryPopoverProps) {
  const { t } = useI18n();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();
  const CatIcon = CATEGORIA_ICONOS[term.categoriaKey] ?? BookMarked;

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const position = () => {
      const mobile = window.matchMedia("(max-width: 639px)").matches;
      container.style.visibility = "visible";
      if (mobile) {
        container.style.left = "";
        container.style.top = "";
        return;
      }
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const gap = 8;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      let top = rect.bottom + gap;
      if (top + height > window.innerHeight - 12) {
        top = Math.max(12, rect.top - height - gap);
      }
      let left = rect.left;
      left = Math.max(12, Math.min(left, window.innerWidth - width - 12));
      container.style.left = `${left}px`;
      container.style.top = `${top}px`;
    };

    position();
    window.addEventListener("resize", position);
    window.addEventListener("scroll", onClose, true);
    closeBtnRef.current?.focus();

    return () => {
      window.removeEventListener("resize", position);
      window.removeEventListener("scroll", onClose, true);
      if (trigger) trigger.focus();
    };
  }, [trigger, onClose]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const container = containerRef.current;
      const target = event.target as Node;
      if (container && container.contains(target)) return;
      if (trigger && (target === trigger || trigger.contains(target))) return;
      onClose();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [trigger, onClose]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== "Tab" || !containerRef.current) return;
    const focusables = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    ).filter((el) => !el.hasAttribute("disabled"));
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (event.shiftKey) {
      if (active === first) {
        event.preventDefault();
        last.focus();
      }
    } else if (active === last || !containerRef.current.contains(active)) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleViewFull = () => {
    onClose();
    window.dispatchEvent(
      new CustomEvent("atlas:glossary-deeplink", { detail: term.slug })
    );
    router.push(`/glosario?termino=${encodeURIComponent(term.slug)}`);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 sm:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        aria-describedby={descId}
        onKeyDown={handleKeyDown}
        className="fixed z-50 invisible inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-auto sm:w-80 max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-bg shadow-xl"
      >
        <div className="p-4">
          <h3
            id={titleId}
            className="text-base font-semibold text-fg pr-2"
          >
            {term.termino}
          </h3>

          <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded text-xs bg-bg-secondary text-fg-muted border border-border">
            <CatIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {t.glossaryPopover.categoryLabel}: {term.categoria}
          </span>

          <p
            id={descId}
            className="mt-3 text-sm text-fg-secondary leading-relaxed"
          >
            {term.definicion}
          </p>

          <div className="mt-4 flex justify-end gap-2">
            <Button
              ref={closeBtnRef}
              variant="secondary"
              size="sm"
              onClick={onClose}
            >
              {t.glossaryPopover.close}
            </Button>
            <Button variant="primary" size="sm" onClick={handleViewFull}>
              {t.glossaryPopover.viewFullDefinition}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
