---
title: Graph Valid Tree
difficulty: Medium
pattern: graphs
order: 90
bruteSummary: DFS/BFS checking connectivity and counting edges equals n-1.
bruteTime: O(V + E)
bruteSpace: O(V)
optimalSummary: Union-Find reject edge if same root; verify one component and n-1 edges.
optimalTime: O(V + E α(V))
optimalSpace: O(V)
pitfalls: Tree needs exactly n-1 edges and no cycles; extra edge or disconnected graph fails.
---
