---
title: Contains Duplicate
difficulty: Easy
pattern: array-hashing
order: 0
bruteSummary: Sort the array and scan adjacent pairs for duplicates.
bruteTime: O(n log n)
bruteSpace: O(1)
optimalSummary: Use a hash set and insert each number while checking membership. Return true on first duplicate.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Sorting in place mutates the array; hash set approach treats duplicate values, not duplicate indices.
video: "https://www.youtube.com/embed/3OamzN90kPg"
companies: [Amazon, Apple, Adobe]
---
