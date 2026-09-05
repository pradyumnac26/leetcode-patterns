---
title: Clone Graph
difficulty: Medium
pattern: graphs
order: 80
bruteSummary: Serialize graph to adjacency list, deserialize to new nodes.
bruteTime: O(V + E)
bruteSpace: O(V)
optimalSummary: Hash map old to clone; DFS or BFS copying neighbors on first visit.
optimalTime: O(V + E)
optimalSpace: O(V)
pitfalls: Create clone before recursing neighbors to avoid infinite loop on cycles.
---
