---
title: Pow(x, n)
difficulty: Medium
pattern: math-geometry
order: 138
bruteSummary: Multiply x by itself n times.
bruteTime: O(n)
bruteSpace: O(1)
optimalSummary: Binary exponentiation squaring base and halving exponent.
optimalTime: O(log n)
optimalSpace: O(1)
pitfalls: Handle negative exponent as 1/x^|n|; use long to avoid overflow.
---
