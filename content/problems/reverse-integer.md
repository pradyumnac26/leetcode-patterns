---
title: Reverse Integer
difficulty: Medium
pattern: bit-manipulation
order: 147
bruteSummary: Convert to string, reverse digits, parse int with sign handling.
bruteTime: O(log x)
bruteSpace: O(log x)
optimalSummary: Pop digit from x with mod, push onto result checking overflow before multiply.
optimalTime: O(log x)
optimalSpace: O(1)
pitfalls: Return 0 on 32-bit overflow; strip sign, reverse, reapply sign.
---
