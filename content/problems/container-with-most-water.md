---
title: Container With Most Water
difficulty: Medium
pattern: two-pointers
order: 12
bruteSummary: Check every pair of lines and compute area as min height times width.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Two pointers at ends; always move the shorter line inward since it limits height.
optimalTime: O(n)
optimalSpace: O(1)
pitfalls: Area uses min of two heights, not max; moving the taller line never improves area.
---
