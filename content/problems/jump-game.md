---
title: Jump Game
difficulty: Medium
pattern: greedy
order: 120
bruteSummary: DFS or BFS all reachable positions from index 0.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Greedy track farthest reachable index; fail if i exceeds farthest.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Check i <= farthest before updating; zero jump range can block progress.
---
