---
title: N-Queens
difficulty: Hard
pattern: backtracking
order: 78
bruteSummary: Try all n^n placements and validate no attacks.
bruteTime: O(n^n)
bruteSpace: O(n)
optimalSummary: Backtrack row by row tracking cols and diagonals with sets.
optimalTime: O(n!)
optimalSpace: O(n)
pitfalls: Track col and both diagonals (row±col); place one queen per row.
---
