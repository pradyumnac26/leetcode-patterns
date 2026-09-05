---
title: Palindrome Partitioning
difficulty: Medium
pattern: backtracking
order: 76
bruteSummary: Try every partition of string checking each part by reversing.
bruteTime: O(n · 2^n)
bruteSpace: O(n)
optimalSummary: Backtrack with precomputed palindrome table for O(1) checks.
optimalTime: O(n · 2^n)
optimalSpace: O(n²)
pitfalls: Every substring in partition must be palindrome; precompute isPalin[i][j] to avoid repeated checks.
---
