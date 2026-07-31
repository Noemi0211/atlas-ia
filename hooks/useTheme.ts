"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Theme } from "@/lib/types";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem("atlas-theme") as Theme) || "system";
}

function subscribeToMediaQuery(callback: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMediaQuerySnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getMediaQueryServerSnapshot() {
  return false;
}

function computeResolved(theme: Theme, prefersDark: boolean): "light" | "dark" {
  if (theme === "system") return prefersDark ? "dark" : "light";
  return theme;
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const prefersDark = useSyncExternalStore(
    subscribeToMediaQuery,
    getMediaQuerySnapshot,
    getMediaQueryServerSnapshot
  );

  const resolved = computeResolved(theme, prefersDark);

  useEffect(() => {
    if (resolved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [resolved]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("atlas-theme", newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolved === "dark" ? "light" : "dark");
  }, [resolved, setTheme]);

  return { theme, resolved, setTheme, toggleTheme };
}
