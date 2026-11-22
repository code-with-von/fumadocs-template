# @code-with-von/fumadocs-template/FileTree

```
├── 📁 .github
│   ├── 📁 ISSUE_TEMPLATE
│   │   ├── ⚙️ 01-issues.yml
│   │   ├── ⚙️ 02-requests.yml
│   │   ├── ⚙️ 03-typos.yml
│   │   ├── ⚙️ 04-faq.yml
│   │   └── ⚙️ config.yml
│   ├── 📁 workflows
│   │   └── ⚙️ checks.yml
│   └── 📝 pull_request_template.md
├── 📁 app
│   ├── 📁 (home)
│   │   ├── 📁 a-link
│   │   │   └── 📄 page.jsx
│   │   ├── 📄 layout.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 api
│   │   └── 📁 search
│   │       └── 📄 route.ts
│   ├── 📁 docs
│   │   ├── 📁 [[...slug]]
│   │   │   └── 📄 page.tsx
│   │   └── 📄 layout.tsx
│   ├── 📁 lib
│   │   └── 📄 utils.ts
│   ├── 📁 llms-full.txt
│   │   └── 📄 route.ts
│   ├── 📁 llms.mdx
│   │   └── 📁 docs
│   │       └── 📁 [[...slug]]
│   │           └── 📄 route.ts
│   ├── 📁 llms.txt
│   │   └── 📄 route.ts
│   ├── 📁 og
│   │   └── 📁 docs
│   │       └── 📁 [...slug]
│   │           └── 📄 route.tsx
│   ├── 🎨 global.css
│   ├── 🖼️ icon.png
│   ├── 📄 layout.tsx
│   └── 📄 not-found.tsx
├── 📁 assets
│   ├── 📁 css
│   │   ├── 🎨 animations.css
│   │   ├── 🎨 fonts.css
│   │   ├── 🎨 image-zoom.css
│   │   └── 🎨 theme.css
│   ├── 📁 example-api
│   │   ├── ⚙️ example_01.openapi.json
│   │   └── ⚙️ example_01.openapi.yaml
│   ├── 📁 example-diagrams
│   │   ├── 📄 example_custom_diagram.js
│   │   └── 📄 example_simple_diagram.js
│   ├── 📁 fonts
│   │   ├── 📄 Roboto-Black.ttf
│   │   ├── 📄 Roboto-BlackItalic.ttf
│   │   ├── 📄 Roboto-Bold.ttf
│   │   ├── 📄 Roboto-BoldCondensed.ttf
│   │   ├── 📄 Roboto-BoldCondensedItalic.ttf
│   │   ├── 📄 Roboto-BoldItalic.ttf
│   │   ├── 📄 Roboto-Condensed.ttf
│   │   ├── 📄 Roboto-CondensedItalic.ttf
│   │   ├── 📄 Roboto-Italic.ttf
│   │   ├── 📄 Roboto-Light.ttf
│   │   ├── 📄 Roboto-LightItalic.ttf
│   │   ├── 📄 Roboto-Medium.ttf
│   │   ├── 📄 Roboto-MediumItalic.ttf
│   │   ├── 📄 Roboto-Regular.ttf
│   │   ├── 📄 Roboto-Thin.ttf
│   │   ├── 📄 Roboto-ThinItalic.ttf
│   │   ├── 📄 Sansation-Bold.ttf
│   │   ├── 📄 Sansation-BoldItalic.ttf
│   │   ├── 📄 Sansation-Italic.ttf
│   │   ├── 📄 Sansation-Light.ttf
│   │   ├── 📄 Sansation-LightItalic.ttf
│   │   └── 📄 Sansation-Regular.ttf
│   └── 📁 images
│       ├── 🖼️ 404.png
│       └── 🖼️ code.png
├── 📁 components
│   ├── 📁 custom
│   │   ├── 📁 story
│   │   │   ├── 📄 example_simple.story.tsx
│   │   │   ├── 📄 example_simple.tsx
│   │   │   ├── 📄 version_example.story.tsx
│   │   │   └── 📄 version_example.tsx
│   │   ├── 📄 HomeTerminal.jsx
│   │   ├── 📄 Loading.jsx
│   │   ├── 📄 SpotifyWidget.jsx
│   │   ├── 📄 StaticTerminal.jsx
│   │   └── 📄 Version.jsx
│   ├── 📁 mdx
│   │   └── 📄 mermaid.tsx
│   ├── 📁 ui
│   │   ├── 📄 button.tsx
│   │   ├── 📄 collapsible.tsx
│   │   ├── 📄 navigation-menu.tsx
│   │   ├── 📄 popover.tsx
│   │   ├── 📄 tabs.tsx
│   │   └── 📄 terminal.tsx
│   ├── 📄 api-client.tsx
│   ├── 📄 api-page.tsx
│   ├── 📄 banner.tsx
│   ├── 📄 files.tsx
│   ├── 📄 image-zoom.tsx
│   ├── 📄 mdx.tsx
│   ├── 📄 steps.tsx
│   └── 📄 tabs.tsx
├── 📁 constants
│   ├── 📄 env.js
│   ├── 📄 terminalDocs.config.js
│   └── 📄 terminalHome.config.js
├── 📁 content
│   └── 📁 docs
│       ├── 📁 01-licenses
│       │   ├── 📄 01-eula.mdx
│       │   ├── 📄 02-gnu.mdx
│       │   ├── 📄 index.mdx
│       │   └── ⚙️ meta.json
│       ├── 📁 02-file-structure
│       │   ├── 📁 file-details
│       │   │   ├── 📄 01-github.mdx
│       │   │   ├── 📄 02-pages.mdx
│       │   │   ├── 📄 03-styles.mdx
│       │   │   ├── 📄 04-icon.mdx
│       │   │   ├── 📄 05-layout.mdx
│       │   │   ├── 📄 06-not-found.mdx
│       │   │   ├── 📄 07-components.mdx
│       │   │   ├── 📄 08-docs.mdx
│       │   │   ├── 📄 09-configuration.mdx
│       │   │   ├── 📄 10-repository-docs.mdx
│       │   │   └── ⚙️ meta.json
│       │   └── 📄 index.mdx
│       ├── 📁 03-plugins
│       │   ├── 📁 01-fc-comp
│       │   │   ├── 📄 01-codeblocks.mdx
│       │   │   ├── 📄 02-diagrams.mdx
│       │   │   ├── 📄 03-images.mdx
│       │   │   ├── 📄 04-math-equations.mdx
│       │   │   ├── 📄 05-table-types.mdx
│       │   │   ├── 📄 06-story.mdx
│       │   │   ├── 📄 07-open-api.mdx
│       │   │   ├── 📄 08-banner.mdx
│       │   │   └── 📄 index.mdx
│       │   ├── 📁 02-cc-comp
│       │   │   ├── 📄 01-animated-terminal.mdx
│       │   │   ├── 📄 02-version-tracker.mdx
│       │   │   ├── 📄 03-spotify-widget.mdx
│       │   │   └── 📄 index.mdx
│       │   └── ⚙️ meta.json
│       ├── 📁 04-examples
│       │   ├── 📁 01-example-a
│       │   │   ├── 📁 preview
│       │   │   │   ├── 📁 grouped-a
│       │   │   │   │   ├── 📄 01-file-c.mdx
│       │   │   │   │   ├── 📄 02-file-d.mdx
│       │   │   │   │   └── 📄 index.mdx
│       │   │   │   ├── 📁 grouped-b
│       │   │   │   │   ├── 📄 01-file-e.mdx
│       │   │   │   │   ├── 📄 02-file-f.mdx
│       │   │   │   │   └── 📄 index.mdx
│       │   │   │   ├── 📄 01-file-a.mdx
│       │   │   │   ├── 📄 02-file-b.mdx
│       │   │   │   ├── 📄 index.mdx
│       │   │   │   └── ⚙️ meta.json
│       │   │   └── 📄 index.mdx
│       │   ├── 📁 02-example-b
│       │   │   ├── 📁 preview
│       │   │   │   ├── 📁 grouped-a
│       │   │   │   │   ├── 📄 01-file-c.mdx
│       │   │   │   │   ├── 📄 02-file-d.mdx
│       │   │   │   │   └── 📄 index.mdx
│       │   │   │   ├── 📁 grouped-b
│       │   │   │   │   ├── 📄 01-file-e.mdx
│       │   │   │   │   ├── 📄 02-file-f.mdx
│       │   │   │   │   └── ⚙️ meta.json
│       │   │   │   ├── 📄 01-file-a.mdx
│       │   │   │   ├── 📄 02-file-b.mdx
│       │   │   │   ├── 📄 index.mdx
│       │   │   │   └── ⚙️ meta.json
│       │   │   └── 📄 index.mdx
│       │   ├── 📁 03-example-c
│       │   │   ├── 📁 preview
│       │   │   │   ├── 📁 grouped-a
│       │   │   │   │   ├── 📁 grouped-b
│       │   │   │   │   │   ├── 📄 01-file-e.mdx
│       │   │   │   │   │   ├── 📄 02-file-f.mdx
│       │   │   │   │   │   └── ⚙️ meta.json
│       │   │   │   │   ├── 📄 01-file-c.mdx
│       │   │   │   │   ├── 📄 02-file-d.mdx
│       │   │   │   │   └── 📄 index.mdx
│       │   │   │   ├── 📁 grouped-c
│       │   │   │   │   ├── 📄 01-file-g.mdx
│       │   │   │   │   ├── 📄 02-file-h.mdx
│       │   │   │   │   ├── 📄 index-custom.mdx
│       │   │   │   │   └── ⚙️ meta.json
│       │   │   │   ├── 📄 01-file-a.mdx
│       │   │   │   ├── 📄 02-file-b.mdx
│       │   │   │   ├── 📄 03-hidden.mdx
│       │   │   │   ├── 📄 index.mdx
│       │   │   │   └── ⚙️ meta.json
│       │   │   └── 📄 index.mdx
│       │   ├── 📄 index.mdx
│       │   └── ⚙️ meta.json
│       └── 📄 index.mdx
├── 📁 layouts
│   ├── 📁 home
│   │   ├── 📁 slots
│   │   │   ├── 📄 container.tsx
│   │   │   └── 📄 header.tsx
│   │   └── 📄 index.tsx
│   ├── 📁 notebook
│   │   └── 📁 page
│   │       └── 📁 slots
│   │           └── 📄 footer.tsx
│   └── 📁 shared
│       ├── 📁 slots
│       │   ├── 📄 language-select.tsx
│       │   ├── 📄 search-trigger.tsx
│       │   └── 📄 theme-switch.tsx
│       ├── 📄 client.tsx
│       └── 📄 index.tsx
├── 📁 lib
│   ├── 📄 cn.ts
│   ├── 📄 layout.shared.tsx
│   ├── 📄 merge-refs.ts
│   ├── 📄 shared.ts
│   ├── 📄 source.ts
│   ├── 📄 story.ts
│   └── 📄 urls.ts
├── 📁 public
│   ├── 📁 examples
│   │   └── 📄 example_custom_diagram.js
│   └── 📁 images
│       ├── 🖼️ example.png
│       └── 🖼️ spotify-preview.png
├── 📁 ui
│   └── 📁 footer
│       ├── 📁 components
│       │   ├── 📄 FooterChannels.jsx
│       │   ├── 📄 FooterCopyright.jsx
│       │   ├── 📄 FooterDocs.jsx
│       │   ├── 📄 FooterMain.jsx
│       │   ├── 📄 FooterProfiles.jsx
│       │   ├── 📄 FooterSocials.jsx
│       │   └── 📄 FooterSupport.jsx
│       ├── 📁 constants
│       │   └── 📄 footer.jsx
│       └── 📄 index.jsx
├── ⚙️ .editorconfig
├── ⚙️ .gitignore
├── 📝 Changelog.md
├── 📝 FileTree.md
├── 📝 GNU.md
├── 📝 License.md
├── 📝 README.md
├── 📝 README.original.md
├── 📝 TODO.kanban.md
├── ⚙️ biome.json
├── ⚙️ cli.json
├── ⚙️ components.json
├── 📄 instrumentation-client.ts
├── 📄 next.config.mjs
├── ⚙️ package.json
├── ⚙️ pnpm-lock.yaml
├── ⚙️ pnpm-workspace.yaml
├── 📄 postcss.config.mjs
├── 📄 proxy.ts
├── 📄 source.config.ts
└── ⚙️ tsconfig.json
```
