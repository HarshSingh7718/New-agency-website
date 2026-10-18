import {defineField, defineType} from "sanity";

export const sectionHeadingType = defineType({
  name: "sectionHeading",
  title: "Section heading",
  type: "object",
  fields: [
    defineField({name: "eyebrow", type: "string"}),
    defineField({name: "title", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "accentTitle", title: "Highlighted title text", type: "string"}),
    defineField({name: "description", type: "text", rows: 4}),
  ],
});
