---
title: Minimum Interval to Include Each Query
difficulty: Hard
pattern: intervals
order: 132
bruteSummary: For each query scan all intervals for smallest containing interval.
bruteTime: O(n · q)
bruteSpace: O(1)
optimalSummary: Sort intervals and queries; min-heap active intervals by size answering as queries advance.
optimalTime: O(n log n + q log q)
optimalSpace: O(n + q)
pitfalls: Remove intervals that end before query; heap gives smallest size among active intervals.
---
