---
title: Longest Substring Without Repeating Characters
difficulty: Medium
pattern: sliding-window
order: 15
bruteSummary: Check every substring for duplicate characters using a set.
bruteTime: O(n²)
bruteSpace: O(min(n, alphabet))
optimalSummary: Sliding window with a set or map; shrink left while duplicate exists.
optimalTime: O(n)
optimalSpace: O(min(n, alphabet))
pitfalls: Shrink from left until duplicate removed; map can store last index to jump left pointer faster.
---
