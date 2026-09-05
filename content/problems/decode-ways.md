---
title: Decode Ways
difficulty: Medium
pattern: dynamic-programming
order: 102
bruteSummary: Recursive try one-digit and two-digit decode at each position.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: DP dp[i] = ways to decode prefix ending at i using valid 1- and 2-digit splits.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: "Reject leading zero and invalid two-digit > 26; '0' alone has zero ways."
---
