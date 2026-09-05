# DSA Pattern Notes

Pattern-wise revision notes for LeetCode and DSA interviews — grouped by technique family, with clarifying questions, approaches, and pitfalls for each problem.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `npm run build` (default)
4. Output: default
5. Deploy

No environment variables required.

## Adding or editing a problem

Create or edit a markdown file in `content/problems/` using the LeetCode slug as the filename.

Example: `content/problems/two-sum.md`

```yaml
---
title: Two Sum
difficulty: Easy
pattern: array-hashing
subpattern: hash-map
patternNote: Use a hash map storing value to index. Check complement before inserting.
order: 2
clarifyingQuestions:
  - Return indices or the values themselves?
bruteSummary: Check every pair with nested loops.
bruteTime: O(n²)
bruteSpace: O(1)
optimalSummary: Use a hash map for complements.
optimalTime: O(n)
optimalSpace: O(n)
pitfalls: Cannot reuse the same element twice.
companies: [Amazon, Google]
---
```

**Sub-patterns** are defined in `lib/subpatterns.ts`. Default assignments live in `lib/subpattern-map.ts` (override per file via frontmatter).
