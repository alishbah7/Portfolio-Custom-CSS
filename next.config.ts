import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals = {
      ...(config.externals || {}),
      swiper: "swiper",
    };
    return config;
  },
};

export default nextConfig;
