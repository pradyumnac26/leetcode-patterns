---
title: Permutations
difficulty: Medium
pattern: backtracking
order: 72
bruteSummary: Generate all n! permutations via next-permutation or recursive insertion.
bruteTime: O(n · n!)
bruteSpace: O(n)
optimalSummary: Backtrack swapping nums[start] with each later index.
optimalTime: O(n · n!)
optimalSpace: O(n)
pitfalls: Swap to place element at start, backtrack swap after exploring; distinct integers only.
---
