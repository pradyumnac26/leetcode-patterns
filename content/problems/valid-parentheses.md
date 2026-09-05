---
title: Valid Parentheses
difficulty: Easy
pattern: stack
order: 20
bruteSummary: Repeatedly remove matching pairs like () until string empty or no more removals.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Stack open brackets and pop on matching close; valid if stack empty at end.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Check stack empty before pop; wrong bracket type or unmatched opens make string invalid.
---
