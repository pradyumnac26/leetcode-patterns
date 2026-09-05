export type SubPattern = {
  id: string;
  name: string;
  order: number;
};

export const UNCATEGORIZED_SUBPATTERN_ID = "uncategorized";

export const SUBPATTERNS: SubPattern[] = [
  { id: "linked-list", name: "Linked List", order: 0 },
  { id: "tree-bfs", name: "Tree BFS", order: 1 },
  { id: UNCATEGORIZED_SUBPATTERN_ID, name: "Uncategorized", order: 99 },
];

export function getSubPatternById(id: string): SubPattern | undefined {
  return SUBPATTERNS.find((subpattern) => subpattern.id === id);
}
