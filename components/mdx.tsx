/**
 * APPLIED_LINT_RULE by @vonschappler 
 * biome-ignore-all lint/suspicious/noExplicitAny: imported from a 3rd party
*/

import { APIPage } from "@components/api-page";
import { Mermaid } from "@components/mdx/mermaid";
import * as Twoslash from "fumadocs-twoslash/ui";
import {
  createFileSystemGeneratorCache,
  createGenerator,
} from "fumadocs-typescript";
import { AutoTypeTable, type AutoTypeTableProps } from "fumadocs-typescript/ui";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

const generator = createGenerator({
  cache: createFileSystemGeneratorCache(".next/fumadocs-typescript"),
});

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    ...TabsComponents,
    ...Twoslash,
    Mermaid,
    APIPage,
    AutoTypeTable: (props: Partial<AutoTypeTableProps>) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    img: (props) => <ImageZoom {...(props as any)} />,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
