---
title: Single Number
difficulty: Easy
pattern: bit-manipulation
order: 141
bruteSummary: Hash map count frequencies and return key with count 1.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: XOR all numbers; pairs cancel leaving single element.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Every other element appears twice; XOR is commutative and self-inverse.
---
