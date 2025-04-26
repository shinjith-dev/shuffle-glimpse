// @ts-check
const { MoniconPlugin } = require("@monicon/webpack");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "@monicon/native": "@monicon/react",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    config.plugins.push(
      new MoniconPlugin({
        collections: ["hugeicons"],
        icons: ["solar:heart-angle-bold"],
      }),
    );

    return config;
  },
};
