---
title: Cheapest Flights Within K Stops
difficulty: Medium
pattern: graphs
order: 95
bruteSummary: DFS/BFS all paths up to k+1 edges tracking min cost.
bruteTime: O(k · E · V)
bruteSpace: O(V)
optimalSummary: Bellman-Ford k+1 relaxation rounds or BFS by stop level.
optimalTime: O(k · E)
optimalSpace: O(V)
pitfalls: At most k stops means k+1 edges; relax all edges k+1 times in Bellman-Ford variant.
---
