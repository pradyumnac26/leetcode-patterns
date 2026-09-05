---
title: Median of Two Sorted Arrays
difficulty: Hard
pattern: binary-search
order: 33
bruteSummary: Merge both arrays and pick middle element(s).
bruteTime: O(m + n)
bruteSpace: O(m + n)
optimalSummary: Binary search partition on smaller array ensuring left max ≤ right min on both sides.
optimalTime: O(log(min(m,n)))
optimalSpace: O(1)
pitfalls: Partition so left sizes equal (m+n+1)/2; handle odd/even total length for median formula.
---
