---
title: Sum of Two Integers
difficulty: Medium
pattern: bit-manipulation
order: 146
bruteSummary: Use built-in addition operator.
bruteTime: O(1)
bruteSpace: O(1)
optimalSummary: XOR for sum without carry, AND shifted for carry; repeat until carry zero.
optimalTime: O(1)
optimalSpace: O(1)
pitfalls: Loop while carry non-zero; mask to 32-bit in languages with fixed width.
---
