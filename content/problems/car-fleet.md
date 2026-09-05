---
title: Car Fleet
difficulty: Medium
pattern: stack
order: 25
bruteSummary: Simulate every car independently and merge fleets by comparing arrival times pairwise.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Sort by position descending; stack merge times when rear catches front.
optimalTime: O(n log n)
optimalSpace: O(n)
pitfalls: Compute time as (target - position) / speed; fleet merges when rear arrival time <= front.
---
