---
title: Insert Interval
difficulty: Medium
pattern: intervals
order: 127
bruteSummary: Insert new interval and sort all intervals then merge overlaps.
bruteTime: O(n log n)
bruteSpace: O(n)
optimalSummary: "Single pass: append before, merge overlapping, append after."
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Merge while newInterval overlaps current; newInterval may expand during merge.
---
