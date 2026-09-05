---
title: Maximum Product Subarray
difficulty: Medium
pattern: dynamic-programming
order: 104
bruteSummary: Check product of every subarray with nested loops.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Track max and min product ending here since negatives flip sign.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Negative number swaps max and min; include single element subarrays.
---
