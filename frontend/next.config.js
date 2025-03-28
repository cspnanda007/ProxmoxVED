/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true,
  },

  env: {
    BASE_PATH: "ProxmoxVE",
  },

  output: "export", // This is needed for the site to be deployed to GitHub Pages
  basePath: "/ProxmoxVE",
};

export default config;
