---
title: Longest Palindromic Substring
difficulty: Medium
pattern: dynamic-programming
order: 100
bruteSummary: Check every substring for palindrome by comparing to reverse.
bruteTime: O(n³)
bruteSpace: O(1)
optimalSummary: Expand around each center for odd and even lengths tracking longest.
optimalTime: O(n²)
optimalSpace: O(1)
pitfalls: Check both odd and even centers; update best start/end indices on longer palindrome.
---
