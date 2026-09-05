import { Problem } from "./types";

export function problemMatchesSearch(problem: Problem, q: string): boolean {
  const haystack = [
    problem.title,
    problem.patternNote,
    ...problem.clarifyingQuestions,
    problem.brute.summary,
    problem.brute.time,
    problem.brute.space,
    problem.optimal.summary,
    problem.optimal.time,
    problem.optimal.space,
    problem.pitfalls,
    ...(problem.companies ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}
