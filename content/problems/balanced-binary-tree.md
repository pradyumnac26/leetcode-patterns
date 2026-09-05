---
title: Balanced Binary Tree
difficulty: Easy
pattern: trees
order: 48
bruteSummary: At each node recompute subtree heights recursively and check balance.
bruteTime: O(n log n)
bruteSpace: O(h)
optimalSummary: Post-order return height or -1 if unbalanced; bubble failure up.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: Balance requires |leftHeight - rightHeight| <= 1 at every node; return -1 sentinel on failure.
---
