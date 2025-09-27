// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://seninsiten.com/', // ana sayfa
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://seninsiten.com/worldwide',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://seninsiten.com/services',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://seninsiten.com/why-us',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://seninsiten.com/about-us',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://seninsiten.com/products',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://seninsiten.com/contact-us',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://seninsiten.com/privacy-policy',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://seninsiten.com/terms-conditions',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
