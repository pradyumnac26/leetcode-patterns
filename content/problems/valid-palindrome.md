---
title: Valid Palindrome
difficulty: Easy
pattern: two-pointers
order: 9
bruteSummary: Build a cleaned string keeping only alphanumeric chars in lowercase, then compare to its reverse.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Two pointers from both ends, skipping non-alphanumeric and comparing lowercase.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Compare lowercase letters and digits only; empty string after cleaning is a valid palindrome.
---
