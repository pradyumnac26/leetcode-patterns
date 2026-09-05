---
title: Valid Parenthesis String
difficulty: Medium
pattern: greedy
order: 126
bruteSummary: "Try every interpretation of * as (, ), or empty with recursion."
bruteTime: O(3^n)
bruteSpace: O(n)
optimalSummary: Track min and max possible open count through string; valid if min can reach 0.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: "* can be empty, (, or ); track range of open counts, not single value."
---
