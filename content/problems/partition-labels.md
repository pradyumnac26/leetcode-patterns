---
title: Partition Labels
difficulty: Medium
pattern: greedy
order: 125
bruteSummary: Try every partition point and verify each part contains only chars in that range.
bruteTime: O(n²)
bruteSpace: O(26)
optimalSummary: Record last index of each char; extend partition end to max last index seen.
optimalTime: O(n)
optimalSpace: O(26)
pitfalls: Cut partition when index reaches current partition end; all occurrences of char must fit in part.
---
