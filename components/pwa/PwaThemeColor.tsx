"use client";

import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

const THEME_COLOR_LIGHT = "#fafafa";
const THEME_COLOR_DARK = "#0f172a";

export function PwaThemeColor() {
  const { resolved } = useTheme();

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );
    if (meta) meta.content = resolved === "dark" ? THEME_COLOR_DARK : THEME_COLOR_LIGHT;
  }, [resolved]);

  return null;
}
