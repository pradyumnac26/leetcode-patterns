---
title: Find the Duplicate Number
difficulty: Medium
pattern: linked-list
order: 41
bruteSummary: Sort array or use boolean array to mark seen values.
bruteTime: O(n log n)
bruteSpace: O(n)
optimalSummary: Treat indices as next pointers and use Floyd cycle detection on duplicate value.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Cannot modify array in O(1) space variant; Floyd finds duplicate value, not index.
---
