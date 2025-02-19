import { createStore } from '@anifox/store'

import { ANIME_LIST_STATUSES, AnimeTrackStatuses } from '@/services/api'

import { ANIME_LIST_STORE_KEY } from './anime-list.const'

type ProfileAnimeListStore = {
  rows: AnimeTrackStatuses[]
}

const initialState: ProfileAnimeListStore = {
  rows: Object.values(ANIME_LIST_STATUSES)
}

export const $animeList = createStore(
  initialState,
  {
    moveRowTop: (state, row: AnimeTrackStatuses) => {
      const from = state.rows.indexOf(row)
      const to = from - 1

      let temp = state.rows[from]

      state.rows.splice(from, 1, state.rows[to])
      state.rows.splice(to, 1, temp)
    },
    moveRowBottom: (state, row: AnimeTrackStatuses) => {
      const from = state.rows.indexOf(row)
      const to = from + 1

      let temp = state.rows[from]

      state.rows.splice(from, 1, state.rows[to])
      state.rows.splice(to, 1, temp)
    },
    reorder: (state, reordered: AnimeTrackStatuses[]) => {
      state.rows = reordered
    }
  },
  {
    persist: { name: ANIME_LIST_STORE_KEY }
  }
)
