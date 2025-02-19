import { createStore } from '@anifox/store'

import { AnimeTrackStatuses } from '@/services/api'

import { AnimeListFiltersStore } from './anime-list-filters.interface'

const initialState: AnimeListFiltersStore = {
  search: '',
  status: null
}

export const $animeListFilters = createStore(initialState, {
  setSearch: (state, search: string) => {
    state.search = search
  },
  setStatus: (state, status: AnimeTrackStatuses | null) => {
    state.status = status
  }
})
