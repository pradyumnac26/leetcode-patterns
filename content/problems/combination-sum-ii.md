---
title: Combination Sum II
difficulty: Medium
pattern: backtracking
order: 74
bruteSummary: Generate all subsets and check sums equal target.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: Sort, backtrack using each candidate once, skip duplicate values at same level.
optimalTime: O(2^n)
optimalSpace: O(n)
pitfalls: Each number used once; skip duplicates at same tree level, not globally.
---
