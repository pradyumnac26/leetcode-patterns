---
title: Best Time to Buy and Sell Stock with Cooldown
difficulty: Medium
pattern: dynamic-programming
order: 110
bruteSummary: Recursively try buy, sell, or rest each day over all choices.
bruteTime: O(3^n)
bruteSpace: O(n)
optimalSummary: State machine DP for hold, sold, and cooldown/rest states.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: After sell must cooldown one day; track three states not just hold/cash.
---
