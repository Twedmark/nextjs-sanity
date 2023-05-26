import { urlForImage } from "@/lib/image";
import { getAuthors } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function About() {
  const data = await getAuthors();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center ">About</h1>
      <div className="grid gap-5 p-[8vw] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((author) => (
          <div
            key={author._id}
            className="relative w-full h-80 drop-shadow-xl  "
          >
            <div className="w-full flex flex-col justify-center content-center ">
              <Image
                className="object-cover object-center"
                src={urlForImage(author.image).url()}
                alt={author.name}
                fill
              />
              <div
                className="absolute bottom-0 w-full bg-opacity-20 bg-black
                backdrop-blur-lg rounded text-white p-2 flex justify-between"
              >
                <p className="">{author.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
