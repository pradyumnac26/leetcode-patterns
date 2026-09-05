---
title: Linked List Cycle
difficulty: Easy
pattern: linked-list
order: 36
bruteSummary: Hash set of visited nodes; cycle if node seen again.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Floyd tortoise and hare; cycle if fast and slow meet.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Move slow one step and fast two steps; empty list or single node with null next has no cycle.
---
