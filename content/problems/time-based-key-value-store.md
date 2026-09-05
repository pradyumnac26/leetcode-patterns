---
title: Time Based Key-Value Store
difficulty: Medium
pattern: binary-search
order: 32
bruteSummary: Linear scan all timestamps for a key to find largest ≤ query.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Store sorted (timestamp, value) lists per key; binary search on get.
optimalTime: O(log n)
optimalSpace: O(n)
pitfalls: Return empty string if no timestamp ≤ query; timestamps strictly increase on set.
---
