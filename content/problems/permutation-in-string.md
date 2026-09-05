---
title: Permutation in String
difficulty: Medium
pattern: sliding-window
order: 17
bruteSummary: Sort s1 and check every length-|s1| substring of s2 after sorting.
bruteTime: O(n · k log k)
bruteSpace: O(k)
optimalSummary: Fixed window over s2 with character frequency maps; slide and compare counts.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Permutation means same character counts, not substring order; window size equals len(s1).
---
