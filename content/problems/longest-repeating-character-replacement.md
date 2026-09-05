---
title: Longest Repeating Character Replacement
difficulty: Medium
pattern: sliding-window
order: 16
bruteSummary: Try every substring and count if it can be made uniform with at most k replacements.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Variable window valid when length minus max frequency is at most k; expand and shrink accordingly.
optimalTime: O(n)
optimalSpace: O(26)
pitfalls: Window is valid when windowLen - maxFreq <= k; shrink only when invalid.
---
