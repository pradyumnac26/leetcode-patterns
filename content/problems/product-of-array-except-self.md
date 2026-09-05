---
title: Product of Array Except Self
difficulty: Medium
pattern: array-hashing
order: 5
bruteSummary: For each index, multiply all other elements with an inner loop.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Build prefix products left to right and suffix products right to left without division.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Division is disallowed; handle zeros by counting zero count or using prefix/suffix passes.
---
