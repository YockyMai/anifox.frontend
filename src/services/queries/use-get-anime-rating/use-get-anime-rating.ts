import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'

import { ANIME_RATING_QUERY_KEY } from './use-get-anime-rating.const'

export const useGetAnimeRating = (animeUrl: string) =>
  useQuery({
    queryKey: [ANIME_RATING_QUERY_KEY.replace('animeUrl', animeUrl)],
    queryFn: async () => {
      const { data } = await api.fetchAnimeRating(animeUrl)

      return data
    }
  })
