---
title: Top K Frequent Elements
difficulty: Medium
pattern: array-hashing
order: 4
bruteSummary: Count all frequencies then sort unique elements by count descending and take first k.
bruteTime: O(n log n)
bruteSpace: O(n)
optimalSummary: Use bucket sort indexed by frequency or a min-heap of size k.
optimalTime: O(n log k)
optimalSpace: O(n)
pitfalls: Bucket sort needs frequency range up to n; min-heap returns kth largest when size stays k.
---
