---
title: House Robber
difficulty: Medium
pattern: dynamic-programming
order: 98
bruteSummary: Try robbing or skipping each house with recursion over all 2^n choices.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: dp[i] = max(dp[i-1], nums[i] + dp[i-2]) with two rolling variables.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Cannot rob adjacent houses; track max including or excluding current house.
---
