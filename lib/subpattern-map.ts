type SubPatternMeta = {
  subpattern: string;
  patternNote: string;
};

export const SUBPATTERN_MAP: Record<string, SubPatternMeta> = {
  "add-two-numbers": {
    subpattern: "linked-list",
    patternNote:
      "Add digit by digit with carry using list traversal.",
  },
  "all-nodes-distance-k-in-binary-tree": {
    subpattern: "tree-bfs",
    patternNote:
      "Build parent map via DFS, then BFS from target k levels to collect nodes.",
  },
};

export function getSubpatternMeta(slug: string): SubPatternMeta | undefined {
  return SUBPATTERN_MAP[slug];
}
