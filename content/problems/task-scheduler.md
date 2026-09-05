---
title: Task Scheduler
difficulty: Medium
pattern: heap
order: 67
bruteSummary: Try all valid task orderings with backtracking respecting cooldown.
bruteTime: O(n!)
bruteSpace: O(n)
optimalSummary: Max-heap by frequency scheduling n+1 sized cycles, or math formula with idle slots.
optimalTime: O(n)
optimalSpace: O(26)
pitfalls: "Idle slots fill gaps between most frequent task runs; formula uses (maxFreq-1)*(n+1) + countMaxFreq."
---
