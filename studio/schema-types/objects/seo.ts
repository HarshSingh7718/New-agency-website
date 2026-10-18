import {defineArrayMember, defineField, defineType} from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({name: "title", type: "string", validation: (rule) => rule.required().max(70)}),
    defineField({name: "description", type: "text", rows: 3, validation: (rule) => rule.required().max(170)}),
    defineField({name: "keywords", type: "array", of: [defineArrayMember({type: "string"})]}),
    defineField({name: "image", type: "accessibleImage"}),
  ],
});
