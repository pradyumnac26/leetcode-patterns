---
title: Longest Increasing Path in a Matrix
difficulty: Hard
pattern: dynamic-programming
order: 114
bruteSummary: DFS from every cell without memo exploring all paths.
bruteTime: O(2^(m·n))
bruteSpace: O(m · n)
optimalSummary: DFS with memo from each cell moving only to larger neighbors.
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Move only to strictly larger neighbors; memoize path length from each cell.
---
