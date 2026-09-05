---
title: Daily Temperatures
difficulty: Medium
pattern: stack
order: 24
bruteSummary: For each day, scan forward until a warmer day is found.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Monotonic decreasing stack of indices; pop warmer days when current temp exceeds stack top.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Store indices on stack, not temperatures; days with no warmer day stay 0.
---
