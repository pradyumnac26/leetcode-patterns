---
title: Jump Game II
difficulty: Medium
pattern: greedy
order: 121
bruteSummary: BFS treating each jump range as a level until end reached.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: "Greedy BFS levels: extend nextReach while scanning current jump boundary."
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Count jumps when reaching end of current level; last position needs no extra jump.
---
