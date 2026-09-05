---
title: K Closest Points to Origin
difficulty: Medium
pattern: heap
order: 65
bruteSummary: Sort all points by squared distance and take first k.
bruteTime: O(n log n)
bruteSpace: O(n)
optimalSummary: Max-heap of size k by distance or quickselect on distances.
optimalTime: O(n log k)
optimalSpace: O(k)
pitfalls: Compare squared distance to avoid sqrt; max-heap keeps k smallest by evicting farthest.
---
