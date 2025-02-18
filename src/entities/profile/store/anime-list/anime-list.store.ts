import { createStore } from '@anifox/store'

import { ANIME_LIST_VARIANTS, AnimeTrackStatuses } from '@/services/api'

import { ANIME_LIST_STORE_KEY } from './anime-list.const'

type ProfileAnimeListStore = {
  rows: AnimeTrackStatuses[]
}

const initialState: ProfileAnimeListStore = {
  rows: Object.values(ANIME_LIST_VARIANTS)
}

export const $animeList = createStore(
  initialState,
  {
    reorder: (state, reordered: AnimeTrackStatuses[]) => {
      state.rows = reordered
    }
  },
  {
    persist: { name: ANIME_LIST_STORE_KEY }
  }
)
