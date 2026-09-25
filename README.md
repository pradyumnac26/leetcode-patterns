# dsapattern recaller

Mobile-first PWA: vertical Reels-style cards. Each card shows pattern notes on the front; tap to flip to a scrollable Python solution with syntax highlighting.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use your browser’s device toolbar or a phone on the same network.

## Install as an app

- **iOS Safari**: Share → Add to Home Screen
- **Android Chrome**: Menu → Install app / Add to Home Screen

After the first visit, cached assets allow offline use (card content is included at build time).

## Add a card

Create a file in `content/cards/` named `your-problem.mdx`.

### Notes format (recommended)

Matches a structured interview-prep note:

```mdx
---
title: Vertical Order Traversal of a Binary Tree
pattern: bfs
subpattern: vertical-order-traversal
order: 0
url: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
clarifyingQuestions:
  - Should columns be returned from left to right?
  - Within the same column, should nodes be ordered from top to bottom?
optimalSummary: Your optimal approach in plain text.
optimalTime: O(n log n)
optimalSpace: O(n)
pitfalls:
  - First pitfall to remember.
  - Second pitfall to remember.
---

```python
class Solution:
    def solve(self) -> None:
        pass
```
```

- **id** comes from `subpattern`, or `id`, or the LeetCode slug in `url`.
- **`order`** controls default deck order (lower first). Shuffle still randomizes in the app.

### Classic format (still supported)

```mdx
---
id: your-problem
title: Your Problem
timeComplexity: O(n)
spaceComplexity: O(1)
leetcodeUrl: https://leetcode.com/problems/your-problem/
---

## Question

Problem statement here.

## Summary

Short approach here.

```python
class Solution:
    def solve(self) -> None:
        pass
```
```

Restart the dev server after adding files.

## Build

```bash
npm run build
npm start
```

## Controls

Only two options: **light / dark** theme and **shuffle** (random order, scrolls to top).
