---
title: Burst Balloons
difficulty: Hard
pattern: dynamic-programming
order: 117
bruteSummary: Try every last balloon to burst in range recursively.
bruteTime: O(n!)
bruteSpace: O(n)
optimalSummary: Interval DP choosing last burst k in (l,r) with padded boundaries.
optimalTime: O(n³)
optimalSpace: O(n²)
pitfalls: Pad with 1 on ends; burst k last so left and right subproblems are independent.
---
