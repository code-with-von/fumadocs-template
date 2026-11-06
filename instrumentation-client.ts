/**
 * APPLIED_LINT_RULE by @vonschappler
 * biome-ignore-all lint/style/noNonNullAssertion: code provided by the official documentation */

import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2026-05-30",
});
