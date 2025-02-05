import { QueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_VIDEOS_QUERY_KEY } from './use-anime-videos-query.const'

export const prefetchAnimeVideosQuery = (
  animeUrl: string,
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: [ANIME_VIDEOS_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeVideos(animeUrl)

      return data
    }
  })
