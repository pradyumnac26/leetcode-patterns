---
title: Max Area of Island
difficulty: Medium
pattern: graphs
order: 81
bruteSummary: For each cell run DFS counting component size without memoization across starts.
bruteTime: O(m · n)
bruteSpace: O(m · n)
optimalSummary: DFS or BFS from each unvisited 1 returning area and marking visited.
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Sink visited land to 0 to avoid recount; water cells are not part of area.
---
