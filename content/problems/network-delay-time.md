---
title: Network Delay Time
difficulty: Medium
pattern: graphs
order: 94
bruteSummary: Run Bellman-Ford or Floyd-Warshall from source for all pairs.
bruteTime: O(V · E)
bruteSpace: O(V²)
optimalSummary: Dijkstra with min-heap from source; answer is max shortest distance.
optimalTime: O(E log V)
optimalSpace: O(V)
pitfalls: Return -1 if any node unreachable; answer is max of all shortest paths from source.
---
