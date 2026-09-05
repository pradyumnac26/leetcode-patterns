---
title: Valid Sudoku
difficulty: Medium
pattern: array-hashing
order: 6
bruteSummary: For each filled cell, scan its entire row, column, and 3×3 box for duplicates.
bruteTime: O(1)
bruteSpace: O(1)
optimalSummary: Track seen digits in three hash sets per row, column, and box index. Single pass rejects any duplicate.
optimalTime: O(1)
optimalSpace: O(1)
pitfalls: "Box index is (row/3)*3 + col/3; empty cells ('.') should be skipped."
---
