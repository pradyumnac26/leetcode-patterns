---
title: Last Stone Weight
difficulty: Easy
pattern: heap
order: 64
bruteSummary: Repeatedly find two largest stones by sorting or scanning each round.
bruteTime: O(n² log n)
bruteSpace: O(1)
optimalSummary: Max-heap; pop two largest, push difference if non-zero.
optimalTime: O(n log n)
optimalSpace: O(n)
pitfalls: If y == x stone is destroyed entirely; push y - x only when difference positive.
---
