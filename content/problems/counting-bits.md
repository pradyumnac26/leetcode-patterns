---
title: Counting Bits
difficulty: Easy
pattern: bit-manipulation
order: 143
bruteSummary: For each i count bits by checking each bit position.
bruteTime: O(n log n)
bruteSpace: O(1)
optimalSummary: "dp[i] = dp[i >> 1] + (i & 1)."
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: "dp[0]=0; right shift drops last bit, i&1 adds it back."
---
