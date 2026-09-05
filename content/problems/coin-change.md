---
title: Coin Change
difficulty: Medium
pattern: dynamic-programming
order: 103
bruteSummary: Try all combinations of coins recursively for each amount.
bruteTime: O(amount^n)
bruteSpace: O(amount)
optimalSummary: "Bottom-up unbounded knapsack: dp[a] = min coins for amount a."
optimalTime: O(n · amount)
optimalSpace: O(amount)
pitfalls: Initialize dp with infinity except dp[0]=0; return -1 if dp[amount] still infinity.
---
