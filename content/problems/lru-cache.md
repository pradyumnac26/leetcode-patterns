---
title: LRU Cache
difficulty: Medium
pattern: linked-list
order: 42
bruteSummary: Array or list with linear scan on get/put to update order and evict LRU.
bruteTime: O(n)
bruteSpace: O(capacity)
optimalSummary: Hash map plus doubly linked list for O(1) get, put, and eviction.
optimalTime: O(1)
optimalSpace: O(capacity)
pitfalls: Move node to head on get; evict tail on capacity overflow; update existing key moves node.
---
