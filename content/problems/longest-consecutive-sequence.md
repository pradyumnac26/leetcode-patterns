---
title: Longest Consecutive Sequence
difficulty: Medium
pattern: array-hashing
order: 8
bruteSummary: Sort the array and scan for runs of consecutive numbers, handling duplicates.
bruteTime: O(n log n)
bruteSpace: O(1)
optimalSummary: Put all numbers in a set; start a streak only when num-1 is absent, then count upward.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Only start counting from sequence starts (no num-1 in set); duplicates do not extend length.
---
