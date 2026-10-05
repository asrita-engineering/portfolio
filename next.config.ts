import type { NextConfig } from "next";

// Set by the GitHub Pages workflow: "/portfolio" when served from
// <org>.github.io/portfolio, "" for a custom domain or a local build.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` so the site can be served by any static host.
  output: "export",
  basePath,
  // Emit `projects/<slug>/index.html` so every static host resolves the URL without rewrites.
  trailingSlash: true,
  env: {
    // next/link applies basePath automatically; plain <a> links to /public files need it too.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
