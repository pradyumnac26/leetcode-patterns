type SubPatternMeta = {
  subpattern: string;
  patternNote: string;
};

export const SUBPATTERN_MAP: Record<string, SubPatternMeta> = {
  "insert-interval": {
    subpattern: "intervals",
    patternNote:
      "Add intervals before newInterval, merge all overlaps, then add the remaining intervals.",
  },
  "merge-intervals": {
    subpattern: "intervals",
    patternNote:
      "Sort by start; if current overlaps with res[-1], merge, else append as new interval.",
  },
  "non-overlapping-intervals": {
    subpattern: "intervals",
    patternNote:
      "Sort by end; keep the interval ending earliest and remove intervals that start before last_end.",
  },
  "meeting-rooms-ii": {
    subpattern: "intervals",
    patternNote:
      "Sort starts and ends separately; use two pointers to track active meetings and max rooms needed.",
  },
  "meeting-rooms": {
    subpattern: "intervals",
    patternNote:
      "Sort by start; if current start is before previous end, overlap exists.",
  },
  "minimum-interval-to-include-each-query": {
    subpattern: "intervals",
    patternNote:
      "Sort intervals by start and use sweep line or binary search to answer each query.",
  },
  "longest-substring-without-repeating-characters": {
    subpattern: "sliding-window",
    patternNote:
      "Sliding window + hashmap count; add s[r], and while hmap[s[r]] > 1, shrink from l, then update max_len = max(max_len, r-l+1).",
  },
  "best-time-to-buy-and-sell-stock": {
    subpattern: "sliding-window",
    patternNote: "Track running minimum price and update max profit at each step.",
  },
  "longest-repeating-character-replacement": {
    subpattern: "sliding-window",
    patternNote:
      "Sliding window; shrink when window size minus max frequency exceeds k.",
  },
  "permutation-in-string": {
    subpattern: "sliding-window",
    patternNote:
      "Fixed-size sliding window with character frequency counts to match s1.",
  },
  "minimum-window-substring": {
    subpattern: "sliding-window",
    patternNote:
      "Expand window until valid, then shrink from left while still valid to minimize length.",
  },
  "sliding-window-maximum": {
    subpattern: "sliding-window",
    patternNote: "Monotonic deque tracks useful indices in the current window.",
  },
  "search-in-rotated-sorted-array": {
    subpattern: "binary-search-rotated",
    patternNote: "Binary Search + Identify Sorted Half",
  },
  "find-minimum-in-rotated-sorted-array": {
    subpattern: "binary-search-rotated",
    patternNote:
      "If left half sorted → ans = arr[low] → go right, else ans = arr[mid] → go left",
  },
  "koko-eating-bananas": {
    subpattern: "binary-search-on-answers",
    patternNote:
      "Pick mid speed → check if Koko can finish in h hours → if yes try smaller speed, else increase speed",
  },
  "task-scheduler": {
    subpattern: "priority-queue",
    patternNote: "Max heap + greedy scheduling with cooldown slots.",
  },
  "last-stone-weight": {
    subpattern: "priority-queue",
    patternNote: "Max heap smash two largest stones until one or none remain.",
  },
  "kth-largest-element-in-an-array": {
    subpattern: "priority-queue",
    patternNote: "Min heap of size k or quickselect for kth largest.",
  },
  "kth-largest-element-in-a-stream": {
    subpattern: "priority-queue",
    patternNote: "Min heap of size k; root is kth largest in stream.",
  },
  "k-closest-points-to-origin": {
    subpattern: "priority-queue",
    patternNote: "Max heap of size k by distance, or quickselect on distances.",
  },
  "find-median-from-data-stream": {
    subpattern: "priority-queue",
    patternNote: "Two heaps: max-heap for lower half, min-heap for upper half.",
  },
  "palindromic-substrings": {
    subpattern: "palindromic-expansion",
    patternNote: "Expand around center, count palindromes from every index",
  },
  "longest-palindromic-substring": {
    subpattern: "palindromic-expansion",
    patternNote: "Expand around center, track max length palindrome",
  },
  "longest-increasing-subsequence": {
    subpattern: "lis-family",
    patternNote: "Classic LIS DP",
  },
  "longest-common-subsequence": {
    subpattern: "lcs-family",
    patternNote: "Classic 2D DP on two strings",
  },
  "interleaving-string": {
    subpattern: "lcs-family",
    patternNote: "2D DP — match s1[i] or s2[j] to s3[i+j] at each step",
  },
  "edit-distance": {
    subpattern: "lcs-family",
    patternNote: "2D DP on insert, delete, and replace operations",
  },
  "distinct-subsequences": {
    subpattern: "lcs-family",
    patternNote: "2D DP counting subsequence matches between strings",
  },
  "course-schedule": {
    subpattern: "topological-sort",
    patternNote: "Detect cycle in directed graph using topological sort",
  },
  "course-schedule-ii": {
    subpattern: "topological-sort",
    patternNote: "Return topological ordering of directed graph",
  },
  "rotting-oranges": {
    subpattern: "multi-source-bfs",
    patternNote: "Multi-Source BFS spread and track time",
  },
  "walls-and-gates": {
    subpattern: "multi-source-bfs",
    patternNote: "Multi-Source BFS from all gates to fill room distances",
  },
  "word-ladder": {
    subpattern: "shortest-path-bfs",
    patternNote: "Shortest path BFS on implicit graph",
  },
  "number-of-islands": {
    subpattern: "connected-components",
    patternNote: "Start DFS on every unvisited cell and count",
  },
  "max-area-of-island": {
    subpattern: "connected-components",
    patternNote: "DFS each island and track max area",
  },
  "surrounded-regions": {
    subpattern: "flood-fill",
    patternNote: "Flood Fill from Boundary",
  },
  "pacific-atlantic-water-flow": {
    subpattern: "flood-fill",
    patternNote: "DFS/BFS from ocean borders inward, intersect reachable cells",
  },
  "graph-valid-tree": {
    subpattern: "connected-components",
    patternNote: "Union-find or DFS — tree has n-1 edges and one component",
  },
  "number-of-connected-components-in-an-undirected-graph": {
    subpattern: "connected-components",
    patternNote: "Start DFS on every unvisited node and count",
  },
  "clone-graph": {
    subpattern: "connected-components",
    patternNote: "DFS/BFS with hash map cloning each node and neighbors",
  },
  "longest-increasing-path-in-a-matrix": {
    subpattern: "grid-dfs-memo",
    patternNote:
      "DFS + memoization for longest path starting from each cell",
  },
  "unique-paths": {
    subpattern: "grid-dfs-memo",
    patternNote: "DFS + memoization for number of ways from each cell",
  },
  "coin-change": {
    subpattern: "unbounded-knapsack",
    patternNote: "Unbounded knapsack, minimize coins",
  },
  "coin-change-ii": {
    subpattern: "unbounded-knapsack",
    patternNote: "Unbounded knapsack, count combinations",
  },
  "rotate-image": {
    subpattern: "famous-matrix",
    patternNote:
      "Transpose the matrix, then reverse each row to rotate 90° clockwise in-place.",
  },
  "spiral-matrix": {
    subpattern: "famous-matrix",
    patternNote:
      "Traverse with four boundaries (top, bottom, left, right), shrinking after each pass.",
  },
  "set-matrix-zeroes": {
    subpattern: "matrix-row-col-tracking",
    patternNote: "Matrix Row–Column Tracking",
  },
  "lru-cache": {
    subpattern: "design",
    patternNote: "LRU Cache design",
  },
  "design-twitter": {
    subpattern: "design",
    patternNote: "Design twitter feed",
  },
};

export function getSubpatternMeta(slug: string): SubPatternMeta | undefined {
  return SUBPATTERN_MAP[slug];
}
