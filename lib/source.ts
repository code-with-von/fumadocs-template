import { docsContentRoute, docsImageRoute } from "@lib/shared";
import { docs } from "collections/server";
import { loader, update } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { openapiPlugin } from "fumadocs-openapi/server";

const isProd = process.env.NODE_ENV === 'production';

const filteredSource = update(docs.toFumadocsSource())
  .files((files) => {
    if (!isProd) return files;

    const prodPages = files.filter(
      (file) => file.type === 'page' && file.data.permission !== 'dev'
    );

    const allowedFolderPaths = new Set<string>();

    for (const page of prodPages) {
      const parts = page.path.split('/');
      parts.pop();

      while (parts.length > 0) {
        allowedFolderPaths.add(parts.join('/'));
        parts.pop();
      }
    }

    return files.filter((file) => {
      if (file.type === 'page') {
        return file.data.permission !== 'dev';
      }

      if (file.type === 'meta') {
        const parts = file.path.split('/');
        parts.pop();
        const folderPath = parts.join('/');

        return folderPath === '' || allowedFolderPaths.has(folderPath);
      }

      return true;
    });
  })
  .build();

export const source = loader(filteredSource, {
  baseUrl: "/docs",
  plugins: [lucideIconsPlugin(), openapiPlugin()],
});

// See https://fumadocs.dev/docs/headless/source-api for more info
// Kept only for reference - don't touch this
// export const source = loader({
//   baseUrl: docsRoute,
//   source: docs.toFumadocsSource(),
//   plugins: [lucideIconsPlugin()],

// });

export function getPageImage(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join("/")}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
