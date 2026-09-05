---
title: Course Schedule
difficulty: Medium
pattern: graphs
order: 86
bruteSummary: Try all orderings of courses validating prerequisites each time.
bruteTime: O(n!)
bruteSpace: O(n)
optimalSummary: Topological sort via Kahn BFS or DFS three-color cycle detection.
optimalTime: O(V + E)
optimalSpace: O(V)
pitfalls: Cycle in prerequisite graph means impossible; build adjacency from prereq to course.
---
