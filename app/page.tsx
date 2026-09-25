import type { Metadata } from "next";
import { cookies } from "next/headers";

import { HomeLanding } from "@/components/HomeLanding";
import { getDeckSummary } from "@/lib/get-cards";
import { parseTheme, THEME_COOKIE } from "@/lib/theme";

export const metadata: Metadata = {
  title: "dsapattern recaller",
  description:
    "Recall DSA patterns with swipeable cards — summary, complexity, and Python solutions.",
};

export default async function Home() {
  const [summary, cookieStore] = await Promise.all([getDeckSummary(), cookies()]);
  const initialTheme = parseTheme(cookieStore.get(THEME_COOKIE)?.value);

  return (
    <HomeLanding initialTheme={initialTheme} cardCount={summary.cardCount} />
  );
}
