---
title: Min Stack
difficulty: Medium
pattern: stack
order: 21
bruteSummary: On getMin, scan entire stack for minimum value.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Maintain parallel min stack storing running minimum on each push.
optimalTime: O(1)
optimalSpace: O(n)
pitfalls: Pop from both stacks together; push duplicate min when new value equals current min.
---
