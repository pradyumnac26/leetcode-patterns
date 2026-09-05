---
title: Reverse Linked List
difficulty: Easy
pattern: linked-list
order: 34
bruteSummary: Copy values to array, reverse array, rebuild list.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: "Iterative pointer reversal: prev=null, flip next each step."
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Save next before rewiring; return new head (former tail becomes head).
---
