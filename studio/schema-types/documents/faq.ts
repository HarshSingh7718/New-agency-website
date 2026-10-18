import {defineField, defineType} from "sanity";
import {collectionFields} from "../shared/collection-fields";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({name: "question", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "answer", type: "text", rows: 5, validation: (rule) => rule.required()}),
    ...collectionFields,
  ],
  orderings: [{title: "Display order", name: "displayOrder", by: [{field: "order", direction: "asc"}]}],
});
