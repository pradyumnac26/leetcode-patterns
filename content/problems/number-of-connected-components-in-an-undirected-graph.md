---
title: Number of Connected Components
difficulty: Medium
pattern: graphs
order: 89
bruteSummary: Build adjacency list and DFS from every unvisited node counting components.
bruteTime: O(V + E)
bruteSpace: O(V)
optimalSummary: Union-Find merging edges and count distinct roots.
optimalTime: O(V + E α(V))
optimalSpace: O(V)
pitfalls: Nodes may be labeled 0 to n-1; count components not edges.
---
