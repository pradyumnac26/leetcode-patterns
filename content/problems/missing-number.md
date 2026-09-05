---
title: Missing Number
difficulty: Easy
pattern: bit-manipulation
order: 145
bruteSummary: Sort array and find index where value ≠ index.
bruteTime: O(n log n)
bruteSpace: O(1)
optimalSummary: XOR all indices 0..n with all array values, or use sum formula.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: "Range is 0..n with one missing; sum formula: expected - actual."
---
