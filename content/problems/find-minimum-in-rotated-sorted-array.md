---
title: Find Minimum in Rotated Sorted Array
difficulty: Medium
pattern: binary-search
order: 30
bruteSummary: Linear scan for the element smaller than its predecessor.
bruteTime: O(n)
bruteSpace: O(1)
optimalSummary: Binary search comparing mid to right end to decide which half contains minimum.
optimalTime: O(log n)
optimalSpace: O(1)
pitfalls: No duplicates in this variant; compare nums[mid] with nums[right] to pick half.
---
