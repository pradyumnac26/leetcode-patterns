---
title: Search in Rotated Sorted Array
difficulty: Medium
pattern: binary-search
order: 31
bruteSummary: Find rotation point then binary search in correct half, or linear search.
bruteTime: O(n)
bruteSpace: O(1)
optimalSummary: "One binary search pass: identify sorted half and check if target lies there."
optimalTime: O(log n)
optimalSpace: O(1)
pitfalls: One half is always sorted; check if target falls in sorted half before moving pointers.
---
