import { createStore } from '@anifox/store'
import { RefObject } from 'react'

import { AnimeEpisode, AnimeEpisodeTranslation } from '@/services/api'

import {
  InitKodikPlayerPayload,
  KodikPlayerStore
} from './kodik-player.interface'

const initialState: KodikPlayerStore = {
  animeUrl: '',
  selectedEpisode: null,
  selectedTranslation: null
}

export const createKodikPlayerStore = () =>
  createStore(initialState, {
    initKodikPlayer: (state, payload: InitKodikPlayerPayload) => {
      state.animeUrl = payload.animeUrl
      state.selectedEpisode = payload.selectedEpisode
      state.selectedTranslation = payload.selectedTranslation
    },
    setSelectedEpisode: (state, payload: AnimeEpisode) => {
      state.selectedEpisode = payload
    },
    setSelectedTranslation: (state, payload: AnimeEpisodeTranslation) => {
      state.selectedTranslation = payload
    }
  })
