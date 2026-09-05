---
title: Word Ladder
difficulty: Hard
pattern: graphs
order: 91
bruteSummary: DFS all transformation paths and return shortest found.
bruteTime: O(n · m · 26^L)
bruteSpace: O(n)
optimalSummary: BFS from beginWord changing one char at a time with wordSet lookup.
optimalTime: O(n · m²)
optimalSpace: O(n)
pitfalls: Each step must be in wordList; BFS guarantees shortest transformation length.
---
