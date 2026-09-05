---
title: Surrounded Regions
difficulty: Medium
pattern: graphs
order: 83
bruteSummary: For each O not on border, BFS to see if region touches border before flipping.
bruteTime: O(m · n)
bruteSpace: O(m · n)
optimalSummary: Mark border-connected O cells safe first, flip remaining O to X.
optimalTime: O(m · n)
optimalSpace: O(1)
pitfalls: DFS from border O cells first; only capture regions not connected to border.
---
