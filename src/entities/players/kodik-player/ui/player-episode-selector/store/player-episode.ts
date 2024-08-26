import { atom } from 'jotai'

import { AnimeEpisodeTranslation } from '@/services/api'

import { KodikPlayerEpisode } from './player-episode.interface'

export const selectedEpisodeAtom = atom<KodikPlayerEpisode | null>(null)
export const selectedTranslationAtom = atom<AnimeEpisodeTranslation | null>(
  null
)
