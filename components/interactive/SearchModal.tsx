"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  titulo: string;
  excerpt: string;
  href: string;
  bloque: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const abortRef = useRef<AbortController | null>(null);

  const handleClose = useCallback(() => {
    setQuery("");
    setResults([]);
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const handleQueryChange = useCallback(async (value: string) => {
    setQuery(value);
    setSelectedIndex(0);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(value)}`,
        { signal: controller.signal }
      );
      const data = await res.json();
      if (!controller.signal.aborted) {
        setResults(data.results || []);
      }
    } catch {
      if (!controller.signal.aborted) {
        setResults([]);
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, []);

  const handleSelect = useCallback(
    (href: string) => {
      router.push(href);
      handleClose();
    },
    [router, handleClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        handleSelect(results[selectedIndex].href);
      } else if (e.key === "Escape") {
        handleClose();
      }
    },
    [results, selectedIndex, handleSelect, handleClose]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-lg mx-4 bg-bg border border-border rounded-2xl shadow-lg overflow-hidden animate-slide-up">
        <div className="flex items-center gap-3 px-4 h-14 border-b border-border">
          <Search className="w-5 h-5 text-fg-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar en Atlas IA..."
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-fg placeholder:text-fg-muted outline-none text-sm"
          />
          {query && (
            <button
              onClick={() => handleQueryChange("")}
              className="p-1 rounded hover:bg-bg-secondary text-fg-muted"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex px-1.5 py-0.5 rounded text-2xs text-fg-muted bg-bg-secondary border border-border">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-5 h-5 text-fg-muted animate-spin" />
            </div>
          )}

          {!loading && query.length >= 2 && results.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-fg-muted text-sm">
                No se encontraron resultados para &ldquo;{query}&rdquo;
              </p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <ul className="py-2">
              {results.map((result, index) => (
                <li key={result.href}>
                  <button
                    onClick={() => handleSelect(result.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 flex items-start gap-3 transition-colors",
                      index === selectedIndex
                        ? "bg-primary-light"
                        : "hover:bg-bg-secondary"
                    )}
                  >
                    <FileText className="w-4 h-4 text-fg-muted mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-fg truncate">
                        {result.titulo}
                      </p>
                      <p className="text-xs text-fg-muted mt-0.5">
                        {result.bloque}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-fg-muted mt-0.5 shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {query.length < 2 && (
            <div className="py-8 text-center">
              <p className="text-fg-muted text-sm">
                Escribe al menos 2 caracteres para buscar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
