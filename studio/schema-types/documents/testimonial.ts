import {defineField, defineType} from "sanity";
import {collectionFields} from "../shared/collection-fields";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({name: "quote", type: "text", rows: 6, validation: (rule) => rule.required()}),
    defineField({name: "name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "company", type: "string"}),
    defineField({name: "source", type: "string", initialValue: "Google Review", validation: (rule) => rule.required()}),
    defineField({name: "rating", type: "number", initialValue: 5, validation: (rule) => rule.required().min(1).max(5)}),
    defineField({name: "verified", type: "boolean", initialValue: true}),
    ...collectionFields,
  ],
  orderings: [{title: "Display order", name: "displayOrder", by: [{field: "order", direction: "asc"}]}],
});
