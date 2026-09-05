---
title: Binary Search
difficulty: Easy
pattern: binary-search
order: 27
bruteSummary: Linear scan the sorted array for target.
bruteTime: O(n)
bruteSpace: O(1)
optimalSummary: Classic binary search halving search space each step.
optimalTime: O(log n)
optimalSpace: O(1)
pitfalls: Use mid = left + (right - left) / 2 to avoid overflow; loop while left <= right.
---
