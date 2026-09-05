---
title: Spiral Matrix
difficulty: Medium
pattern: math-geometry
order: 134
bruteSummary: Mark visited cells and simulate direction changes with extra matrix.
bruteTime: O(m · n)
bruteSpace: O(m · n)
optimalSummary: Four boundaries top/bottom/left/right shrinking after each direction pass.
optimalTime: O(m · n)
optimalSpace: O(1)
pitfalls: Shrink boundaries after completing each direction; check top <= bottom and left <= right.
---
