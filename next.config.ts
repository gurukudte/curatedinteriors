import { join } from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    serverActions: {}, // ✅ fixed
  },
  webpack(config) {
    // Inline WASM files to avoid build errors with Prisma WASM engine
    config.module.rules.push({
      test: /\.wasm$/,
      type: "asset/inline",
    });

    // Ensure @prisma/client resolves correctly
    config.resolve.alias["@prisma/client"] = join(
      __dirname,
      "node_modules",
      "@prisma/client"
    );

    return config;
  },
};

export default nextConfig;
