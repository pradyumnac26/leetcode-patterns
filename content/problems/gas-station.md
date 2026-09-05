---
title: Gas Station
difficulty: Medium
pattern: greedy
order: 122
bruteSummary: Try every starting station and simulate full circuit for each.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: If total gas ≥ total cost, single pass finds valid start when running tank never negative.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: If total gas < total cost return -1; reset start when tank goes negative.
---
