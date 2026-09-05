---
title: Maximum Depth of Binary Tree
difficulty: Easy
pattern: trees
order: 46
bruteSummary: BFS level order counting levels until queue empty.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Recursive depth as 1 + max(left, right) with null base 0.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: Empty tree has depth 0; single node has depth 1.
---
