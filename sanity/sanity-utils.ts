import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { Header, Footer, Post, Home, Author } from "@/typings";

export async function getHome(): Promise<Home> {
  const query = groq`*[_type == "home"][0]{
  ...,
  }
  `;
  const response = await client.fetch(query);
  const data = await response;

  return data;
}

export async function getFooter(): Promise<Footer> {
  const query = groq`*[_type == "footer"][0] {
  _id,
  companyName,
  address,
  email,
  phoneNumber,
  links[],
  }
  `;

  const response = await client.fetch(query);
  const data = await response;

  return data;
}

export async function getHeader(): Promise<Header> {
  const query = groq`*[_type == "header"][0]{
  _id,
  companyName,
  logo,

  }
  `;
  const response = await client.fetch(query);
  const data = await response;

  return data;
}

export async function getPosts(): Promise<Post[]> {
  const query = groq`*[_type == "post"]{
  _id,
  _createdAt,
  title,
  slug,
  author->,
  mainImage,
  body,
  categories[]->,
} | order(_createdAt desc)
`;

  const data = await client.fetch(query);

  return data;
}

export async function getPost(slug: string): Promise<Post> {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  slug,
  author->,
  mainImage,
  body,
  categories[]->,
}`;

  const data = await client.fetch(query, { slug });

  return data;
}

export async function getAuthors(): Promise<Author[]> {
  const query = groq`*[_type == "author"]{
  ...,
  } | order(_createdAt asc)
  `;

  const data = await client.fetch(query);
  console.log(data);

  return data;
}
