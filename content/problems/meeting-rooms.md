---
title: Meeting Rooms
difficulty: Easy
pattern: intervals
order: 130
bruteSummary: Compare every pair of intervals for overlap.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Sort by start; overlap if any start < previous end.
optimalTime: O(n log n)
optimalSpace: O(1)
pitfalls: Sort by start time; adjacent meetings [0,5] and [5,10] do not overlap.
---
