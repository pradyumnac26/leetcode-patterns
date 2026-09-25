"use client";

import { useCallback, useEffect, useState } from "react";

import {
  parseTheme,
  THEME_COLORS,
  THEME_STORAGE_KEY,
  themeCookieValue,
  type Theme,
} from "@/lib/theme";

export type { Theme };

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.cookie = themeCookieValue(theme);

  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", THEME_COLORS[theme]);
}

export function useTheme(initialTheme: Theme = "light") {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  useEffect(() => {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY);
    const stored = raw === null ? initialTheme : parseTheme(raw);
    applyTheme(stored);
    setThemeState(stored);
  }, [initialTheme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  return { theme, setTheme, toggleTheme };
}
