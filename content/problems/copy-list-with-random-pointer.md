---
title: Copy List with Random Pointer
difficulty: Medium
pattern: linked-list
order: 39
bruteSummary: Deep copy via serialization to array then rebuild with index map.
bruteTime: O(n)
bruteSpace: O(n)
optimalSummary: Hash map old node to clone; two passes to copy nodes then set random pointers.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Create all clones before setting random pointers; map must include null random as null.
---
