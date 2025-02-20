import { useMutation, useQueryClient } from '@tanstack/react-query'

import { AnimeResponse, api, SetAnimeRatingParams } from '@/services/api'
import { ANIME_QUERY_KEY } from '@/services/queries'

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
