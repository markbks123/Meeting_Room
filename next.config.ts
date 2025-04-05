import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-omit",
  ],
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
  output: "standalone",
};

export default nextConfig;
