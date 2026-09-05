---
title: Merge Intervals
difficulty: Medium
pattern: intervals
order: 128
bruteSummary: Compare every pair and merge overlaps repeatedly until stable.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Sort by start; merge if current start ≤ prev end else push new interval.
optimalTime: O(n log n)
optimalSpace: O(n)
pitfalls: Sort by start time; overlapping intervals merge into extended end.
---
