---
title: Serialize and Deserialize Binary Tree
difficulty: Hard
pattern: trees
order: 59
bruteSummary: Store preorder with null markers and rebuild by scanning with index pointer.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: BFS or DFS encoding with null tokens; decode in same traversal order.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Must encode null children to preserve shape; decode must consume tokens in same order as encode.
---
