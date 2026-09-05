---
title: Rotate Image
difficulty: Medium
pattern: math-geometry
order: 133
bruteSummary: Copy matrix to new array with index mapping for 90° rotation.
bruteTime: O(n²)
bruteSpace: O(n²)
optimalSummary: Transpose in place then reverse each row.
optimalTime: O(n²)
optimalSpace: O(1)
pitfalls: "Rotate clockwise: transpose then reverse rows; n×n square matrix only."
---
