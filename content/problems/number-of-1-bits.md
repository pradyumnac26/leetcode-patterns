---
title: Number of 1 Bits
difficulty: Easy
pattern: bit-manipulation
order: 142
bruteSummary: Check each of 32 bits with shift and mask.
bruteTime: O(32)
bruteSpace: O(1)
optimalSummary: "Repeatedly clear lowest set bit with n & (n-1) and count."
optimalTime: O(k)
optimalSpace: O(1)
pitfalls: "Treat as unsigned 32-bit; n & (n-1) removes lowest set bit."
---
