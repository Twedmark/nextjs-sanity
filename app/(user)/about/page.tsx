import { getAuthors } from "@/sanity/sanity-utils";

export default async function About() {
  const data = await getAuthors();
  console.log(data);

  return (
    <div>
      <h1>Authors</h1>
      <div className="grid grid-cols-4 gap-5">
        {data.map((author) => (
          <div key={author._id}>
            <h2>{author.name}</h2>
            <p>{author.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
