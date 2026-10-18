import {defineField, defineType} from "sanity";

export const accessibleImageType = defineType({
  name: "accessibleImage",
  title: "Image",
  type: "image",
  options: {hotspot: true},
  fields: [defineField({name: "alt", title: "Alternative text", type: "string", validation: (rule) => rule.required()})],
});
