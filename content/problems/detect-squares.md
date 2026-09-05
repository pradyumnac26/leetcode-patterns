---
title: Detect Squares
difficulty: Medium
pattern: math-geometry
order: 140
bruteSummary: For each query point pair check all axis-aligned square completions.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Hash map point counts; for pair (p1,p2) verify other two corners exist.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: "Square must be axis-aligned with non-zero side; count(p1)*count(p2) for valid diagonal pairs."
---
