import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all bots
        allow: ["/"], // Allow crawling everywhere
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL!}/sitemap.xml`,
  };
}
