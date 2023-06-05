import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    { name: "companyName", type: "string", title: "Company name" },
    { name: "address", type: "string", title: "Address" },
    {
      name: "email",
      type: "email",
      title: "Email",
      validation: (Rule) => Rule.email(),
    },
    { name: "phoneNumber", type: "number", title: "Phone Number" },
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
  preview: {
    select: {
      title: "companyName",
      subtitle: "city",
    },
  },
});
