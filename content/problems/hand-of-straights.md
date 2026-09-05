---
title: Hand of Straights
difficulty: Medium
pattern: greedy
order: 123
bruteSummary: Try all groupings of k consecutive cards from sorted multiset with backtracking.
bruteTime: O(2^n)
bruteSpace: O(n)
optimalSummary: Sort cards; freq map and greedily build groups from smallest available.
optimalTime: O(n log n)
optimalSpace: O(n)
pitfalls: Each group must be k consecutive values; count % k must be zero.
---
