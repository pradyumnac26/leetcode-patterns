---
title: Evaluate Reverse Polish Notation
difficulty: Medium
pattern: stack
order: 22
bruteSummary: Parse tokens repeatedly until one value remains using recursive reduction.
bruteTime: O(n²)
bruteSpace: O(n)
optimalSummary: Stack operands; on operator pop two, compute, push result.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Division truncates toward zero; ensure two operands exist before applying operator.
---
