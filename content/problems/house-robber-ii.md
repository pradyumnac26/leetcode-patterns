---
title: House Robber II
difficulty: Medium
pattern: dynamic-programming
order: 99
bruteSummary: Break circular constraint by trying all subsets respecting adjacency with backtracking.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: Run linear house robber on [0..n-2] and [1..n-1], take max.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: First and last houses are adjacent; handle n=1 as single element case.
---
