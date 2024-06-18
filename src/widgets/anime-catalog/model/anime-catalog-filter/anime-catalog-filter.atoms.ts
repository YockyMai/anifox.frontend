import { atom } from 'jotai'

import {
  AnimeGenre,
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTranslation,
  AnimeTypeVariants
} from '@/services/api'

import { ANIME_SORT_DIRECTION } from './anime-catalog-filter.const'

export const status = atom<AnimeStatuses | null>(null)
export const search = atom('')
export const genres = atom<AnimeGenre[]>([])
export const minimalAge = atom<AnimeMinimalAge | null>(null)
export const ratingMpa = atom<AnimeRatingMpa | null>(null)
export const season = atom<AnimeSeasons | null>(null)
export const type = atom<AnimeTypeVariants | null>(null)
export const years = atom<string[]>([])
export const translations = atom<AnimeTranslation[]>([])
export const studio = atom<string | null>(null)
export const sort = atom<AnimeSortDirection>(ANIME_SORT_DIRECTION.DESC)
export const order = atom<AnimeOrderVariants | null>(null)
