---
title: Search a 2D Matrix
difficulty: Medium
pattern: binary-search
order: 28
bruteSummary: Flatten matrix and linear search, or scan row by row.
bruteTime: O(mn)
bruteSpace: O(1)
optimalSummary: Treat matrix as 1D sorted array via row = mid/cols, col = mid%cols; binary search.
optimalTime: O(log(mn))
optimalSpace: O(1)
pitfalls: Each row sorted and first element of row > last of previous row; treat as flat sorted array.
---
