---
title: Kth Largest Element in an Array
difficulty: Medium
pattern: heap
order: 63
bruteSummary: Sort array descending and return element at index k-1.
bruteTime: O(n log n)
bruteSpace: O(1)
optimalSummary: Min-heap of size k or quickselect partition.
optimalTime: O(n log k)
optimalSpace: O(k)
pitfalls: kth largest is not kth index in ascending sort; min-heap of size k keeps k largest.
---
