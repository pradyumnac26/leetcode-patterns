---
title: Kth Largest Element in a Stream
difficulty: Easy
pattern: heap
order: 66
bruteSummary: Keep all elements sorted on each add and return kth from end.
bruteTime: O(n log n)
bruteSpace: O(n)
optimalSummary: Min-heap of size k; top is kth largest after each add.
optimalTime: O(log k)
optimalSpace: O(k)
pitfalls: Do not pop until size exceeds k; heap top is kth largest, not largest.
---
