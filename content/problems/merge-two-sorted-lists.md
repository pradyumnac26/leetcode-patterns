---
title: Merge Two Sorted Lists
difficulty: Easy
pattern: linked-list
order: 35
bruteSummary: Collect all values, sort, build new list.
bruteTime: O((n+m) log(n+m))
bruteSpace: O(n+m)
optimalSummary: Dummy head merge attaching smaller node each step.
optimalTime: O(n + m)
optimalSpace: O(1)
pitfalls: Attach remaining tail when one list exhausts; use dummy node to simplify head handling.
---
