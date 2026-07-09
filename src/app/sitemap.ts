import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/areas";
import { blogPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

const SERVICE_ROUTES = [
  "/residential-cleaning",
  "/commercial-cleaning",
  "/post-construction-cleaning",
  "/house-cleaning",
  "/move-out-cleaning",
  "/move-in-cleaning",
];

const LAST_CONTENT_UPDATE = new Date("2026-07-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/pricing`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 0.7 },
    ...SERVICE_ROUTES.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: route === "/house-cleaning" ? 0.9 : 0.8,
    })),
    ...serviceAreas.map((area) => ({
      url: `${siteUrl}/areas/${area.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return staticPages;
}
