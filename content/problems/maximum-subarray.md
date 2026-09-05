---
title: Maximum Subarray
difficulty: Medium
pattern: greedy
order: 119
bruteSummary: Compute sum of every subarray with nested loops.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: "Kadane's algorithm: currSum = max(num, currSum + num), track global max."
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: All negative array still has answer (max single element); reset currSum not global max.
---
