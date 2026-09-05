---
title: Word Break
difficulty: Medium
pattern: dynamic-programming
order: 105
bruteSummary: Backtrack trying every split position and dictionary lookup.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: "DP dp[i] = can segment s[0:i]; check all j where dp[j] and s[j:i] in wordSet."
optimalTime: O(n² · m)
optimalSpace: O(n)
pitfalls: dp[0] is true for empty prefix; wordSet lookup is O(m) per check.
---
