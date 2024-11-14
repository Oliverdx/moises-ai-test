import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // Pointing @ to src
    return config;
  },
};

export default nextConfig;
