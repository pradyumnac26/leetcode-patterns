import { getDefaultData } from "./content";
import { getProblemsByPattern, getProblemsBySubpattern } from "./helpers";
import { DEFAULT_PATTERNS, Pattern, Problem } from "./types";
import { getSubPatternById, SubPattern } from "./subpatterns";

export function getProblemBySlug(slug: string): Problem | undefined {
  return getDefaultData().problems.find((p) => p.id === slug);
}

export function getPatternById(id: string): Pattern | undefined {
  return DEFAULT_PATTERNS.find((p) => p.id === id);
}

export function getSubpatternById(id: string): SubPattern | undefined {
  return getSubPatternById(id);
}

export function getPatternProblems(patternId: string): Problem[] {
  return getProblemsByPattern(getDefaultData().problems, patternId);
}

export function getSubpatternProblems(subpatternId: string): Problem[] {
  return getProblemsBySubpattern(getDefaultData().problems, subpatternId);
}

export function getAllSlugs(): string[] {
  return getDefaultData().problems.map((p) => p.id);
}
