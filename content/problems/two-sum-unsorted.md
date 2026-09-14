---
title: Two Sum - Unsorted array
difficulty: Easy
pattern: array-hashing
subpattern: two-sum
order: 0
url: https://leetcode.com/problems/two-sum/
followUpNote: Start here for Two Sum. Same LeetCode link, but this slug is for when the array is not sorted. Optimal approach is a hash map in O(n) time.

clarifyingQuestions:
  - Can there be more than one solution ? 
  - Is the Array sorted ? 
  - Are there duplicate elements in the list ? 
  - Can the array contain duplicate numbers?
  - Can the array contain negative numbers ? 
  - What should I return if no solution exists?

bruteSummary: Run 2 for loops `(i, j)` where `i < j`. If `nums[i] + nums[j] == target`, return their indices.

bruteTime: O(n²)

bruteSpace: O(1)

optimalSummary: Maintain a hash map of `{number -> index}` for numbers seen so far. As we traverse the array for each number, find the diff `target - num`. If the diff already exists in the hash map, return its stored index along with the current index. Otherwise, store the current number and continue.

optimalTime: O(n)

optimalSpace: O(n)

pitfalls:
  - Storing the current number before checking for the diff can incorrectly match the same element with itself.
 
---