import { useInfiniteQuery } from '@tanstack/react-query'

import { FetchAnimeEpisodesParams, api } from '@/services/api'

import {
  ANIME_EPISODES_QUERY_KEY,
  testData
} from './use-anime-episodes-query.const'

export const useAnimeEpisodesQuery = ({
  animeUrl,
  limit = 20,
  sort = 'Asc'
}: FetchAnimeEpisodesParams) =>
  useInfiniteQuery({
    queryKey: [ANIME_EPISODES_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeEpisodes({ animeUrl, limit, sort })

      return data
      // return testData
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length !== 0 ? allPages.length : undefined,
    refetchOnWindowFocus: false
  })
