export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "leetcards-theme";
export const THEME_COOKIE = "leetcards-theme";

export const THEME_COLORS: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#0d0d0d",
};

export function parseTheme(value: string | undefined | null): Theme {
  return value === "dark" ? "dark" : "light";
}

export function themeCookieValue(theme: Theme): string {
  return `${THEME_COOKIE}=${theme};path=/;max-age=31536000;SameSite=Lax`;
}
