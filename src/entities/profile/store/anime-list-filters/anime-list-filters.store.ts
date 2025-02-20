import { createStore } from '@anifox/store'

import {
  AnimeStatuses,
  AnimeTrackStatuses,
  AnimeTypeVariants
} from '@/services/api'

import { AnimeListFiltersStore } from './anime-list-filters.interface'

const initialState: AnimeListFiltersStore = {
  search: '',
  trackStatus: null,
  type: null,
  status: null
}

export const $animeListFilters = createStore(initialState, {
  setSearch: (state, search: string) => {
    state.search = search
  },
  setTrackStatus: (state, status: AnimeTrackStatuses | null) => {
    state.trackStatus = status
  },
  setType: (state, type: AnimeTypeVariants | null) => {
    state.type = type
  },
  setStatus: (state, status: AnimeStatuses | null) => {
    state.status = status
  },
  resetFilters: (state) => {
    state.search = initialState.search
    state.trackStatus = initialState.trackStatus
    state.type = initialState.type
  }
})
