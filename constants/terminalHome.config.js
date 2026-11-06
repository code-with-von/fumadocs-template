export const commands =
  process.env.NODE_ENV === "development"
    ? ["fd-template plugins-count", `fd-template plugins-list`]
    : ["fd-template get-template"];

export const outputs =
  process.env.NODE_ENV === "development"
    ? {
        0: [
          "Total of 10 plugin(s) found...",
          "type `fd-template plugins-list` to check the list of plugins",
        ],
        1: [
          "You can click on any link below to access the reference of the chosen component",
          "Fumadocs plugins/components:",
          "1. CodeBlocks",
          "2. Mermaid Diagrams",
          "3. Zoomable Images",
          "4. Math Equations",
          "5. Tables with types",
          "6. Story",
          "7. Open API",
          "Custom made plugins/components:",
          "8. Animated terminal",
          "9. Version tracker",
          "10. Spotify Widget",
        ],
      }
    : {
        0: ["Check this project by clicking here..."],
      };

export const outputLinks =
  process.env.NODE_ENV === "development"
    ? {
        0: null,
        1: [
          null,
          null,
          "/docs/03-plugins/01-fc-comp/01-codeblocks",
          "/docs/03-plugins/01-fc-comp/02-diagrams",
          "/docs/03-plugins/01-fc-comp/03-images",
          "/docs/03-plugins/01-fc-comp/04-math-equations",
          "/docs/03-plugins/01-fc-comp/05-table-types",
          "/docs/03-plugins/01-fc-comp/06-story",
          "/docs/03-plugins/01-fc-comp/07-open-api",
          null,
          "/docs/03-plugins/02-cc-comp/01-animated-terminal",
          "/docs/03-plugins/02-cc-comp/02-version-tracker",
          "/docs/03-plugins/02-cc-comp/03-spotify-widget",
        ],
      }
    : {
        0: ["update/link/to/repo"],
      };
