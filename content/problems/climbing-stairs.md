---
title: Climbing Stairs
difficulty: Easy
pattern: dynamic-programming
order: 96
bruteSummary: Recursively compute ways(n) = ways(n-1) + ways(n-2) without memo.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: Bottom-up DP or two variables tracking last two Fibonacci values.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Base cases n=1 and n=2; Fibonacci recurrence with ways(1)=1, ways(2)=2.
---
