---
title: Coin Change II
difficulty: Medium
pattern: dynamic-programming
order: 111
bruteSummary: Recursive count combinations trying each coin at each amount.
bruteTime: O(2^amount)
bruteSpace: O(amount)
optimalSummary: "Unbounded knapsack counting: iterate coins outer loop, dp[a] += dp[a-coin]."
optimalTime: O(n · amount)
optimalSpace: O(amount)
pitfalls: Coins outer loop avoids permutation double-count; dp[0] = 1 way for amount zero.
---
