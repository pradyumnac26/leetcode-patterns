---
title: Target Sum
difficulty: Medium
pattern: dynamic-programming
order: 112
bruteSummary: Try assigning + or - to each number recursively.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: Reduce to subset sum counting ways to reach (sum + target) / 2.
optimalTime: O(n · sum)
optimalSpace: O(sum)
pitfalls: (sum + target) must be even and non-negative; subset sum uses positive nums only.
---
