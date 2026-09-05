---
title: Partition Equal Subset Sum
difficulty: Medium
pattern: dynamic-programming
order: 107
bruteSummary: Try all 2^n subsets checking if any sums to total/2.
bruteTime: O(n · 2^n)
bruteSpace: O(n)
optimalSummary: 0/1 knapsack DP on achievable sums up to total/2.
optimalTime: O(n · sum)
optimalSpace: O(sum)
pitfalls: Odd total sum impossible; target is sum/2 with each number used at most once.
---
