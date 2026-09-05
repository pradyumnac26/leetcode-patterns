---
title: Merge Triplets to Form Target Triplet
difficulty: Medium
pattern: greedy
order: 124
bruteSummary: Try all subsets of triplets OR-ing values checking against target.
bruteTime: O(2^n)
bruteSpace: O(1)
optimalSummary: Keep triplets where each value ≤ target and track max per dimension from valid ones.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Reject triplet if any value exceeds target; need max of each dimension to cover target.
---
