---
title: Min Cost Climbing Stairs
difficulty: Easy
pattern: dynamic-programming
order: 97
bruteSummary: Try every path of steps from index 0 or 1 with recursion.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: dp[i] = cost[i] + min(dp[i-1], dp[i-2]); answer min of last two.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Can start at index 0 or 1; goal is past last index, not on it.
---
