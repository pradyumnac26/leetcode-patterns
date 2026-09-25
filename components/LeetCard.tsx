"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";

import { CardBack } from "@/components/CardBack";
import { CardFront } from "@/components/CardFront";
import { attachScrollChain } from "@/lib/scroll-chain";
import type { Card } from "@/lib/types";

type LeetCardProps = {
  card: Card;
  index: number;
};

const TAP_MOVE_THRESHOLD_PX = 10;

type GestureState = {
  moved: boolean;
  startX: number;
  startY: number;
  scrollEl: HTMLElement | null;
  startScrollTop: number;
};

function LeetCardInner({ card, index }: LeetCardProps) {
  const indexLabel = String(index + 1).padStart(2, "0");
  const [flipped, setFlipped] = useState(false);
  const [backMounted, setBackMounted] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const gestureRef = useRef<GestureState>({
    moved: false,
    startX: 0,
    startY: 0,
    scrollEl: null,
    startScrollTop: 0,
  });

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.5) {
          setFlipped(false);
        }
      },
      { threshold: [0.5] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const feed = node.closest(".card-feed");
    if (!(feed instanceof HTMLElement)) return;

    const scrollAreas = node.querySelectorAll<HTMLElement>(
      ".card-face__scroll, .card-face__code",
    );

    const detach = Array.from(scrollAreas).map((scrollEl) =>
      attachScrollChain({ feed, scrollEl }),
    );

    return () => {
      detach.forEach((off) => off());
    };
  }, [backMounted]);

  const toggle = useCallback(() => {
    setBackMounted(true);
    setFlipped((value) => !value);
  }, []);

  const findScrollSurface = useCallback((target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) return null;
    return target.closest<HTMLElement>(".card-face__code, .card-face__scroll");
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      const scrollEl = findScrollSurface(event.target);
      gestureRef.current = {
        moved: false,
        startX: event.clientX,
        startY: event.clientY,
        scrollEl,
        startScrollTop: scrollEl?.scrollTop ?? 0,
      };
    },
    [findScrollSurface],
  );

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    const dx = Math.abs(event.clientX - gestureRef.current.startX);
    const dy = Math.abs(event.clientY - gestureRef.current.startY);
    if (dx > TAP_MOVE_THRESHOLD_PX || dy > TAP_MOVE_THRESHOLD_PX) {
      gestureRef.current.moved = true;
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    const { scrollEl, startScrollTop, moved } = gestureRef.current;

    if (moved) {
      return;
    }

    if (scrollEl) {
      const scrolled = Math.abs(scrollEl.scrollTop - startScrollTop) > 2;
      if (scrolled) {
        return;
      }

      if (
        scrollEl.classList.contains("card-face__code") &&
        scrollEl.scrollHeight > scrollEl.clientHeight + 2
      ) {
        return;
      }
    }

    toggle();
  }, [toggle]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    },
    [toggle],
  );

  return (
    <article ref={rootRef} className="leet-card">
      <div
        role="button"
        tabIndex={0}
        className={`leet-card__inner${flipped ? " leet-card__inner--flipped" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
        aria-label={`${card.title}. ${flipped ? "Show summary" : "Show solution"}`}
      >
        <CardFront
          indexLabel={indexLabel}
          id={card.id}
          title={card.title}
          leetcodeUrl={card.leetcodeUrl}
          subpattern={card.subpattern}
          summary={card.summary}
          timeComplexity={card.timeComplexity}
          timeComplexityExplanation={card.timeComplexityExplanation}
          spaceComplexity={card.spaceComplexity}
          spaceComplexityExplanation={card.spaceComplexityExplanation}
        />
        {backMounted ? (
          <CardBack
            indexLabel={indexLabel}
            id={card.id}
            subpattern={card.subpattern}
            title={card.title}
            leetcodeUrl={card.leetcodeUrl}
            codeHtmlLight={card.codeHtmlLight}
            codeHtmlDark={card.codeHtmlDark}
          />
        ) : null}
      </div>
    </article>
  );
}

export const LeetCard = memo(LeetCardInner);
