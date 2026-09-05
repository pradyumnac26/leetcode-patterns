---
title: Remove Nth Node From End of List
difficulty: Medium
pattern: linked-list
order: 38
bruteSummary: Count length, then traverse to (length - n)th node and remove next.
bruteTime: O(n)
bruteSpace: O(1)
optimalSummary: Two pointers n apart with dummy node; remove when fast reaches end.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Use dummy head to handle removing the first node; gap between pointers is exactly n.
---
