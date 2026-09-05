---
title: Set Matrix Zeroes
difficulty: Medium
pattern: math-geometry
order: 135
bruteSummary: Collect all zero positions then set entire rows and columns in second pass.
bruteTime: O(m · n)
bruteSpace: O(m + n)
optimalSummary: Use first row and column as markers with separate flags for row0/col0.
optimalTime: O(m · n)
optimalSpace: O(1)
pitfalls: Process markers before zeroing first row/col; use flags for whether row0/col0 originally had zero.
---
