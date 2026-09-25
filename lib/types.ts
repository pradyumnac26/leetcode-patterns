export type Card = {
  id: string;
  title: string;
  leetcodeUrl: string;
  pattern: string;
  subpattern: string;
  order: number | null;
  question: string;
  clarifyingQuestions: string[];
  summary: string;
  pitfalls: string[];
  timeComplexity: string;
  timeComplexityExplanation: string;
  spaceComplexity: string;
  spaceComplexityExplanation: string;
  code: string;
  codeHtmlLight: string;
  codeHtmlDark: string;
};
