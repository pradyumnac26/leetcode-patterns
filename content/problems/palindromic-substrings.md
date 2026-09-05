---
title: Palindromic Substrings
difficulty: Medium
pattern: dynamic-programming
order: 101
bruteSummary: Count palindromes by checking every substring.
bruteTime: O(n³)
bruteSpace: O(1)
optimalSummary: Expand around each center counting palindromes found.
optimalTime: O(n²)
optimalSpace: O(1)
pitfalls: Single char is palindrome; each expansion adds count for new palindrome found.
---
