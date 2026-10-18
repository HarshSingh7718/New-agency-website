import {defineField, defineType} from "sanity";
import {collectionFields} from "../shared/collection-fields";

export const technologyType = defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    defineField({name: "name", type: "string", validation: (rule) => rule.required()}),
    defineField({
      name: "icon",
      type: "string",
      description: "Supported keys include react, nextjs, tailwind, typescript, nodejs, python, graphql, aws, vercel, docker, postgresql, mongodb, prisma, supabase, and figma.",
      validation: (rule) => rule.required(),
    }),
    ...collectionFields,
  ],
  orderings: [{title: "Display order", name: "displayOrder", by: [{field: "order", direction: "asc"}]}],
});
