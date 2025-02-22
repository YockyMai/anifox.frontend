import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/services/api'

export const useAnimeRatingMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [],
    mutationFn: api.setAnimeRating,
    onSuccess: (data, variables, context) => {
      // queryClient.setQueryData(
      //   [ANIME_QUERY_KEY.replace('animeUrl', variables.animeUrl)],
      //   (prev: AnimeResponse) => ({
      //     ...prev
      //   })
      // )
    }
  })
}
