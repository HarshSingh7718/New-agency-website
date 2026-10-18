import {defineCliConfig} from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "1ktaw25p",
    dataset: "production",
  },
  deployment: {
    appId: "bhj9l8tm99b26uw45qrth0tn",
  },
  typegen: {
    enabled: true,
    path: "../src/**/*.{ts,tsx,js,jsx}",
    schema: "schema.json",
    generates: "../sanity.types.ts",
    overloadClientMethods: true,
  },
});
