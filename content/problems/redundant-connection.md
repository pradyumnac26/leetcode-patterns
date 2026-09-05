---
title: Redundant Connection
difficulty: Medium
pattern: graphs
order: 88
bruteSummary: Remove edges one by one and test if graph stays connected with DFS.
bruteTime: O(n² · (V+E))
bruteSpace: O(V)
optimalSummary: Union-Find; first edge connecting already-connected nodes is redundant.
optimalTime: O(n α(n))
optimalSpace: O(n)
pitfalls: Return last redundant edge in input order; path compression speeds Union-Find.
---
