import { Difficulty, Problem } from "./types";

export type FilterMatchMode = "all" | "any";

export type ProblemFilters = {
  difficulties: Difficulty[];
  companies: string[];
};

export const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];

export function getUniqueCompanies(problems: Problem[]): string[] {
  const set = new Set<string>();
  for (const problem of problems) {
    for (const company of problem.companies ?? []) {
      set.add(company);
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

export function hasActiveFilters(filters: ProblemFilters): boolean {
  return filters.difficulties.length > 0 || filters.companies.length > 0;
}

function matchesDifficultyFilter(
  problem: Problem,
  difficulties: Difficulty[]
): boolean {
  if (difficulties.length === 0) return true;
  return (
    !!problem.difficulty && difficulties.includes(problem.difficulty)
  );
}

function matchesCompanyFilter(problem: Problem, companies: string[]): boolean {
  if (companies.length === 0) return true;
  const problemCompanies = problem.companies ?? [];
  return companies.some((c) => problemCompanies.includes(c));
}

export function problemMatchesFilters(
  problem: Problem,
  filters: ProblemFilters,
  matchMode: FilterMatchMode = "all"
): boolean {
  const activeChecks: boolean[] = [];

  if (filters.difficulties.length > 0) {
    activeChecks.push(matchesDifficultyFilter(problem, filters.difficulties));
  }

  if (filters.companies.length > 0) {
    activeChecks.push(matchesCompanyFilter(problem, filters.companies));
  }

  if (activeChecks.length === 0) return true;

  return matchMode === "all"
    ? activeChecks.every(Boolean)
    : activeChecks.some(Boolean);
}
