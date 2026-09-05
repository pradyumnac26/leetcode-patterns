---
title: Pacific Atlantic Water Flow
difficulty: Medium
pattern: graphs
order: 82
bruteSummary: From each cell DFS to both oceans checking non-decreasing paths.
bruteTime: O((m · n)²)
bruteSpace: O(m · n)
optimalSummary: Multi-source DFS/BFS inward from each ocean border; answer is intersection of reachable sets.
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Reverse flow from ocean inward on reversed height graph; answer is cells reachable from both.
---
