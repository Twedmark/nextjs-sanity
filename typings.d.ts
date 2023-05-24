import type { BlockEditor } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Home extends Base {
  body: block[];
  mainImage: Image;
}

interface Footer extends Base {
  companyName: string;
  address: string;
  email: string;
  phoneNumber: string;
  links: string[];
}

interface Header extends Base {
  companyName: string;
  logo: Image;
}

interface Post extends Base {
  title: string;
  slug: slug;
  author: Author;
  mainImage: Image;
  body: block[];
  categories: category[];
}

interface Author extends Base {
  name: string;
  title: string;
  image: Image;
  bio: block[];
}

type category = {
  _id: string;
  _type: string;
  title: string;
  description: string;
};

type slug = {
  _type: string;
  current: string;
};

type Image = {
  alt?: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};
