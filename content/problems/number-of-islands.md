---
title: Number of Islands
difficulty: Medium
pattern: graphs
order: 79
bruteSummary: For each unvisited land cell flood fill with recursive DFS marking visited.
bruteTime: O(m · n)
bruteSpace: O(m · n)
optimalSummary: Same DFS or BFS flood fill; iterative BFS avoids deep recursion.
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: "Mark visited when entering cell; count only on unvisited '1' cells."
---
