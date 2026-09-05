---
title: Rotting Oranges
difficulty: Medium
pattern: graphs
order: 84
bruteSummary: Simulate minute by minute scanning entire grid for new rot spread.
bruteTime: O((m · n)²)
bruteSpace: O(m · n)
optimalSummary: Multi-source BFS from all rotten oranges at once tracking fresh count.
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Return -1 if fresh remains after BFS; each minute processes current BFS level.
---
