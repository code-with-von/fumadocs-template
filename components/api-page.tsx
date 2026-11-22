import fs from "node:fs";
import path from "node:path";
import { clientConfig } from "@components/api-client";
import { createOpenAPI } from "fumadocs-openapi/server";
import { createAPIPage, type OperationItem } from "fumadocs-openapi/ui";

const assetsDir = path.join(process.cwd(), "assets");

// 1. Correctly read and filter both YAML and JSON files
const schemaFiles = fs
  .readdirSync(assetsDir)
  .filter(
    (f) => f.endsWith(".yaml") || f.endsWith(".yml") || f.endsWith(".json"),
  );

// 2. Generate clean absolute paths for the global instance input array
const absolutePaths = schemaFiles.map((file) => path.join(assetsDir, file));

const openapiInstance = createOpenAPI({
  input: absolutePaths,
});

const BaseAPIPage = createAPIPage(openapiInstance, {
  client: clientConfig,
});

interface APIPageProps {
  file: string;
  path: string;
  method: OperationItem["method"];
}

export function APIPage({ file, path: apiPath, method }: APIPageProps) {
  // 3. Match the target document key exactly with how the input array resolves
  const targetDocumentKey = path.join(assetsDir, file);

  return (
    <BaseAPIPage
      document={targetDocumentKey}
      operations={[{ path: apiPath, method }]}
      showDescription
    />
  );
}
