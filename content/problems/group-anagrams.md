---
title: Group Anagrams
difficulty: Medium
pattern: array-hashing
order: 3
bruteSummary: Compare every pair of strings by sorting each and checking equality. Group matches with nested loops.
bruteTime: O(n² · k log k)
bruteSpace: O(n · k)
optimalSummary: Bucket strings by anagram signature using sorted string or 26-char frequency as key.
optimalTime: O(n · k log k)
optimalSpace: O(n · k)
pitfalls: Use a hashable key (sorted string or count tuple); comparing raw strings misses anagram groups.
---
