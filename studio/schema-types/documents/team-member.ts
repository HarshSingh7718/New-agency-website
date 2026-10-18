import {defineField, defineType} from "sanity";
import {collectionFields} from "../shared/collection-fields";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({name: "name", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "role", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "image", type: "accessibleImage", validation: (rule) => rule.required()}),
    defineField({name: "introVideoUrl", type: "url", validation: (rule) => rule.uri({scheme: ["http", "https"]})}),
    ...collectionFields,
  ],
  orderings: [{title: "Display order", name: "displayOrder", by: [{field: "order", direction: "asc"}]}],
});
