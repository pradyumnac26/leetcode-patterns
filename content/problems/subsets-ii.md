---
title: Subsets II
difficulty: Medium
pattern: backtracking
order: 73
bruteSummary: Generate all subsets then deduplicate with a set.
bruteTime: O(n · 2^n)
bruteSpace: O(2^n)
optimalSummary: Sort and backtrack skipping duplicates at same recursion level.
optimalTime: O(n · 2^n)
optimalSpace: O(2^n)
pitfalls: Skip nums[i] == nums[i-1] when i > start to avoid duplicate subsets.
---
