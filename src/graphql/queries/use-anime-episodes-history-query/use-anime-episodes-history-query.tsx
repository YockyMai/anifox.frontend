import { useInfiniteQuery } from '@tanstack/react-query'

import { api, FetchAnimeEpisodesHistoryRequest } from '@/services/api'

import { ANIME_EPISODES_HISTORY_QUERY_KEY } from './use-anime-episodes-history-query.const'

export const useAnimeEpisodesHistoryQuery = (
  params: FetchAnimeEpisodesHistoryRequest
) =>
  useInfiniteQuery({
    queryKey: [
      ANIME_EPISODES_HISTORY_QUERY_KEY.replace('animeUrl', params.animeUrl)
    ],
    queryFn: async () => {
      const { data } = await api.fetchAnimeEpisodesHistory(params)

      return data
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length !== 0 ? allPages.length : undefined,
    refetchOnWindowFocus: false
  })
