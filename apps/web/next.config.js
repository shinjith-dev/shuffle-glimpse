const { MoniconPlugin } = require("@monicon/webpack");

module.exports = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
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
      }),
    );

    return config;
  },
};
