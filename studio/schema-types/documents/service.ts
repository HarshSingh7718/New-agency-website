import {defineField, defineType} from "sanity";
import {collectionFields} from "../shared/collection-fields";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({name: "title", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "description", type: "text", rows: 4, validation: (rule) => rule.required()}),
    defineField({name: "image", type: "accessibleImage", validation: (rule) => rule.required()}),
    defineField({name: "cardColor", type: "string", initialValue: "#0f0a1e", validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/)}),
    ...collectionFields,
  ],
  orderings: [{title: "Display order", name: "displayOrder", by: [{field: "order", direction: "asc"}]}],
});
