import { promises as fs } from "fs";
import Listings from "./_components/listings/Listings";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/_lib/schema.json", "utf8");
  const data = JSON.parse(file);
  return <Listings listings={data} />;
}
