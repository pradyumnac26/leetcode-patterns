---
title: Implement Trie (Prefix Tree)
difficulty: Medium
pattern: tries
order: 60
bruteSummary: Store all words in a list; search and startsWith scan every word.
bruteTime: O(n · m)
bruteSpace: O(n · m)
optimalSummary: Trie with children map and isEnd flag per node.
optimalTime: O(m)
optimalSpace: O(total chars)
pitfalls: Mark isEnd at word end only; startsWith does not require isEnd.
---
