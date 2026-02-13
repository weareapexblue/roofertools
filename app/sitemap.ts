import type { MetadataRoute } from "next";

import { blogPosts, getAllBlogTags, slugifyTag } from "@/lib/blog";
import { products } from "@/lib/products";
import { resources } from "@/lib/resources";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/backlinks",
    "/press-releases",
    "/local-seo",
    "/microsites",
    "/free-tools",
    "/resources",
    "/blog",
    "/legal/refund-policy",
    "/legal/terms",
    "/legal/privacy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${SITE_URL}/${product.silo}/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...resources.map((resource) => ({
      url: `${SITE_URL}/resources/${resource.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllBlogTags().map((tag) => ({
      url: `${SITE_URL}/blog/tags/${slugifyTag(tag)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
