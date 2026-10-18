import {at, defineMigration, unset} from "sanity/migrate";

export default defineMigration({
  title: "Remove the retired footer tagline",
  documentTypes: ["siteSettings"],
  filter: "defined(footer.tagline)",
  migrate: {
    document() {
      return at("footer.tagline", unset());
    },
  },
});
