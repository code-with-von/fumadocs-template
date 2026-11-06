import {
  rehypeCodeDefaultOptions,
  remarkMdxMermaid,
} from "fumadocs-core/mdx-plugins";
import { remarkSteps } from "fumadocs-core/mdx-plugins/remark-steps";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { z } from "zod";

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema.extend({
      permission: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMdxMermaid, remarkSteps],
    rehypePlugins: (v) => [rehypeKatex, ...v],
    rehypeCodeOptions: {
      themes: {
        light: "andromeeda",
        dark: "andromeeda",
      },
      transformers: [
        ...rehypeCodeDefaultOptions.transformers,
        transformerTwoslash({
          langAlias: {
            js: "ts",
            jsx: "tsx",
          },
        }),
      ],
      langs: [
        "ts",
        "tsx",
        "py",
        "python",
        "sh",
        "bash",
        "json",
        "yaml",
        "toml",
        "markdown",
        "mdx",
        "sql",
        "powershell",
        "js",
        "jsx",
      ],
    },
    remarkCodeTabOptions: {
      parseMdx: true,
    },
  },
});
