---
title: Non-overlapping Intervals
difficulty: Medium
pattern: intervals
order: 129
bruteSummary: Try all subsets of intervals finding max non-overlapping set.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: Sort by end time; greedy keep earliest ending, count removals on overlap.
optimalTime: O(n log n)
optimalSpace: O(1)
pitfalls: Sort by end not start; skip overlapping intervals and count as removal.
---
