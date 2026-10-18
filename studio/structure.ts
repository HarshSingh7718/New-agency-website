import type {StructureResolver} from "sanity/structure";
import {singletonTypes} from "./schema-types";

const singletonListItem = (
  S: Parameters<StructureResolver>[0],
  typeName: string,
  title: string,
) => S.listItem().title(title).id(typeName).child(
  S.document().schemaType(typeName).documentId(typeName),
);

export const structure: StructureResolver = (S) =>
  S.list().title("Website content").items([
    singletonListItem(S, "siteSettings", "Site settings"),
    singletonListItem(S, "homePage", "Home page"),
    singletonListItem(S, "aboutPage", "About page"),
    singletonListItem(S, "contactPage", "Contact page"),
    S.divider(),
    ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() || "")),
  ]);
