---
title: Reverse Bits
difficulty: Easy
pattern: bit-manipulation
order: 144
bruteSummary: Convert to binary string, reverse, parse back.
bruteTime: O(32)
bruteSpace: O(32)
optimalSummary: Extract bits from right of n and build result left with shifts.
optimalTime: O(32)
optimalSpace: O(1)
pitfalls: Fixed 32-bit input; process all 32 bits even if leading zeros.
---
