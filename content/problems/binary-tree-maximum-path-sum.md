---
title: Binary Tree Maximum Path Sum
difficulty: Hard
pattern: trees
order: 58
bruteSummary: Try every node as path apex and compute best path through it with recursive depth scans.
bruteTime: O(n²)
bruteSpace: O(h)
optimalSummary: Post-order return max single-branch gain; update global max with left + node + right.
optimalTime: O(n)
optimalSpace: O(h)
pitfalls: Path may be negative nodes; return max(0, branch gain) upward but global max can include negative if needed.
---
