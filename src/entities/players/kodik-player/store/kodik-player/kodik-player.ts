import { atom } from 'jotai'

import { AnimeEpisode, AnimeEpisodeTranslation } from '@/services/api'

export const animeUrl = atom<string>('')

export const selectedEpisodeAtom = atom<AnimeEpisode | null>(null)
export const selectedTranslationAtom = atom<AnimeEpisodeTranslation | null>(
  null
)
