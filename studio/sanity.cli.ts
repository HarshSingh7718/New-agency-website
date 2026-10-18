import {defineCliConfig} from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "1ktaw25p",
    dataset: "production",
  },
  typegen: {
    enabled: true,
    path: "../src/**/*.{ts,tsx,js,jsx}",
    schema: "schema.json",
    generates: "../sanity.types.ts",
    overloadClientMethods: true,
  },
});
