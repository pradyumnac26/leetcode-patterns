---
title: Koko Eating Bananas
difficulty: Medium
pattern: binary-search
order: 29
bruteSummary: Try every eating speed from 1 to max pile and simulate hours for each.
bruteTime: O(n · max pile)
bruteSpace: O(1)
optimalSummary: Binary search minimum feasible speed where sum of ceil(pile/k) ≤ h.
optimalTime: O(n log max pile)
optimalSpace: O(1)
pitfalls: Hours per pile is ceil(pile/k); binary search on speed, not hours.
---
