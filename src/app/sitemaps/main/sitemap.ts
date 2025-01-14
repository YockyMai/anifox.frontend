import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = process.env.HOST

  return [
    {
      url: `${host}/`,
      priority: 1,
      lastModified: new Date()
    },
    {
      url: `${host}/anime/`,
      priority: 1,
      lastModified: new Date()
    },
    {
      url: `${host}/anime/popular/`,
      priority: 1,
      lastModified: new Date()
    },
    {
      url: `${host}/anime/most-rated/`,
      priority: 1,
      lastModified: new Date()
    },
    {
      url: `${host}/anime/popular-ongoing/`,
      priority: 1,
      lastModified: new Date()
    }
  ]
}
