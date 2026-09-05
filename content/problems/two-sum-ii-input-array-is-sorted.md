---
title: Two Sum II
difficulty: Medium
pattern: two-pointers
order: 10
bruteSummary: Binary search complement for each element in the sorted array.
bruteTime: O(n log n)
bruteSpace: O(1)
optimalSummary: Two pointers at start and end; move left up if sum too small, right down if too large.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Array is 1-indexed in problem statement but use 0-based indices in code.
---
