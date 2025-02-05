import { atom } from 'jotai'

import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTypeVariants
} from '@/services/api'

import { DEFAULT_ATOMS } from './anime-catalog-filter.const'

export const status = atom<AnimeStatuses | null>(DEFAULT_ATOMS.status)
export const search = atom(DEFAULT_ATOMS.search)
export const genres = atom<string[]>(DEFAULT_ATOMS.genres)
export const minimalAge = atom<AnimeMinimalAge | null>(DEFAULT_ATOMS.minimalAge)
export const ratingMpa = atom<AnimeRatingMpa | null>(DEFAULT_ATOMS.ratingMpa)
export const season = atom<AnimeSeasons | null>(DEFAULT_ATOMS.season)
export const type = atom<AnimeTypeVariants | null>(DEFAULT_ATOMS.type)
export const years = atom<string[]>(DEFAULT_ATOMS.years)
export const translations = atom<string[]>(DEFAULT_ATOMS.translations)
export const studio = atom<string | null>(DEFAULT_ATOMS.studio)
export const sort = atom<AnimeSortDirection | null>(DEFAULT_ATOMS.sort)
export const order = atom<AnimeOrderVariants | null>(DEFAULT_ATOMS.order)

export const isFilterActive = atom<boolean>((get) =>
  [
    get(status),
    get(search),
    get(genres),
    get(minimalAge),
    get(ratingMpa),
    get(season),
    get(type),
    get(years),
    get(translations),
    get(studio),
    get(order)
  ].some(
    (value) =>
      value !== null &&
      value !== '' &&
      (Array.isArray(value) ? value.length > 0 : true)
  )
)
