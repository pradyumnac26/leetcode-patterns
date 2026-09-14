---
title: Two Sum - Sorted array
difficulty: Easy
pattern: two-pointers
subpattern: two-sum
order: 1
url: https://leetcode.com/problems/two-sum/
followUpNote: Follow-up to [Two Sum - unsorted](/problems/two-sum-unsorted). If the interviewer says the array is sorted in ascending order, switch to two pointers at both ends. Still O(n) time, but O(1) extra space instead of a hash map.

clarifyingQuestions:
  - Is the array sorted in ascending order?
  - Should we return 1-indexed or 0-indexed positions?
  - Is exactly one valid pair guaranteed?
  - Can the same element be used twice?

bruteSummary: Run two nested loops `(i, j)` where `i < j`. If `nums[i] + nums[j] == target`, return their indices.

bruteTime: O(n²)

bruteSpace: O(1)

optimalSummary: Use two pointers, `left = 0` and `right = len(nums) - 1`. While `left < right`, compare `nums[left] + nums[right]` with `target`. If the sum is too large, move `right` left; if too small, move `left` right; if equal, return `[left, right]`.

optimalTime: O(n)

optimalSpace: O(1)

pitfalls:
  - Moving both pointers on every step instead of only the side that makes the sum closer to `target`.
  - Forgetting that the array is sorted, so a larger sum means decrement `right`, not increment `left`.
---
