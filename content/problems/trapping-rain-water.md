---
title: Trapping Rain Water
difficulty: Hard
pattern: two-pointers
order: 13
bruteSummary: For each bar, find max height left and right with nested scans, add trapped water.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Two pointers with running leftMax and rightMax; accumulate water on the smaller-max side.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Water at index i is min(leftMax, rightMax) minus height[i]; process the side with smaller max first.
---
