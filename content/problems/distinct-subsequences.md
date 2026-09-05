---
title: Distinct Subsequences
difficulty: Hard
pattern: dynamic-programming
order: 115
bruteSummary: Generate all subsequences of s and count matches to t.
bruteTime: O(2^m)
bruteSpace: O(m)
optimalSummary: "2D DP: if chars match add both skip and take; else carry forward skip count."
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Empty t has one subsequence in any s; use long to avoid overflow on counts.
---
