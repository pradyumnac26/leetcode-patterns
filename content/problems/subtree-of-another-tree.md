---
title: Subtree of Another Tree
difficulty: Easy
pattern: trees
order: 50
bruteSummary: For every node in root, deep copy and compare entire subtree to subRoot.
bruteTime: O(n · m)
bruteSpace: O(n)
optimalSummary: At each node run same-tree check plus search left and right subtrees.
optimalTime: O(n · m)
optimalSpace: O(h)
pitfalls: Subtree must match structure from that node downward; identical tree is a subtree.
---
