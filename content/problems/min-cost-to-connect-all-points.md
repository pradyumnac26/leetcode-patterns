---
title: Min Cost to Connect All Points
difficulty: Medium
pattern: graphs
order: 93
bruteSummary: Try all spanning trees via backtracking or enumerate edge subsets.
bruteTime: O(2^(n²))
bruteSpace: O(n)
optimalSummary: Prim with min-heap or Kruskal with Union-Find on Manhattan edges.
optimalTime: O(n² log n)
optimalSpace: O(n²)
pitfalls: Complete graph on n points; Manhattan distance |x1-x2| + |y1-y2|.
---
