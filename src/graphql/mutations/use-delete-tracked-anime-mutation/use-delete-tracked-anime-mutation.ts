import { useMutation, useQueryClient } from '@tanstack/react-query'

import { $viewer, useViewer } from '@/entities/viewer'
import { getAnimeQueryKey } from '@/graphql/queries'
import { getUserAnimeListQueryKey } from '@/graphql/queries/use-user-anime-list-query'
import {
  ANIME_TRACK_STATUSES,
  AnimeResponse,
  api,
  FetchFavoriteAnimeListResponse
} from '@/services/api'

export const useDeleteTrackedAnimeMutation = () => {
  const { viewer } = useViewer()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: api.deleteTrackedAnime,
    onMutate: (animeUrl) => {
      const login = viewer?.login ?? ''

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

      queryClient.setQueryData(
        getAnimeQueryKey(animeUrl),
        (prev: AnimeResponse): AnimeResponse => ({
          ...prev,
          user: {
            ...prev.user,
            list: undefined
          }
        })
      )
    }
  })
}
