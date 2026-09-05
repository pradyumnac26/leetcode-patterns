---
title: Binary Tree Right Side View
difficulty: Medium
pattern: trees
order: 53
bruteSummary: Level order traversal and take last node per level.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: DFS visiting right child first; first node at each depth is rightmost.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: Right-side view is rightmost visible node per depth, not only right child.
---
