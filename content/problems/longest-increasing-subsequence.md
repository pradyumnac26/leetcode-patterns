---
title: Longest Increasing Subsequence
difficulty: Medium
pattern: dynamic-programming
order: 106
bruteSummary: dp[i] = LIS ending at i with nested loop over j < i.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Patience sorting with binary search on tails array.
optimalTime: O(n log n)
optimalSpace: O(n)
pitfalls: Strictly increasing; binary search replaces first tail >= current value.
---
