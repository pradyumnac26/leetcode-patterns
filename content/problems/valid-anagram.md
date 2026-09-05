---
title: Valid Anagram
difficulty: Easy
pattern: array-hashing
order: 1
bruteSummary: Sort both strings and compare them character by character.
bruteTime: O(n log n)
bruteSpace: O(n)
optimalSummary: Count character frequencies in one pass and verify counts match.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Only works for lowercase letters if using a fixed 26-count array; different lengths are never anagrams.
---
