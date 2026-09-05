---
title: Diameter of Binary Tree
difficulty: Easy
pattern: trees
order: 47
bruteSummary: For each node compute left and right depths separately and track max sum.
bruteTime: O(n²)
bruteSpace: O(h)
optimalSummary: Return height upward while updating global max as leftDepth + rightDepth at each node.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: Diameter is edges count through node (left height + right height); update global before returning height.
---
