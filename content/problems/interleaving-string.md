---
title: Interleaving String
difficulty: Medium
pattern: dynamic-programming
order: 113
bruteSummary: Recursively match s3 from s1 or s2 at each step trying both options.
bruteTime: O(2^(m+n))
bruteSpace: O(m+n)
optimalSummary: 2D DP dp[i][j] whether s1[0..i) and s2[0..j) form s3[0..i+j).
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Lengths must satisfy m+n=len(s3); dp[i][j] checks char from s1 or s2 matches s3[i+j-1].
---
