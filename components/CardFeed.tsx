"use client";

import { forwardRef } from "react";

import { LeetCard } from "@/components/LeetCard";
import type { Card } from "@/lib/types";

type CardFeedProps = {
  cards: Card[];
};

export const CardFeed = forwardRef<HTMLElement, CardFeedProps>(function CardFeed(
  { cards },
  ref,
) {
  return (
    <main ref={ref} className="card-feed" aria-label="DSA pattern cards">
      {cards.map((card, index) => (
        <LeetCard key={card.id} card={card} index={index} />
      ))}
    </main>
  );
});
