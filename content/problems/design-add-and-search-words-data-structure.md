---
title: Design Add and Search Words Data Structure
difficulty: Medium
pattern: tries
order: 61
bruteSummary: Store words in list; search with backtracking tries every word against pattern.
bruteTime: O(n · m)
bruteSpace: O(n · m)
optimalSummary: Trie for addWord; on dot in search DFS all children at that level.
optimalTime: O(m)
optimalSpace: O(n · m)
pitfalls: Dot matches any letter; backtrack all 26 children at dot position.
---
