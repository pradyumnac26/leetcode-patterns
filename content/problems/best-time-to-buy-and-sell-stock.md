---
title: Best Time to Buy and Sell Stock
difficulty: Easy
pattern: sliding-window
order: 14
bruteSummary: For each day, check profit from buying on any earlier day and selling today.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Track minimum price seen so far and update max profit each day.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Must buy before sell; update min price before computing profit for current day.
---
