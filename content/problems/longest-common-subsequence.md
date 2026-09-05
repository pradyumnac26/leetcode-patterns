---
title: Longest Common Subsequence
difficulty: Medium
pattern: dynamic-programming
order: 109
bruteSummary: Generate all subsequences of one string and check membership in other.
bruteTime: O(2^m · n)
bruteSpace: O(2^m)
optimalSummary: "2D DP: match adds diagonal, else max of up and left."
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Subsequence not substring; dp[i][j] uses text1[i-1] and text2[j-1] with 1-indexed DP.
---
