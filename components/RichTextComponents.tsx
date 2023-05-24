import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/image";

export const RichTextComponents = {
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-5xl py-10 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-4xl py-10 font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl py-10 font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl py-10 font-bold">{children}</h4>;
    },

    blockquote: ({ children }: any) => {
      return (
        <blockquote className="italic border-l-[gb-blue-300] border-l-4 pl-5 py-5 my-5">
          {children}
        </blockquote>
      );
    },
  },

  types: {
    Image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlForImage(value).url()}
            alt={value.alt ? value.alt : "News image"}
            fill
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => {
      return <ul className="list-disc ml-10 py-5 space-y-5">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="mt-lg list-decimal">{children}</ol>;
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[bg-blue-700] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
