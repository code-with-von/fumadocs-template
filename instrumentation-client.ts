/**
 * APPLIED_LINT_RULE by @vonschappler
 * biome-ignore-all lint/style/noNonNullAssertion: code provided by the official documentation
 */

import settings from "@constants/env";
import posthog from "posthog-js";

posthog.init(settings.PG_PROJECT!, {
  api_host: settings.PG_HOST,
  defaults: "2026-05-30",
});
