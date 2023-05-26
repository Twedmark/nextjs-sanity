import { Post } from "@/typings";
import { urlForImage } from "../lib/image";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  data: Post[];
};

export default function NewsList({ data }: Props) {
  return (
    <div className="cursor-pointer grid grid-cols-1 gap-6 px-8 md:grid-cols-2 xl:grid-cols-3 ">
      {data.map((post) => (
        <ClientSideRoute key={post._id} route={`/news/${post.slug.current}`}>
          <div
            className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 
          transition-transform duration-200 ease-out "
          >
            <div className="w-full flex flex-col justify-center content-center ">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlForImage(post.mainImage).url()}
                alt={post.title}
                priority={true}
                fill
              />
              <div
                className="absolute bottom-0 w-full bg-opacity-20 bg-black
               backdrop-blur-lg rounded text-white p-5 flex justify-between"
              >
                <div>
                  <p className="font-bold">{post.author.name}</p>

                  <p>{new Date(post._createdAt).toLocaleDateString()}</p>
                </div>
                <div className=" flex flex-col md:flex-row gap-y-2 md-gap-x-2 items-center">
                  {post.categories?.map((category) => (
                    <div
                      key={category._id}
                      className=" bg-slate-500 text-center text-black px-3 py-1 
                      rounded-full text-sm font-semibold"
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex-1">
              <p className="underline text-lg font-bold">{post.title}</p>
              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read Post -&gt;
              </p>
            </div>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
}
