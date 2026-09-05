---
title: Reverse Nodes in k-Group
difficulty: Hard
pattern: linked-list
order: 44
bruteSummary: Extract k nodes at a time to array, reverse, reconnect; repeat.
bruteTime: O(n)
bruteSpace: O(k)
optimalSummary: In-place reverse k nodes per group with pointer rewiring; leave partial tail unchanged.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Check remaining length >= k before reversing; connect previous group tail to new head.
---
