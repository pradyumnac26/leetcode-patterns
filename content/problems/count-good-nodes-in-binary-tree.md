---
title: Count Good Nodes in Binary Tree
difficulty: Medium
pattern: trees
order: 54
bruteSummary: For each node check path from root ensuring no ancestor exceeds current value.
bruteTime: O(n · h)
bruteSpace: O(h)
optimalSummary: DFS passing max from root; count node if val ≥ maxSoFar.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: Root is always good; update maxSoFar when descending, compare node val before updating.
---
