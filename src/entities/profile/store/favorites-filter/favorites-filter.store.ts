import { createStore } from '@anifox/store'

import { FavoritesFilterView } from './favorites-filter.const'
import { FavoritesFilterStore } from './favorites-filter.interface'

export const createFavoritesFilterStore = (
  initialState: FavoritesFilterStore
) =>
  createStore(initialState, {
    setSearch: (state, search: string) => {
      state.search = search
    },
    setView: (state, view: FavoritesFilterView) => {
      state.view = view
    }
  })
