import { Problem } from "./types";
import { SubPattern } from "./subpatterns";

export function getProblemsByPattern(
  problems: Problem[],
  patternId: string
): Problem[] {
  return problems
    .filter((p) => p.pattern === patternId)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getProblemsBySubpattern(
  problems: Problem[],
  subpatternId: string
): Problem[] {
  return problems
    .filter((p) => p.subpattern === subpatternId)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getPatternById(
  patterns: { id: string; name: string }[],
  id: string
) {
  return patterns.find((p) => p.id === id);
}

export function getSubpatternById(
  subpatterns: SubPattern[],
  id: string
): SubPattern | undefined {
  return subpatterns.find((subpattern) => subpattern.id === id);
}

export function getVisibleSubpatterns(
  subpatterns: SubPattern[],
  hasProblems: (subpatternId: string) => boolean
): SubPattern[] {
  return subpatterns.filter((subpattern) => hasProblems(subpattern.id));
}
