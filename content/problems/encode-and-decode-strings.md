---
title: Encode and Decode Strings
difficulty: Medium
pattern: array-hashing
order: 7
bruteSummary: Join strings with a delimiter and escape delimiter characters inside strings.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: "Length-delimited encoding: write len#str for each string, decode by reading length then substring."
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Delimiter-based encoding breaks when strings contain the delimiter; length prefix must include delimiter.
---
