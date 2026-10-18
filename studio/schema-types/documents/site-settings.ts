import {defineArrayMember, defineField, defineType} from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    {name: "identity", title: "Identity", default: true},
    {name: "navigation", title: "Navigation"},
    {name: "contact", title: "Contact & social"},
    {name: "footer", title: "Footer"},
    {name: "tools", title: "Popup & chatbot"},
  ],
  fields: [
    defineField({name: "brandName", type: "string", group: "identity", validation: (rule) => rule.required()}),
    defineField({name: "shortBrandName", type: "string", group: "identity", validation: (rule) => rule.required()}),
    defineField({name: "logo", type: "accessibleImage", group: "identity", validation: (rule) => rule.required()}),
    defineField({
      name: "contact",
      type: "object",
      group: "contact",
      fields: [
        defineField({name: "email", type: "email", validation: (rule) => rule.required()}),
        defineField({name: "phoneDisplay", title: "Displayed phone", type: "string", validation: (rule) => rule.required()}),
        defineField({name: "phoneHref", title: "Telephone link", type: "string", description: "Example: tel:+919762951896", validation: (rule) => rule.required().regex(/^tel:\+/)}),
        defineField({name: "whatsappUrl", type: "url", validation: (rule) => rule.required().uri({scheme: ["https"]})}),
        defineField({name: "address", type: "text", rows: 3, validation: (rule) => rule.required()}),
        defineField({name: "mapUrl", type: "url", validation: (rule) => rule.required().uri({scheme: ["http", "https"]})}),
      ],
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      group: "contact",
      description: "One shared source for the mobile menu and social rail.",
      validation: (rule) => rule.required().min(1),
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({name: "label", type: "string", validation: (rule) => rule.required()}),
          defineField({name: "platform", type: "string", options: {list: ["facebook", "instagram", "linkedin", "x", "youtube"]}, validation: (rule) => rule.required()}),
          defineField({name: "url", type: "url", validation: (rule) => rule.required().uri({scheme: ["http", "https"]})}),
        ],
        preview: {select: {title: "label", subtitle: "url"}},
      })],
    }),
    defineField({
      name: "header",
      type: "object",
      group: "navigation",
      fields: [
        defineField({
          name: "announcements",
          type: "array",
          of: [defineArrayMember({
            type: "object",
            fields: [
              defineField({name: "text", type: "string", validation: (rule) => rule.required()}),
              defineField({name: "linkLabel", type: "string"}),
              defineField({name: "href", type: "string"}),
            ],
          })],
        }),
        defineField({name: "quickConsultLabel", type: "string", validation: (rule) => rule.required()}),
        defineField({name: "phoneCtaLabel", type: "string", validation: (rule) => rule.required()}),
      ],
    }),
    defineField({
      name: "navigation",
      title: "Primary navigation",
      type: "array",
      group: "navigation",
      validation: (rule) => rule.required().min(1),
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({name: "label", type: "string", validation: (rule) => rule.required()}),
          defineField({name: "href", type: "string", validation: (rule) => rule.required()}),
          defineField({
            name: "groups",
            type: "array",
            of: [defineArrayMember({
              type: "object",
              fields: [
                defineField({name: "title", type: "string", validation: (rule) => rule.required()}),
                defineField({name: "items", type: "array", of: [defineArrayMember({type: "link"})], validation: (rule) => rule.required().min(1)}),
              ],
            })],
          }),
        ],
        preview: {select: {title: "label", subtitle: "href"}},
      })],
    }),
    defineField({
      name: "footer",
      type: "object",
      group: "footer",
      fields: [
        defineField({name: "largeText", type: "string", validation: (rule) => rule.required()}),
        defineField({name: "accent", type: "string", initialValue: "#E91E8C", validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/)}),
        defineField({name: "copyright", type: "string", description: "Use {year} for the current year.", validation: (rule) => rule.required()}),
        defineField({
          name: "columns",
          type: "array",
          of: [defineArrayMember({
            type: "object",
            fields: [
              defineField({name: "title", type: "string", validation: (rule) => rule.required()}),
              defineField({name: "links", type: "array", of: [defineArrayMember({type: "link"})], validation: (rule) => rule.required().min(1)}),
            ],
          })],
        }),
        defineField({name: "legal", type: "array", of: [defineArrayMember({type: "link"})]}),
      ],
    }),
    defineField({
      name: "popup",
      type: "object",
      group: "tools",
      fields: [
        defineField({name: "enabled", type: "boolean", initialValue: true}),
        defineField({name: "delaySeconds", type: "number", initialValue: 20, validation: (rule) => rule.required().integer().min(0).max(300)}),
        defineField({name: "heading", type: "string"}),
        defineField({name: "description", type: "text", rows: 3}),
        defineField({name: "testimonialQuote", type: "text", rows: 4}),
        defineField({name: "testimonialName", type: "string"}),
        defineField({name: "testimonialRole", type: "string"}),
        defineField({
          name: "stats",
          type: "array",
          of: [defineArrayMember({
            type: "object",
            fields: [
              defineField({name: "label", type: "string", validation: (rule) => rule.required()}),
              defineField({name: "value", type: "string", validation: (rule) => rule.required()}),
            ],
          })],
        }),
        defineField({name: "instantHelpLabel", type: "string"}),
        defineField({name: "fullNamePlaceholder", type: "string"}),
        defineField({name: "companyPlaceholder", type: "string"}),
        defineField({name: "emailPlaceholder", type: "string"}),
        defineField({name: "phonePlaceholder", type: "string"}),
        defineField({name: "detailsPlaceholder", type: "string"}),
        defineField({name: "submitLabel", type: "string"}),
        defineField({name: "successTitle", type: "string"}),
        defineField({name: "successMessage", type: "text", rows: 3}),
        defineField({name: "errorTitle", type: "string"}),
        defineField({name: "errorMessage", type: "text", rows: 3}),
        defineField({name: "privacyText", type: "string"}),
      ],
    }),
    defineField({
      name: "chatbot",
      type: "object",
      group: "tools",
      fields: [
        defineField({name: "enabled", type: "boolean", initialValue: true}),
        defineField({name: "name", type: "string"}),
        defineField({name: "providerLabel", type: "string"}),
        defineField({name: "welcome", type: "text", rows: 3}),
        defineField({name: "suggestedReplies", type: "array", validation: (rule) => rule.max(3), of: [defineArrayMember({type: "string"})]}),
        defineField({name: "handoffLabel", type: "string"}),
        defineField({name: "inputLabel", type: "string"}),
        defineField({name: "inputPlaceholder", type: "string"}),
        defineField({name: "launcherLabel", type: "string"}),
        defineField({name: "notice", type: "string"}),
        defineField({name: "unavailableMessage", type: "string"}),
        defineField({name: "knowledge", type: "text", rows: 12, description: "Verified agency facts supplied to the AI assistant. Never enter secrets."}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: "Site settings"})},
});
