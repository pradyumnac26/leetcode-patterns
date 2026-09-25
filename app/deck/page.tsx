import { cookies } from "next/headers";

import { CardApp } from "@/components/CardApp";
import { getCards } from "@/lib/get-cards";
import { parseTheme, THEME_COOKIE } from "@/lib/theme";

export default async function DeckPage() {
  const [cards, cookieStore] = await Promise.all([getCards(), cookies()]);
  const initialTheme = parseTheme(cookieStore.get(THEME_COOKIE)?.value);

  return <CardApp cards={cards} initialTheme={initialTheme} />;
}
