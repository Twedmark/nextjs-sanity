import { RichTextComponents } from "@/components/RichTextComponents";
import { urlForImage } from "@/lib/image";
import { getHome } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Home() {
  const data = await getHome();

  return (
    <main className="flex flex-col">
      <div className="h-[40vh] w-full relative ">
        <div className="absolute w-full h-full top-0">
          <Image
            className=" object-cover object-center mx-auto"
            src={urlForImage(data.mainImage).url()}
            alt={data.mainImage.alt ? data.mainImage.alt : "Splash Image"}
            fill
          />
        </div>
      </div>
      <div className="grid p-5 gap-5 [&>ol]:grid-cols-2 [&>ol]:grid [&>ol]:gap-4 [&>li]: ">
        <PortableText value={data.body} components={RichTextComponents} />
      </div>
    </main>
  );
}
