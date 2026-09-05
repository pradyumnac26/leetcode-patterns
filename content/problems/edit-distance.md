---
title: Edit Distance
difficulty: Medium
pattern: dynamic-programming
order: 116
bruteSummary: Try all edit sequences recursively with insert, delete, replace.
bruteTime: O(3^(m+n))
bruteSpace: O(m+n)
optimalSummary: 2D DP min ops with match on diagonal else 1 + min of three ops.
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Insert/delete/replace all cost 1; empty string to word needs length inserts.
---
