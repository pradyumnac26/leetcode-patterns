---
title: Combination Sum
difficulty: Medium
pattern: backtracking
order: 71
bruteSummary: Generate all combinations with repetition and filter those summing to target.
bruteTime: O(2^target)
bruteSpace: O(target)
optimalSummary: Backtrack from start index allowing reuse; subtract candidate and recurse.
optimalTime: O(2^target)
optimalSpace: O(target)
pitfalls: Allow reuse by passing same index i; stop early when remaining target negative.
---
