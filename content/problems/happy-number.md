---
title: Happy Number
difficulty: Easy
pattern: math-geometry
order: 136
bruteSummary: Compute digit square sums and store all seen values in array until repeat or 1.
bruteTime: O(log n)
bruteSpace: O(log n)
optimalSummary: Floyd cycle detection on digit square sum sequence.
optimalTime: O(log n)
optimalSpace: O(1)
pitfalls: Loop until 1 (happy) or cycle detected (not happy); sum squares of each digit.
---
