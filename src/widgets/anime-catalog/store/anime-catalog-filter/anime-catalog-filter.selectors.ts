import { useStore } from '@anifox/store'

import { useAnimeCatalogStores } from '../..'

export const useIsFilterActive = () => {
  const { $filter } = useAnimeCatalogStores()

  const isFilterActive = useStore($filter.store, (state) =>
    [
      state.status,
      state.search,
      state.genres,
      state.minimalAge,
      state.ratingMpa,
      state.season,
      state.type,
      state.years,
      state.translations,
      state.studio,
      state.order
    ].some(
      (value) =>
        value !== null &&
        value !== '' &&
        (Array.isArray(value) ? value.length > 0 : true)
    )
  )

  return isFilterActive
}
