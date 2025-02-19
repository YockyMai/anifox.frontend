import { useStore } from '@anifox/store'

import { $animeListFilters } from './anime-list-filters.store'

export const useIsFilterActive = () =>
  useStore(
    $animeListFilters.store,
    (state) => state.search !== '' || state.status !== null
  )
