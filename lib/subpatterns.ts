export type SubPattern = {
  id: string;
  name: string;
  order: number;
};

export const UNCATEGORIZED_SUBPATTERN_ID = "uncategorized";

export const SUBPATTERNS: SubPattern[] = [
  { id: "intervals", name: "Intervals", order: 0 },
  { id: "sliding-window", name: "Sliding Window", order: 1 },
  {
    id: "binary-search-rotated",
    name: "Binary Search in Rotated Sorted Array",
    order: 2,
  },
  { id: "binary-search-on-answers", name: "Binary Search on Answers", order: 3 },
  { id: "priority-queue", name: "Priority Queue", order: 4 },
  {
    id: "palindromic-expansion",
    name: "Palindromic Expansion around Center",
    order: 5,
  },
  {
    id: "lis-family",
    name: "Longest Increasing Subsequence Family",
    order: 6,
  },
  {
    id: "lcs-family",
    name: "Longest Common Subsequence Family",
    order: 7,
  },
  { id: "topological-sort", name: "Topological Sort", order: 8 },
  { id: "multi-source-bfs", name: "Multi-Source BFS", order: 9 },
  {
    id: "shortest-path-bfs",
    name: "Shortest Path BFS (unit weight graphs)",
    order: 10,
  },
  { id: "flood-fill", name: "Flood Fill", order: 11 },
  { id: "connected-components", name: "Connected Components", order: 12 },
  { id: "grid-dfs-memo", name: "Grid DFS + Memoization", order: 13 },
  { id: "unbounded-knapsack", name: "1D DP Unbounded Knapsack", order: 14 },
  { id: "dp-on-squares", name: "DP on Squares", order: 15 },
  { id: "famous-matrix", name: "Famous Matrix Problems", order: 16 },
  {
    id: "matrix-row-col-tracking",
    name: "Matrix with Row–Column Tracking",
    order: 17,
  },
  { id: "design", name: "Design Questions", order: 18 },
  { id: UNCATEGORIZED_SUBPATTERN_ID, name: "Uncategorized", order: 99 },
];

export function getSubPatternById(id: string): SubPattern | undefined {
  return SUBPATTERNS.find((subpattern) => subpattern.id === id);
}
