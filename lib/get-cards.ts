import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

import { highlightPython } from "@/lib/highlight";
import { parseCardFile } from "@/lib/parse-card";
import type { Card } from "@/lib/types";

const CARDS_DIR = path.join(process.cwd(), "content", "cards");

function compareParsed(
  a: ReturnType<typeof parseCardFile>,
  b: ReturnType<typeof parseCardFile>,
): number {
  const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
  const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) return orderA - orderB;
  return a.id.localeCompare(b.id);
}

function compareCards(a: Card, b: Card): number {
  const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
  const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) return orderA - orderB;
  return a.id.localeCompare(b.id);
}

const loadParsedCards = cache(async () => {
  const entries = await fs.readdir(CARDS_DIR);
  const mdxFiles = entries.filter((name) => name.endsWith(".mdx"));

  const parsed = await Promise.all(
    mdxFiles.map(async (filename) => {
      const raw = await fs.readFile(path.join(CARDS_DIR, filename), "utf8");
      return parseCardFile(raw);
    }),
  );

  return parsed.sort(compareParsed);
});

export type DeckSummary = {
  cardCount: number;
  patterns: string[];
};

/** Fast path for the landing page — no syntax highlighting. */
export const getDeckSummary = cache(async (): Promise<DeckSummary> => {
  const parsed = await loadParsedCards();
  const patterns = [
    ...new Set(parsed.map((card) => card.subpattern.trim()).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));

  return { cardCount: parsed.length, patterns };
});

export const getCards = cache(async (): Promise<Card[]> => {
  const parsed = await loadParsedCards();

  const cards = await Promise.all(
    parsed.map(async (item) => {
      const [codeHtmlLight, codeHtmlDark] = await Promise.all([
        highlightPython(item.code, "vitesse-light"),
        highlightPython(item.code, "vitesse-dark"),
      ]);
      return { ...item, codeHtmlLight, codeHtmlDark };
    }),
  );

  return cards.sort(compareCards);
});
