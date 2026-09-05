---
title: Unique Paths
difficulty: Medium
pattern: dynamic-programming
order: 108
bruteSummary: DFS count all paths from top-left to bottom-right with backtracking.
bruteTime: O(2^(m+n))
bruteSpace: O(m+n)
optimalSummary: Grid DP dp[r][c] = dp[r-1][c] + dp[r][c-1].
optimalTime: O(m · n)
optimalSpace: O(n)
pitfalls: Only move right or down; first row and column have one path each.
---
