import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const host = process.env.HOST

  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/login/', '/signup/']
      }
    ],
    sitemap: [`${host}/sitemaps/sitemap.xml`]
  }
}
