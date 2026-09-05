---
title: Word Search
difficulty: Medium
pattern: backtracking
order: 75
bruteSummary: Try every path of length word from every cell with exhaustive DFS and no pruning.
bruteTime: O(m · n · 4^L)
bruteSpace: O(L)
optimalSummary: DFS from each matching first letter with visited marking and backtracking.
optimalTime: O(m · n · 4^L)
optimalSpace: O(L)
pitfalls: Mark visited during DFS and unmark on backtrack; start only from cells matching first char.
---
