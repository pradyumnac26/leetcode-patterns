---
title: Word Search II
difficulty: Hard
pattern: tries
order: 62
bruteSummary: Run word search for each word in the board separately.
bruteTime: O(words · m · n · 4^L)
bruteSpace: O(L)
optimalSummary: Build trie from words; DFS board pruning dead paths and remove found words.
optimalTime: O(m · n · 4^L)
optimalSpace: O(total chars)
pitfalls: Remove word from trie after found to avoid duplicates; mark visited cells during DFS.
---
