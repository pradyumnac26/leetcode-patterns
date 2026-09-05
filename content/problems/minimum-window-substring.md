---
title: Minimum Window Substring
difficulty: Hard
pattern: sliding-window
order: 18
bruteSummary: Generate all substrings of s and test if each contains all characters of t.
bruteTime: O(n² · m)
bruteSpace: O(m)
optimalSummary: Expand window until t is covered, then shrink to minimize while tracking formed counts.
optimalTime: O(n + m)
optimalSpace: O(k)
pitfalls: Track required vs formed character counts; shrink only while window still covers all of t.
---
