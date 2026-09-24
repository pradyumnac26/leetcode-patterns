type SubPatternMeta = {
  subpattern: string;
  patternNote: string;
};

export const SUBPATTERN_MAP: Record<string, SubPatternMeta> = {
  "add-two-numbers": {
    subpattern: "linked-list",
    patternNote:
      "Add digit by digit with carry using list traversal.",
  },
  "all-nodes-distance-k-in-binary-tree": {
    subpattern: "tree-bfs",
    patternNote:
      "Build parent map via DFS, then BFS from target k levels to collect nodes.",
  },
  "sort-colors": {
    subpattern: "dutch-national-flag",
    patternNote:
      "Three pointers partition the array into 0s, 1s, and 2s in one pass.",
  },
  "two-sum-unsorted": {
    subpattern: "two-sum",
    patternNote:
      "Hash map stores seen values; check if complement exists before storing current number.",
  },
  "two-sum-sorted": {
    subpattern: "two-sum",
    patternNote:
      "Two pointers at both ends; shrink the side that moves the sum toward target.",
  },
  "maximum-subarray-sum": {
    subpattern: "subarrays",
    patternNote:
      "Kadane's algorithm tracks the best sum ending at each index in one pass.",
  },
  "contains-duplicate": {
    subpattern: "arrays",
    patternNote:
      "Hash set tracks seen values; a repeat lookup means a duplicate exists.",
  },
};

export function getSubpatternMeta(slug: string): SubPatternMeta | undefined {
  return SUBPATTERN_MAP[slug];
}
