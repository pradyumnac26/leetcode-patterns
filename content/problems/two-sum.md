---
title: Two Sum
difficulty: Easy
pattern: array-hashing
order: 2
bruteSummary: Check every pair with nested loops to see if they sum to target.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Use a hash map storing value to index. Check complement before inserting each number.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Cannot reuse the same element twice. Insert into map after checking complement.
video: "https://www.youtube.com/embed/KLlXCFG5TdA"
companies: [Amazon, Google, Apple, Bloomberg, Facebook]
---
