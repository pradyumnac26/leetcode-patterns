---
title: Find Median from Data Stream
difficulty: Hard
pattern: heap
order: 69
bruteSummary: Insert each number into sorted array with binary search insertion.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: "Two heaps: max-heap lower half, min-heap upper half, rebalanced after each add."
optimalTime: O(log n)
optimalSpace: O(n)
pitfalls: Keep sizes balanced within 1; max heap top is lower median for even count.
---
