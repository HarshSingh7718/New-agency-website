import {visionTool} from "@sanity/vision";
import {defineConfig} from "sanity";
import {presentationTool} from "sanity/presentation";
import {structureTool} from "sanity/structure";
import {resolve} from "./presentation/resolve";
import {schemaTypes, singletonTypes} from "./schema-types";
import {structure} from "./structure";

const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000";

export default defineConfig({
  name: "default",
  title: "RapidGro Digital",
  projectId: "1ktaw25p",
  dataset: "production",
  plugins: [
    structureTool({structure}),
    presentationTool({
      resolve,
      previewUrl: {
        origin: previewOrigin,
        previewMode: {enable: "/api/draft-mode/enable"},
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (actions, context) =>
      singletonTypes.has(context.schemaType)
        ? actions.filter(({action}) => action !== "delete" && action !== "duplicate")
        : actions,
  },
});
