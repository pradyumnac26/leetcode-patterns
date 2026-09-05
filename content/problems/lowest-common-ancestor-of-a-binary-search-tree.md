---
title: Lowest Common Ancestor of a BST
difficulty: Medium
pattern: trees
order: 51
bruteSummary: Store path from root to p and q, find last common node.
bruteTime: O(h)
bruteSpace: O(h)
optimalSummary: Walk from root using BST ordering until paths diverge; current node is LCA.
optimalTime: O(h)
optimalSpace: O(1)
pitfalls: When p and q split to left/right, current node is LCA; equal values handled by BST property.
---
