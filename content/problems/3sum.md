---
title: 3Sum
difficulty: Medium
pattern: two-pointers
order: 11
bruteSummary: Try all triplets with three nested loops and skip duplicates manually.
bruteTime: O(n³)
bruteSpace: O(1)
optimalSummary: Sort array, fix one index, two-pointer the rest for zero sum while deduplicating.
optimalTime: O(n²)
optimalSpace: O(1)
pitfalls: Skip duplicate values for the fixed index and after finding a valid triplet to avoid repeats.
---
