import {defineField} from "sanity";

export const collectionFields = [
  defineField({
    name: "sourceKey",
    type: "string",
    description: "Stable key used only by the one-time content migration.",
    hidden: true,
    readOnly: true,
  }),
  defineField({name: "order", type: "number", initialValue: 100, validation: (rule) => rule.required().integer().min(0)}),
  defineField({name: "active", type: "boolean", initialValue: true}),
];
