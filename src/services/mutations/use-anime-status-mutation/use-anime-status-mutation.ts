import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import isEqual from 'lodash.isequal'

import { $userAtoms } from '@/entities/user/atoms'
import {
  ANIME_TRACK_STATUSES,
  api,
  FetchFavoriteAnimeListResponse,
  SetAnimeStatusParams
} from '@/services/api'
import { getUserAnimeListQueryKey } from '@/services/queries/use-user-anime-list-query'

export const useAnimeStatusMutation = () => {
  const user = useAtomValue($userAtoms.user)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (params: SetAnimeStatusParams) => {
      const data = await api.setAnimeStatus(params)

      return data
    },
    onSuccess: (_, params) => {
      const login = user?.preferred_username ?? ''

      if (!login) {
        return
      }

      const targetQueryKey = getUserAnimeListQueryKey(params.status, login)

      const animeByStatus = Object.values(ANIME_TRACK_STATUSES).map(
        (status) => {
          const queryKey = getUserAnimeListQueryKey(status, login)

          return {
            data: queryClient.getQueryData<FetchFavoriteAnimeListResponse>(
              queryKey
            ),
            key: queryKey
          }
        }
      )

      for (const anime of animeByStatus) {
        const isSource = anime.data?.some(({ url }) => url === params.animeUrl)
        const isTarget = isEqual(anime.key, targetQueryKey)

        if (isSource && anime.data) {
          queryClient.setQueriesData(
            {
              queryKey: anime.key
            },
            anime.data.filter(({ url }) => url !== params.animeUrl)
          )
        }

        if (isTarget) {
          const newAnime = animeByStatus
            .flatMap(({ data }) => data)
            .find((anime) => anime && anime.url === params.animeUrl)

          if (newAnime) {
            const newAnimeData = [...(anime.data ?? [])].filter(
              ({ url }) => url !== params.animeUrl
            )

            newAnimeData.push(newAnime)

            queryClient.setQueriesData(
              {
                queryKey: targetQueryKey
              },
              newAnimeData
            )
          }
        }
      }
    }
  })
}
