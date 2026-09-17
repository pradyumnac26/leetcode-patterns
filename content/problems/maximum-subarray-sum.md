---
title: Maximum Subarray Sum
difficulty: Medium
pattern: dynamic-programming
subpattern: subarrays
order: 0
url: https://leetcode.com/problems/maximum-subarray/

clarifyingQuestions:
  - Do we return the sum only, or also the subarray indices?
  - Can the array contain all negative numbers?
  - What should we return for an empty array?

bruteSummary: Run 2 loops and try every possible starting index, for each start, keep extending the subarray one element at a time while maintaining a running sum. After adding each new element, update the maximum subarray sum seen so far.

bruteTime: O(n²)

bruteSpace: O(1)

optimalSummary:   Kadane's Algorithm. Initialize `sumi = 0` and iterate through the array.
Before adding the current element, if `sumi < 0`, reset `sumi` to `0` because a negative running sum will only decrease the sum of any future subarray. Then add the current element to `sumi` and update the maximum subarray sum (`maxi`) on every iteration.

optimalTime: O(n)

optimalSpace: O(1)

pitfalls:
  - Initializing `max_sum` to 0 fails when the maximum subarray sum is negative (e.g., `[-5]` → `-5`). Initialize it with `nums[0]` so every valid subarray sum is considered.
  - Initializing `max_sum` to 0 fails when all numbers are negative because the answer can be a negative value (e.g., `[-3, -2]` → `-2`).
  - Checking `sumi < 0` after adding the current element (`sumi = sumi + nums[i]`) can incorrectly reset the current element, especially in all-negative arrays. Always discard a negative running sum before adding the next element.
