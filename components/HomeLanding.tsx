"use client";

import Link from "next/link";

import { Chrome } from "@/components/Chrome";
import { HomeEditorShowcase } from "@/components/HomeEditorShowcase";
import { useTheme } from "@/hooks/useTheme";
import type { Theme } from "@/lib/theme";

type HomeLandingProps = {
  initialTheme: Theme;
  cardCount: number;
};

export function HomeLanding({ initialTheme, cardCount }: HomeLandingProps) {
  const { theme, toggleTheme } = useTheme(initialTheme);

  return (
    <div className="home-shell">
      <Chrome theme={theme} onToggleTheme={toggleTheme} />

      <main className="home">
        <div className="home__layout">
          <div className="home__copy">
            <header className="home__hero">
              <p className="home__mark">LeetCode</p>
              <h1 className="home__title">dsapattern recaller</h1>
            </header>
            <p className="home__lead">
              Study patterns the way you code: notes beside Python, complexity in view, flip to
              solution when you are ready to recall.
            </p>

            <div className="home__actions">
              <Link href="/deck" className="home__cta" prefetch>
                Open deck
              </Link>
            </div>

            <p className="home__meta">
              {cardCount} {cardCount === 1 ? "card" : "cards"}
            </p>
          </div>

          <HomeEditorShowcase theme={theme} />
        </div>
      </main>
    </div>
  );
}
