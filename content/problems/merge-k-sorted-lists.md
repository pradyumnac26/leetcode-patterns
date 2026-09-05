---
title: Merge K Sorted Lists
difficulty: Hard
pattern: linked-list
order: 43
bruteSummary: Collect all values, sort, build one list.
bruteTime: O(N log N)
bruteSpace: O(N)
optimalSummary: Min-heap of k list heads or divide-and-conquer pairwise merge.
optimalTime: O(N log k)
optimalSpace: O(k)
pitfalls: Push next node after pop from heap; divide-and-conquer merges pairs recursively.
---
