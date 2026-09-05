---
title: Binary Tree Level Order Traversal
difficulty: Medium
pattern: trees
order: 52
bruteSummary: Track depth of each node with BFS and group by depth in a map.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: BFS processing queue level by level using snapshot of queue size.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Snapshot queue size before processing level; empty tree returns empty list.
---
