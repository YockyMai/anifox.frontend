import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const host = process.env.HOST

  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/login/'
      },
      {
        userAgent: '*',
        disallow: '/signup/'
      }
    ],
    sitemap: [`${host}/sitemaps/sitemap.xml`]
  }
}
