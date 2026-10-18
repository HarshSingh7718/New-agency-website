import {defineField, defineType} from "sanity";
import {iconOptions} from "../shared/icon-options";

export const linkType = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({name: "label", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "href", type: "string", description: "Relative path, anchor, mailto/tel link, or full URL.", validation: (rule) => rule.required()}),
    defineField({name: "icon", type: "string", options: {list: iconOptions}}),
  ],
  preview: {select: {title: "label", subtitle: "href"}},
});
