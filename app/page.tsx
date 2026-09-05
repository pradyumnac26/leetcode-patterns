import { getDefaultData, getProblemCount } from "@/lib/content";
import { HomeClient } from "@/components/HomeClient";

export default function HomePage() {
  const data = getDefaultData();
  return <HomeClient data={data} problemCount={getProblemCount()} />;
}
