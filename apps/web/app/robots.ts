import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://shuffle.shinjith.dev",
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/callback"],
    },
    sitemap: ["https://shuffle.shinjith.dev/sitemap.xml"],
  };
}
