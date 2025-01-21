import { atom } from 'jotai'

import { AnimeEpisode, AnimeEpisodeTranslation } from '@/services/api'

import { KODIK_TABS } from './kodik-player.const'
import { KodikTabs } from './kodik-player.interface'

export const animeUrl = atom<string>('')

export const selectedEpisodeAtom = atom<AnimeEpisode | null>(null)
export const selectedTranslationAtom = atom<AnimeEpisodeTranslation | null>(
  null
)

export const activeTab = atom<KodikTabs>(KODIK_TABS.EPISODES)
