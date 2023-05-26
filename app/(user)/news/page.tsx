import { getPosts } from "@/sanity/sanity-utils";
import NewsList from "@/components/NewsList";

export default async function News() {
  const data = await getPosts();

  return <NewsList data={data} />;
}
