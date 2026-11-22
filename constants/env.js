const IS_DEV =
  process.env.NEXT_PUBLIC_APP_ENV === "development"
    ? process.env.NEXT_PUBLIC_APP_ENV
    : "production";

const PG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? undefined;

const PG_PROJECT = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ?? undefined;

const SPOTIFY_URL = process.env.NEXT_PUBLIC_SPOTIFY_URL ?? undefined;

const settings = {
  IS_DEV,
  PG_HOST,
  PG_PROJECT,
  SPOTIFY_URL,
};

export default settings;
