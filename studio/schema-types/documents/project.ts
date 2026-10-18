import {defineField, defineType} from "sanity";
import {collectionFields} from "../shared/collection-fields";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({name: "title", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "description", type: "text", rows: 4, validation: (rule) => rule.required()}),
    defineField({name: "url", type: "string", description: "Relative path or full project URL.", validation: (rule) => rule.required()}),
    defineField({name: "image", type: "accessibleImage", validation: (rule) => rule.required()}),
    defineField({name: "tag", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "cardColor", type: "string", initialValue: "#16110e", validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/)}),
    defineField({name: "accentColor", type: "string", initialValue: "#E91E8C", validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/)}),
    defineField({name: "textOnDark", type: "boolean", initialValue: true}),
    ...collectionFields,
  ],
  orderings: [{title: "Display order", name: "displayOrder", by: [{field: "order", direction: "asc"}]}],
});
