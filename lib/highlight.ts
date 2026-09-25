import { createHighlighter, type Highlighter } from "shiki";

export type HighlightTheme = "vitesse-light" | "vitesse-dark";

let highlighterPromise: Promise<Highlighter> | null = null;

async function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      langs: ["python"],
      themes: ["vitesse-light", "vitesse-dark"],
    });
  }
  return highlighterPromise;
}

export async function highlightPython(
  code: string,
  theme: HighlightTheme,
): Promise<string> {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang: "python",
    theme,
  });
}
