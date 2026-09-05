---
title: Invert Binary Tree
difficulty: Easy
pattern: trees
order: 45
bruteSummary: Create new mirrored tree by recursively copying nodes with swapped children.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Swap left and right at each node via DFS or BFS in place.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: Swap children at every node including leaves; null children stay null.
---
