---
title: Largest Rectangle in Histogram
difficulty: Hard
pattern: stack
order: 26
bruteSummary: For each bar, expand left and right while height stays above it.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Monotonic increasing stack; on pop compute area with width to next smaller bar.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Width extends to current index after pop; append sentinel height 0 to flush stack at end.
---
