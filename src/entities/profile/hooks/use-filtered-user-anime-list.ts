import { useStore } from '@anifox/store'
import Fuse from 'fuse.js'
import { useMemo } from 'react'

import {
  $animeListFilters,
  useIsAnimeListFilterActive
} from '@/entities/profile/store'
import { AnimeListStatus, useAnimeListQuery } from '@/graphql/generated/output'

import { useProfile } from './use-profile'

export const useFilteredUserAnimeList = (tableStatus: AnimeListStatus) => {
  const { profile } = useProfile()

  const { search, status, type } = useStore($animeListFilters.store)

  const isFiltersActive = useIsAnimeListFilterActive()

  const { data, loading } = useAnimeListQuery({
    variables: {
      userId: profile.id
    }
  })

  const list = useMemo(() => {
    let filteredData = (data?.animeList.list ?? []).filter(
      ({ status }) => status === tableStatus
    )

    if (isFiltersActive) {
      filteredData = filteredData.filter(({ anime }) => {
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
          keys: ['anime.title']
        })

        filteredData = fuse.search(search).map(({ item }) => item)
      }
    }

    return filteredData
  }, [data?.animeList.list, isFiltersActive, search, status, tableStatus, type])

  return { list, loading }
}
