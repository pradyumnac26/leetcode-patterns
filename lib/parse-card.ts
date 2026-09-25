import matter from "gray-matter";

import { leetcodeProblemUrl } from "@/lib/leetcode-url";

const QUESTION_HEADING = /^##\s+Question\s*$/im;
const SUMMARY_HEADING = /^##\s+Summary\s*$/im;
const PYTHON_FENCE = /```python\n([\s\S]*?)```/;

function sectionBetween(content: string, startRe: RegExp, endRe: RegExp | null): string {
  const start = content.search(startRe);
  if (start === -1) return "";

  const afterStart = content.slice(start).replace(startRe, "").trimStart();
  if (!endRe) return afterStart.trim();

  const end = afterStart.search(endRe);
  if (end === -1) return afterStart.trim();
  return afterStart.slice(0, end).trim();
}

function asString(value: unknown): string {
  if (value === undefined || value === null) return "";
  return String(value).trim();
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => asString(item)).filter(Boolean);
}

function slugFromUrl(url: string): string {
  const match = url.match(/leetcode\.com\/problems\/([^/]+)/i);
  return match?.[1] ?? "";
}

function deriveId(data: Record<string, unknown>, title: string): string {
  const explicit = asString(data.id);
  if (explicit) return explicit;

  const subpattern = asString(data.subpattern);
  if (subpattern) return subpattern;

  const fromUrl = slugFromUrl(asString(data.url) || asString(data.leetcodeUrl));
  if (fromUrl) return fromUrl;

  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseOrder(value: unknown): number | null {
  if (value === undefined || value === null || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export function parseCardFile(raw: string): Omit<
  CardSource,
  "codeHtmlLight" | "codeHtmlDark"
> {
  const { data, content } = matter(raw);
  const meta = data as Record<string, unknown>;

  const title = asString(meta.title);
  const id = deriveId(meta, title);

  const urlOverride = asString(meta.url) || asString(meta.leetcodeUrl) || undefined;
  const leetcodeUrl = leetcodeProblemUrl(id, urlOverride);

  const clarifyingQuestions = asStringArray(meta.clarifyingQuestions);
  const pitfalls = asStringArray(meta.pitfalls);

  const question = sectionBetween(content, QUESTION_HEADING, SUMMARY_HEADING);
  const legacySummary = sectionBetween(content, SUMMARY_HEADING, /^```python/im);

  const summary =
    asString(meta.optimalSummary) ||
    asString(meta.summary) ||
    legacySummary;

  const timeComplexity =
    asString(meta.optimalTime) || asString(meta.timeComplexity);
  const timeComplexityExplanation =
    asString(meta.optimalTimeExplanation) ||
    asString(meta.timeComplexityExplanation);
  const spaceComplexity =
    asString(meta.optimalSpace) || asString(meta.spaceComplexity);
  const spaceComplexityExplanation =
    asString(meta.optimalSpaceExplanation) ||
    asString(meta.spaceComplexityExplanation);

  const codeMatch = content.match(PYTHON_FENCE);
  const code = codeMatch?.[1]?.trim() ?? "";

  if (!title || !id) {
    throw new Error("Card must include title and id/subpattern/url slug");
  }

  if (!code) {
    throw new Error(`Card "${title}" must include a python code block`);
  }

  if (!summary) {
    throw new Error(`Card "${title}" must include optimalSummary or ## Summary`);
  }

  return {
    id,
    title,
    leetcodeUrl,
    pattern: asString(meta.pattern),
    subpattern: asString(meta.subpattern),
    order: parseOrder(meta.order),
    question,
    clarifyingQuestions,
    summary,
    pitfalls,
    timeComplexity,
    timeComplexityExplanation,
    spaceComplexity,
    spaceComplexityExplanation,
    code,
  };
}

type CardSource = {
  id: string;
  title: string;
  leetcodeUrl: string;
  pattern: string;
  subpattern: string;
  order: number | null;
  question: string;
  clarifyingQuestions: string[];
  summary: string;
  pitfalls: string[];
  timeComplexity: string;
  timeComplexityExplanation: string;
  spaceComplexity: string;
  spaceComplexityExplanation: string;
  code: string;
};
