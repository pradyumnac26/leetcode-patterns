---
title: Regular Expression Matching
difficulty: Hard
pattern: dynamic-programming
order: 118
bruteSummary: "Recursive matching with branching on . and * for every position."
bruteTime: O(2^(m+n))
bruteSpace: O(m+n)
optimalSummary: "2D DP handling . as any char and * as zero or more of prior char."
optimalTime: O(m · n)
optimalSpace: O(m · n)
pitfalls: "a* matches zero a's; check zero-match case before consuming char for x* pattern."
---
