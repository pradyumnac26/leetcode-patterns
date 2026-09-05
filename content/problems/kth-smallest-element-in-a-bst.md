---
title: Kth Smallest Element in a BST
difficulty: Medium
pattern: trees
order: 56
bruteSummary: Inorder traversal into array then return kth element.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Iterative inorder with stack stopping at kth visit.
optimalTime: O(h + k)
optimalSpace: O(h)
pitfalls: k is 1-indexed; inorder of BST gives sorted order.
---
