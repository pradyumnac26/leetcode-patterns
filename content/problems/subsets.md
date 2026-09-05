---
title: Subsets
difficulty: Medium
pattern: backtracking
order: 70
bruteSummary: Generate all 2^n bitmask combinations and build subset for each mask.
bruteTime: O(n · 2^n)
bruteSpace: O(2^n)
optimalSummary: Backtrack include/exclude each element or iterative append to existing subsets.
optimalTime: O(n · 2^n)
optimalSpace: O(2^n)
pitfalls: Include empty subset; backtrack by undoing choice after recursive call.
---
