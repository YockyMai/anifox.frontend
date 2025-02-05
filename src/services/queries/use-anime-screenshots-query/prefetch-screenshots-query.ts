import { QueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_IMAGES_QUERY_KEY } from './use-anime-screenshots-query.const'

export const prefetchScreenshotsQuery = (
  animeUrl: string,
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: [ANIME_IMAGES_QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.fetchAnimeScreenshots({ animeUrl })

      return data
    }
  })
