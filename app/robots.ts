import { MetadataRoute } from "next";
import { businessInfo } from "@/constants/data";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessInfo.website;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

