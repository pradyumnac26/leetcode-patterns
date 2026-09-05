---
title: Design Twitter
difficulty: Medium
pattern: heap
order: 68
bruteSummary: On getNewsFeed collect all tweets from followees, sort by time, take 10.
bruteTime: O(N log N)
bruteSpace: O(N)
optimalSummary: Per-user tweet lists plus max-heap merge of followee heads for top 10.
optimalTime: O(k log k)
optimalSpace: O(k)
pitfalls: Include self in follow list; merge k sorted tweet lists for recent 10 only.
---
