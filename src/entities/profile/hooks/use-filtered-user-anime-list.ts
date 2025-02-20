import { useStore } from '@anifox/store'
import Fuse from 'fuse.js'
import { useMemo } from 'react'

import { useProfileStores } from '@/entities/profile/context'
import {
  $animeListFilters,
  useIsAnimeListFilterActive
} from '@/entities/profile/store'
import { AnimeTrackStatuses } from '@/services/api'
import { useUserAnimeListQuery } from '@/services/queries/use-user-anime-list-query'

export const useFilteredUserAnimeList = (tableStatus: AnimeTrackStatuses) => {
  const { $profile } = useProfileStores()

  const user = $profile.selectors.user()

  const { search, status, trackStatus, type } = useStore(
    $animeListFilters.store
  )

  const isFiltersActive = useIsAnimeListFilterActive()

  const { data = [], isLoading } = useUserAnimeListQuery({
    status: trackStatus ?? tableStatus,
    login: user.preferred_username
  })

  const list = useMemo(() => {
    if (isFiltersActive) {
      let filteredData = data.filter((anime) => {
        if (type && type !== anime.type) {
          return false
        }

        if (status && status !== anime.status) {
          return false
        }

        return true
      })

      if (search) {
        const fuse = new Fuse(filteredData, {
          keys: ['title']
        })

        filteredData = fuse.search(search).map(({ item }) => item)
      }

      return filteredData
    }

    return data
  }, [data, isFiltersActive, search, tableStatus, status, type])

  return { list, isLoading }
}
