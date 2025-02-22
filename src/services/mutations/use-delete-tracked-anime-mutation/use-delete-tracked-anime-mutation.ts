import { useMutation, useQueryClient } from '@tanstack/react-query'

import { $viewer } from '@/entities/viewer'
import {
  ANIME_TRACK_STATUSES,
  api,
  FetchFavoriteAnimeListResponse
} from '@/services/api'
import { getUserAnimeListQueryKey } from '@/services/queries/use-user-anime-list-query'

export const useDeleteTrackedAnimeMutation = () => {
  const user = $viewer.selectors.user()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: api.deleteTrackedAnime,
    onMutate: (animeUrl) => {
      const login = user?.preferred_username ?? ''

      if (!login) {
        return
      }

      for (const trackStatus of Object.values(ANIME_TRACK_STATUSES)) {
        const animeData =
          queryClient.getQueryData<FetchFavoriteAnimeListResponse>(
            getUserAnimeListQueryKey(trackStatus, login)
          )

        if (animeData) {
          const deletedAnime = animeData.find(({ url }) => url === animeUrl)

          if (deletedAnime) {
            queryClient.setQueriesData(
              {
                queryKey: getUserAnimeListQueryKey(trackStatus, login)
              },
              animeData.filter(({ url }) => url !== animeUrl)
            )
          }
        }
      }
    }
  })
}
