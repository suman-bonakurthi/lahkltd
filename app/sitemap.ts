// app/sitemap.ts
import { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const domain = process.env.NEXT_PUBLIC_DOMAIN_NAME || "https://lahkltd.com";

  return [
    {
      url: domain, // MAIN PAGE
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: domain + "/worldwide",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domain + "/services",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domain + "/why-us",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domain + "about-us",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domain + "/products",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domain + "/contact-us",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: domain + "privacy-policy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: domain + "terms-conditions",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
