---
title: Generate Parentheses
difficulty: Medium
pattern: stack
order: 23
bruteSummary: Generate all bracket strings of length 2n and filter valid ones.
bruteTime: O(4^n / √n)
bruteSpace: O(4^n / √n)
optimalSummary: Backtrack adding ( when open < n and ) when close < open.
optimalTime: O(4^n / √n)
optimalSpace: O(n)
pitfalls: Never add ) when close >= open; add ( only while open < n.
---
