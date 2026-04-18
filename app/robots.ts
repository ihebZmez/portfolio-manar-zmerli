import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/"],
        crawlDelay: 1,
      },
    ],
    sitemap: "http://www.aremgroup.com/sitemap.xml",
  };
}
