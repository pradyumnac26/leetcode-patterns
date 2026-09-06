import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  AppData,
  DEFAULT_PATTERNS,
  Difficulty,
  Problem,
} from "./types";
import { getClarifyingQuestions } from "./clarifying-questions";
import { getSubpatternMeta } from "./subpattern-map";
import { SUBPATTERNS, UNCATEGORIZED_SUBPATTERN_ID } from "./subpatterns";

const CONTENT_DIR = path.join(process.cwd(), "content", "problems");

function normalizeStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).filter((item) => item.trim());
  }
  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }
  return [];
}

type ProblemFrontmatter = {
  title: string;
  difficulty?: Difficulty;
  pattern: string;
  order?: number;
  bruteSummary?: string;
  bruteTime?: string;
  bruteSpace?: string;
  optimalSummary?: string;
  optimalTime?: string;
  optimalSpace?: string;
  pitfalls?: string | string[];
  video?: string;
  companies?: string[];
  clarifyingQuestions?: string[];
  subpattern?: string;
  patternNote?: string;
};

function parseProblemFile(slug: string, raw: string): Problem {
  const { data, content } = matter(raw);
  const fm = data as ProblemFrontmatter;
  const mapped = getSubpatternMeta(slug);

  return {
    id: slug,
    title: fm.title,
    url: `https://leetcode.com/problems/${slug}/`,
    pattern: fm.pattern,
    subpattern: fm.subpattern ?? mapped?.subpattern ?? UNCATEGORIZED_SUBPATTERN_ID,
    patternNote:
      fm.patternNote ??
      mapped?.patternNote ??
      fm.optimalSummary ??
      "",
    difficulty: fm.difficulty,
    order: fm.order ?? 0,
    clarifyingQuestions:
      Array.isArray(fm.clarifyingQuestions) && fm.clarifyingQuestions.length > 0
        ? fm.clarifyingQuestions.map(String)
        : getClarifyingQuestions(slug, fm.pattern),
    brute: {
      summary: fm.bruteSummary ?? "",
      time: fm.bruteTime ?? "",
      space: fm.bruteSpace ?? "",
    },
    optimal: {
      summary: fm.optimalSummary ?? "",
      time: fm.optimalTime ?? "",
      space: fm.optimalSpace ?? "",
    },
    pitfalls: normalizeStringList(fm.pitfalls),
    video: fm.video || undefined,
    companies: Array.isArray(fm.companies) ? fm.companies.map(String) : [],
    body: content.trim() || undefined,
  };
}

let cached: AppData | null = null;

export function getDefaultData(): AppData {
  if (cached && process.env.NODE_ENV === "production") return cached;

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const problems = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    return parseProblemFile(slug, raw);
  });

  cached = { problems, patterns: DEFAULT_PATTERNS, subpatterns: SUBPATTERNS };
  return cached;
}

export function getProblemCount(): number {
  return getDefaultData().problems.length;
}

export function getRawContent(slug: string): string | null {
  for (const ext of [".md", ".mdx"]) {
    const filePath = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf8");
    }
  }
  return null;
}
