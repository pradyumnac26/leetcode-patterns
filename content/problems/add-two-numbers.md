---
title: Add Two Numbers
difficulty: Medium
pattern: linked-list
subpattern: linked-list
order: 0
bruteSummary: Convert both lists to integers, add, convert back to list.
bruteTime: O(max(n,m))
bruteSpace: O(max(n,m))
optimalSummary: Add digit by digit with carry using list traversal.
optimalTime: O(max(n,m))
optimalSpace: O(1)
pitfalls: Handle final carry with extra node; lists store digits in reverse order.
---
