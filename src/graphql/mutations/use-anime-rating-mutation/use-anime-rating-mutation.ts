import { useMutation, useQueryClient } from '@tanstack/react-query'

import { getAnimeQueryKey, getAnimeStatisticsQueryKey } from '@/graphql/queries'
import { AnimeResponse, api } from '@/services/api'

export const useAnimeRatingMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [],
    mutationFn: api.setAnimeRating,
    onMutate: (params) => {
      queryClient.setQueryData(
        getAnimeQueryKey(params.animeUrl),
        (prev: AnimeResponse): AnimeResponse => ({
          ...prev,
          user: {
            ...prev.user,
            rating: params.rating
          }
        })
      )

      queryClient.invalidateQueries({
        queryKey: getAnimeStatisticsQueryKey(params.animeUrl)
      })
    }
  })
}
