import type { SubPattern } from "./subpatterns";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Approach = {
  summary: string;
  time: string;
  space: string;
};

export type Problem = {
  id: string;
  title: string;
  url: string;
  pattern: string;
  subpattern: string;
  patternNote: string;
  clarifyingQuestions: string[];
  brute: Approach;
  optimal: Approach;
  pitfalls: string[];
  video?: string;
  body?: string;
  difficulty?: Difficulty;
  order?: number;
  companies?: string[];
};

export type Pattern = {
  id: string;
  name: string;
  color: string;
};

export const DEFAULT_PATTERNS: Pattern[] = [
  { id: "array-hashing", name: "Array & Hashing", color: "#6366f1" },
  { id: "two-pointers", name: "Two Pointers", color: "#8b5cf6" },
  { id: "sliding-window", name: "Sliding Window", color: "#a855f7" },
  { id: "stack", name: "Stack", color: "#d946ef" },
  { id: "binary-search", name: "Binary Search", color: "#ec4899" },
  { id: "linked-list", name: "Linked List", color: "#f43f5e" },
  { id: "trees", name: "Trees", color: "#f97316" },
  { id: "tries", name: "Tries", color: "#eab308" },
  { id: "heap", name: "Heap / Priority Queue", color: "#84cc16" },
  { id: "backtracking", name: "Backtracking", color: "#22c55e" },
  { id: "graphs", name: "Graphs", color: "#14b8a6" },
  { id: "dynamic-programming", name: "Dynamic Programming", color: "#06b6d4" },
  { id: "greedy", name: "Greedy", color: "#0ea5e9" },
  { id: "intervals", name: "Intervals", color: "#3b82f6" },
  { id: "math-geometry", name: "Math & Geometry", color: "#6366f1" },
  { id: "bit-manipulation", name: "Bit Manipulation", color: "#8b5cf6" },
];

export type AppData = {
  problems: Problem[];
  patterns: Pattern[];
  subpatterns: SubPattern[];
};
