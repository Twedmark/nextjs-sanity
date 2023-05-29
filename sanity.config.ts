import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";
import { myTheme } from "./theme";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["home", "footer", "header"]);

export default defineConfig({
  basePath: "/studio",
  name: "Twedmark",
  title: "Sanity NextJS Test studio",
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Home")
              .id("home")
              .child(S.document().schemaType("home").documentId("home")),
            S.divider(),

            S.documentTypeListItem("post").title("Blog Posts"),
            S.documentTypeListItem("category").title("Categories"),
            S.documentTypeListItem("author").title("Authors"),

            S.divider(),
            S.listItem()
              .title("Layout")
              .child(
                S.list()
                  .title("Layout")
                  .items([
                    S.listItem()
                      .title("Footer")
                      .id("footer")
                      .child(
                        S.document().schemaType("footer").documentId("footer")
                      ),
                    S.listItem()
                      .title("Header")
                      .id("header")
                      .child(
                        S.document().schemaType("header").documentId("header")
                      ),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,

    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  theme: myTheme,
});
