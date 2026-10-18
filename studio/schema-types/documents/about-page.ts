import {defineArrayMember, defineField, defineType} from "sanity";
import {iconOptions} from "../shared/icon-options";

const titledItem = defineArrayMember({
  type: "object",
  fields: [
    defineField({name: "title", type: "string", validation: (rule) => rule.required()}),
    defineField({name: "description", type: "text", rows: 4, validation: (rule) => rule.required()}),
    defineField({name: "icon", type: "string", options: {list: iconOptions}, validation: (rule) => rule.required()}),
  ],
});

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({name: "seo", type: "seo", validation: (rule) => rule.required()}),
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({name: "title", type: "string", validation: (rule) => rule.required()}),
        defineField({name: "accentTitle", type: "string", validation: (rule) => rule.required()}),
        defineField({name: "description", type: "text", rows: 4, validation: (rule) => rule.required()}),
        defineField({name: "image", type: "accessibleImage", validation: (rule) => rule.required()}),
        defineField({name: "cta", type: "link", validation: (rule) => rule.required()}),
      ],
    }),
    defineField({
      name: "story",
      type: "object",
      fields: [
        defineField({name: "eyebrow", type: "string"}),
        defineField({name: "title", type: "string"}),
        defineField({name: "accentTitle", type: "string"}),
        defineField({name: "paragraphs", type: "array", of: [defineArrayMember({type: "text", rows: 4})]}),
      ],
    }),
    defineField({name: "values", type: "array", validation: (rule) => rule.required().min(1), of: [titledItem]}),
    defineField({
      name: "differentiatorsSection",
      type: "object",
      fields: [
        defineField({name: "heading", type: "sectionHeading"}),
        defineField({name: "items", type: "array", validation: (rule) => rule.required().min(1), of: [titledItem]}),
      ],
    }),
    defineField({
      name: "capabilitiesSection",
      type: "object",
      fields: [
        defineField({name: "heading", type: "sectionHeading"}),
        defineField({name: "items", type: "array", validation: (rule) => rule.required().min(1), of: [titledItem]}),
      ],
    }),
    defineField({name: "teamSection", type: "sectionHeading"}),
    defineField({
      name: "cta",
      type: "object",
      fields: [
        defineField({name: "title", type: "string"}),
        defineField({name: "accentTitle", type: "string"}),
        defineField({name: "description", type: "text", rows: 3}),
        defineField({name: "link", type: "link"}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: "About page"})},
});
