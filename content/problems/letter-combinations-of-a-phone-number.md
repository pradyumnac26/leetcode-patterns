---
title: Letter Combinations of a Phone Number
difficulty: Medium
pattern: backtracking
order: 77
bruteSummary: Build all strings iteratively by nested loops per digit.
bruteTime: O(4^n)
bruteSpace: O(n)
optimalSummary: Map digits to letters; backtrack one letter per digit depth-first.
optimalTime: O(4^n)
optimalSpace: O(n)
pitfalls: Empty input returns empty list; digits 7 and 9 map to 4 letters each.
---
