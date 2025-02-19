import Fuse from 'fuse.js'
import { useMemo } from 'react'

import { useProfileStores } from '@/entities/profile/context'
import { $animeListFilters } from '@/entities/profile/store'
import { AnimeTrackStatuses } from '@/services/api'
import { useUserAnimeListQuery } from '@/services/queries/use-user-anime-list-query'

export const useFilteredUserAnimeList = (status: AnimeTrackStatuses) => {
  const { $profile } = useProfileStores()

  const user = $profile.selectors.user()
  const search = $animeListFilters.selectors.search()

  const { data = [] } = useUserAnimeListQuery({
    status: status,
    login: user.preferred_username
  })

  const list = useMemo(() => {
    if (!search) return data

    const fuse = new Fuse(data, {
      keys: ['title']
    })

    const result = fuse.search(search)

    return result.map(({ item }) => item)
  }, [data, search])

  return list
}
