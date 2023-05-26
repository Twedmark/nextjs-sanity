import Image from "next/image";
import { urlForImage } from "@/lib/image";
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Post } from "@/typings";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`*[_type == "post"]
    {
    slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function post({ params: { slug } }: Props) {
  const data = await getPost(slug);

  return (
    <article className="px-10 pb-20">
      <section className="space-y-2">
        <div className="relative flex flex-col content-center justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blue-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(data.mainImage).url()}
              alt={data.mainImage.alt ? data.mainImage.alt : data.author.name}
              fill
            />
          </div>
          <section className="">
            <div className="flex flex-col justify-between gap-y-5 m-1">
              <div>
                <h1 className="text-4xl font-extrabold">{data.title}</h1>
                <p className="text-sm">
                  {new Date(data._createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-row justify-between">
            <div className="text-center text-black items-center justify-end flex flex-row ">
              {data.categories?.map((category) => (
                <p
                  key={category._id}
                  className="bg-slate-500 py-1 px-2 m-1 rounded-md text-xs font-semibold max-w-fit"
                >
                  {category.title}
                </p>
              ))}
            </div>
            <div className="flex items-center space-x-2  md:flex-col ">
              <Image
                className="rounded-full"
                src={urlForImage(data.author.image).url()}
                alt={data.author.name}
                height={40}
                width={40}
              />
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{data.author.name}</h3>
                {/* <div>{data.author.bio}</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[bg-blue-300] my-6" />

      <div className="flex flex-col">
        <PortableText value={data.body} components={RichTextComponents} />
      </div>
    </article>
  );
}

export default post;
