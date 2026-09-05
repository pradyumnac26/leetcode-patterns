---
title: Course Schedule II
difficulty: Medium
pattern: graphs
order: 87
bruteSummary: Backtrack valid orderings until all courses placed.
bruteTime: O(n!)
bruteSpace: O(n)
optimalSummary: Kahn algorithm queueing in-degree zero nodes and appending to order.
optimalTime: O(V + E)
optimalSpace: O(V)
pitfalls: Return empty if order length < numCourses; in-degree counts incoming edges.
---
