import { createStore } from '@anifox/store'

import {
  AnimeListStatus,
  AnimeStatus,
  AnimeType
} from '@/graphql/generated/output'

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
  setTrackStatus: (state, status: AnimeListStatus | null) => {
    state.trackStatus = status
  },
  setType: (state, type: AnimeType | null) => {
    state.type = type
  },
  setStatus: (state, status: AnimeStatus | null) => {
    state.status = status
  },
  resetFilters: (state) => {
    state.search = initialState.search
    state.trackStatus = initialState.trackStatus
    state.type = initialState.type
  }
})
