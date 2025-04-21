import { createStore } from '@anifox/store'

import {
  EpisodeFragment,
  EpisodeTranslationFragment
} from '@/graphql/generated/output'

import {
  InitKodikPlayerPayload,
  KodikPlayerStore
} from './kodik-player.interface'

export const createKodikPlayerStore = (initialState: KodikPlayerStore) =>
  createStore(initialState, {
    initKodikPlayer: (state, payload: InitKodikPlayerPayload) => {
      state.animeUrl = payload.animeUrl
      state.animeId = payload.animeId
      state.selectedEpisode = payload.selectedEpisode
      state.selectedTranslation = payload.selectedTranslation
    },
    setSelectedEpisode: (state, payload: EpisodeFragment) => {
      state.selectedEpisode = payload
    },
    setSelectedTranslation: (state, payload: EpisodeTranslationFragment) => {
      state.selectedTranslation = payload
    }
  })
