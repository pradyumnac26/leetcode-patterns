"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { CardFeed } from "@/components/CardFeed";
import { Chrome } from "@/components/Chrome";
import { useTheme } from "@/hooks/useTheme";
import { shuffle } from "@/lib/shuffle";
import type { Card } from "@/lib/types";
import type { Theme } from "@/lib/theme";

type CardAppProps = {
  cards: Card[];
  initialTheme: Theme;
};

function orderByIds(cards: Card[], ids: string[]): Card[] {
  const map = new Map(cards.map((c) => [c.id, c]));
  return ids.map((id) => map.get(id)).filter((c): c is Card => Boolean(c));
}

export function CardApp({ cards, initialTheme }: CardAppProps) {
  const { theme, toggleTheme } = useTheme(initialTheme);
  const feedRef = useRef<HTMLElement>(null);
  const baseIds = useMemo(() => cards.map((c) => c.id), [cards]);

  const [orderedIds, setOrderedIds] = useState<string[]>(baseIds);

  const orderedCards = useMemo(
    () => orderByIds(cards, orderedIds),
    [cards, orderedIds],
  );

  const handleShuffle = useCallback(() => {
    const next = shuffle(baseIds);
    setOrderedIds(next);
    feedRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [baseIds]);

  return (
    <div className="app-shell">
      <Chrome theme={theme} onToggleTheme={toggleTheme} onShuffle={handleShuffle} />
      <CardFeed ref={feedRef} cards={orderedCards} />
    </div>
  );
}
