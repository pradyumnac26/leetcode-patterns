---
title: Plus One
difficulty: Easy
pattern: math-geometry
order: 137
bruteSummary: Convert digit array to bigint, add one, convert back.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Add from least significant digit with carry propagation.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Handle carry overflow adding new digit 1 at front; all nines case increases length.
---
