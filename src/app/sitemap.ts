import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}/id`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}/about`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}/about/id`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}/projects`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}/projects/id`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}/posts`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL!}/posts/id`,
      priority: 1,
    },
  ];
}
