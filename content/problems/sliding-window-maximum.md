---
title: Sliding Window Maximum
difficulty: Hard
pattern: sliding-window
order: 19
bruteSummary: For each window, scan all k elements to find the maximum.
bruteTime: O(n · k)
bruteSpace: O(1)
optimalSummary: Monotonic deque storing indices in decreasing value order; front is current max.
optimalTime: O(n)
optimalSpace: O(k)
pitfalls: Pop indices outside window from front; store indices not values to handle duplicates.
---
