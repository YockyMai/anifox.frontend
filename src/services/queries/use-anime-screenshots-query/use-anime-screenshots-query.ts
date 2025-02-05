import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_IMAGES_QUERY_KEY } from './use-anime-screenshots-query.const'

export const useAnimeScreenshotsQuery = (animeUrl: string) =>
  useQuery({
    queryKey: [ANIME_IMAGES_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeScreenshots({ animeUrl })

      return data
    }
  })
