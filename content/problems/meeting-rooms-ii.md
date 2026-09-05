---
title: Meeting Rooms II
difficulty: Medium
pattern: intervals
order: 131
bruteSummary: Try all assignments of meetings to rooms checking overlaps.
bruteTime: O(n!)
bruteSpace: O(n)
optimalSummary: Min-heap of end times; pop if new start ≥ earliest end, push new end.
optimalTime: O(n log n)
optimalSpace: O(n)
pitfalls: Heap size is concurrent meetings; sort intervals by start before processing.
---
