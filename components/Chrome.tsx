"use client";

import type { Theme } from "@/hooks/useTheme";

type ChromeProps = {
  theme: Theme;
  onToggleTheme: () => void;
  onShuffle?: () => void;
};

export function Chrome({ theme, onToggleTheme, onShuffle }: ChromeProps) {
  return (
    <header className="chrome" aria-label="App controls">
      {onShuffle ? (
        <button
          type="button"
          className="chrome__btn chrome__btn--ghost"
          onClick={onShuffle}
          aria-label="Shuffle cards"
        >
          Shuffle
        </button>
      ) : null}
      <button
        type="button"
        className="chrome__btn"
        onClick={onToggleTheme}
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}
