---
title: Top View of a Binary Tree
difficulty: Medium
pattern: bfs
subpattern: vertical-order-traversal
order: 0
url: https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1

clarifyingQuestions:
  - Should the top view be returned from left to right?
  - If multiple nodes fall in the same column, which one should be visible?
  - Can the tree be empty?

optimalSummary: "Traverse the tree using BFS while tracking `(node, column)` with col as the key, and node as the value. Store only the first node seen for each column in a dictionary. Do not overwrite a column once it has been added. After traversal, sort the dictionary keys from left to right and append the corresponding node values to the final result."

optimalTime: O(n log n)

optimalSpace: O(n)

pitfalls:
  - Overwriting an existing column value will lose the topmost node. Only store a value when the column is seen for the first time.
  - Row tracking is not required for the top view if BFS is used.
  - Iterating directly over a dictionary does not sort columns numerically. Use `sorted(res.keys())` to return the view from left to right.
