---
title: Validate Binary Search Tree
difficulty: Medium
pattern: trees
order: 55
bruteSummary: Inorder traversal and verify strictly increasing sequence.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: DFS with min/max bounds passed down; reject if val out of range.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: BST requires strict inequality; equal values in left/right violate BST.
---
