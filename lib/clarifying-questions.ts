const PATTERN_CLARIFYING_QUESTIONS: Record<string, string[]> = {
  "array-hashing": [
    "What are the input size and value constraints?",
    "Can the input contain duplicates or negative numbers?",
    "Should we optimize for time, space, or both?",
  ],
  "two-pointers": [
    "Is the input sorted, or can we sort it first?",
    "How should we handle duplicate values in the answer?",
    "What should we return if no valid pair or triplet exists?",
  ],
  "sliding-window": [
    "Is the window size fixed or variable?",
    "What is the character or element set we are tracking?",
    "What counts as a valid window for this problem?",
  ],
  stack: [
    "What should happen on invalid or empty input?",
    "Are we matching pairs, maintaining order, or evaluating an expression?",
    "Can nested structures go arbitrarily deep?",
  ],
  "binary-search": [
    "Is the search space sorted or monotonic?",
    "Are we finding an exact value, a boundary, or a minimum feasible answer?",
    "How should we handle duplicates in the array?",
  ],
  "linked-list": [
    "Are we given the head only, or also length and tail pointers?",
    "Should the solution run in O(1) extra space?",
    "How should we handle cycles or null nodes?",
  ],
  trees: [
    "What is the tree node structure and can values be negative?",
    "Do we need inorder, preorder, level order, or any traversal?",
    "Should we solve it recursively, iteratively, or both?",
  ],
  tries: [
    "What alphabet or character set do keys use?",
    "Are we supporting insert, search, prefix search, or deletion?",
    "What are typical key length and dictionary size limits?",
  ],
  heap: [
    "Do we need a min-heap or max-heap, and what is k?",
    "Are we streaming data or given the full input upfront?",
    "What tie-breaking rule applies when values are equal?",
  ],
  backtracking: [
    "Can elements or positions be reused?",
    "Do we need all solutions or just one?",
    "What pruning conditions can we apply early?",
  ],
  graphs: [
    "Is the graph directed or undirected, weighted or unweighted?",
    "How is the graph represented in input?",
    "Are we counting components, shortest paths, or detecting cycles?",
  ],
  "dynamic-programming": [
    "What is the state, and what does dp[i] or dp[i][j] represent?",
    "Can we optimize space from 2D to 1D?",
    "What are the base cases and transition order?",
  ],
  greedy: [
    "What local choice leads to a globally optimal solution here?",
    "Do we need to sort first, and by what key?",
    "Can a counterexample disprove a greedy strategy?",
  ],
  intervals: [
    "Are intervals inclusive or exclusive at the endpoints?",
    "Should merged or scheduled output be sorted?",
    "Can intervals overlap partially or only fully?",
  ],
  "math-geometry": [
    "What are the coordinate or matrix bounds?",
    "Are we allowed to use extra space or must it be in-place?",
    "How should we handle overflow or floating-point precision?",
  ],
  "bit-manipulation": [
    "Are numbers signed or unsigned, and what is their bit width?",
    "Can we use arithmetic, or must we stick to bitwise ops only?",
    "What edge cases involve 0, negatives, or power-of-two values?",
  ],
};

const PROBLEM_CLARIFYING_QUESTIONS: Record<string, string[]> = {
  "two-sum": [
    "Return indices or the values themselves?",
    "Can the same element be used twice?",
    "Is there exactly one valid pair?",
  ],
  "contains-duplicate": [
    "Are we checking duplicate values or duplicate indices?",
    "Can we modify the input array?",
    "What should we return for an empty array?",
  ],
  "add-two-numbers": [
    "Are digits stored in reverse or forward order?",
    "How should we handle lists of different lengths?",
    "What if the final sum creates an extra carry digit?",
  ],
  "valid-anagram": [
    "Are we comparing strings of equal length only?",
    "Is the character set limited to lowercase letters?",
    "Should the solution be case-sensitive?",
  ],
  "3sum": [
    "Can the same triplet appear more than once in the output?",
    "Should the output triplets be sorted and deduplicated?",
    "Can numbers be reused across different triplets?",
  ],
  "longest-substring-without-repeating-characters": [
    "What characters can appear in the string?",
    "Do we return length only or the substring itself?",
    "How do we handle an empty string?",
  ],
  "binary-search": [
    "Is the array strictly sorted or can it contain duplicates?",
    "What should we return if the target is not found?",
    "Can the array be empty?",
  ],
  "reverse-linked-list": [
    "Should we reverse in-place or return a new list?",
    "Do we need iterative, recursive, or both solutions?",
    "What if the list has zero or one node?",
  ],
  "number-of-islands": [
    "Can we mutate the grid to mark visited cells?",
    "Are diagonal connections considered adjacent?",
    "What characters represent land and water?",
  ],
  "coin-change": [
    "Can each coin denomination be used unlimited times?",
    "What should we return if the amount cannot be formed?",
    "Are coin values always positive?",
  ],
};

const FALLBACK_QUESTIONS = [
  "What are the input and output formats?",
  "What edge cases should we handle?",
  "What time and space constraints matter most?",
];

export function getClarifyingQuestions(slug: string, pattern: string): string[] {
  return (
    PROBLEM_CLARIFYING_QUESTIONS[slug] ??
    PATTERN_CLARIFYING_QUESTIONS[pattern] ??
    FALLBACK_QUESTIONS
  );
}
