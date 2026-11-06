import { hostname } from "node:os";
import { createNextStory } from "@fumadocs/story/next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();
const withStory = createNextStory();

/** @type {import('next').NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  serverExternalPackages: ["typescript", "twoslash"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spotify-github-profile.kittinanx.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withStory(withMDX(config));
