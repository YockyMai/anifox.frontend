import { createStore } from '@anifox/store'

import { AnimeListStatus } from '@/graphql/generated/output'

import { ANIME_LIST_STORE_KEY } from './anime-list.const'

type ProfileAnimeListStore = {
  rows: AnimeListStatus[]
}

const initialState: ProfileAnimeListStore = {
  rows: Object.values(AnimeListStatus)
}

export const $animeList = createStore(
  initialState,
  {
    moveRowTop: (state, row: AnimeListStatus) => {
      const from = state.rows.indexOf(row)
      const to = from - 1

      let temp = state.rows[from]

      state.rows.splice(from, 1, state.rows[to])
      state.rows.splice(to, 1, temp)
    },
    moveRowBottom: (state, row: AnimeListStatus) => {
      const from = state.rows.indexOf(row)
      const to = from + 1

      let temp = state.rows[from]

      state.rows.splice(from, 1, state.rows[to])
      state.rows.splice(to, 1, temp)
    },
    reorder: (state, reordered: AnimeListStatus[]) => {
      state.rows = reordered
    }
  },
  {
    persist: { name: ANIME_LIST_STORE_KEY }
  }
)
