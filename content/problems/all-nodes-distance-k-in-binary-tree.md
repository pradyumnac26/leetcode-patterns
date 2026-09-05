---
title: All Nodes Distance K in Binary Tree
difficulty: Medium
pattern: trees
subpattern: tree-bfs
order: 0
clarifyingQuestions:
  - Is the target node guaranteed to exist in the tree?
  - Can k be 0, and should we return only the target?
  - Are node values unique, or only node references matter?
bruteSummary: Collect all nodes, build adjacency list treating edges as undirected, BFS from target for k levels.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Build parent map with DFS, then BFS from target using parent, left, and right neighbors.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Must traverse upward via parent links; mark visited to avoid cycles. Handle k = 0 before BFS.
---
