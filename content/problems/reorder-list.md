---
title: Reorder List
difficulty: Medium
pattern: linked-list
order: 37
bruteSummary: Copy nodes to array, reconnect in alternating order from ends.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Find middle, reverse second half, merge two halves alternately in place.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Break links when merging to avoid cycles; odd length puts middle node at end.
---
