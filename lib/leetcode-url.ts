const LEETCODE_PROBLEM_BASE = "https://leetcode.com/problems";

export function leetcodeProblemUrl(id: string, override?: string): string {
  const custom = override?.trim();
  if (custom) return custom;
  return `${LEETCODE_PROBLEM_BASE}/${id}/`;
}
