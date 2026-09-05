---
title: Reconstruct Itinerary
difficulty: Hard
pattern: graphs
order: 92
bruteSummary: Backtrack all Eulerian paths lexicographically until one uses all tickets.
bruteTime: O(E!)
bruteSpace: O(E)
optimalSummary: Hierholzer DFS with lex-sorted neighbors; append airports post-order.
optimalTime: O(E log E)
optimalSpace: O(E)
pitfalls: Use all tickets exactly once; sort neighbors lexicographically for smallest itinerary.
---
