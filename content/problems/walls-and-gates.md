---
title: Walls and Gates
difficulty: Medium
pattern: graphs
order: 85
bruteSummary: BFS from each gate independently filling distances.
bruteTime: O(m · n · gates)
bruteSpace: O(m · n)
optimalSummary: Multi-source BFS from all gates simultaneously.
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: Only update empty room if shorter distance; INF rooms unreachable stay INF.
---
