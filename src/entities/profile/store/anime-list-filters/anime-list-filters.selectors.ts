import { useStore } from '@anifox/store'

import { $animeListFilters } from './anime-list-filters.store'

export const useIsAnimeListFilterActive = () =>
  useStore(
    $animeListFilters.store,
    (state) =>
      state.search !== '' ||
      state.trackStatus !== null ||
      state.type !== null ||
      state.status !== null
  )
