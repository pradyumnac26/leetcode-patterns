---
title: Construct Binary Tree from Preorder and Inorder
difficulty: Medium
pattern: trees
order: 57
bruteSummary: Find root in inorder with linear search each recursion, copy subarrays.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Hash map inorder indices; recurse on index ranges without copying.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Preorder[0] is root; inorder split gives left and right subtree sizes.
---
