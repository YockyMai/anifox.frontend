import { MetadataRoute } from 'next'

import { api } from '@/services/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = process.env.HOST

  const { data } = await api.fetchAnimeList({
    page: 0,
    limit: 5000
  })

  return data.map((anime) => ({
    url: `${host}/anime/${anime.url}/`,
    lastModified: new Date(),
    priority: 0.6
  }))
}
