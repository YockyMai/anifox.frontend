import { createStore } from '@anifox/store'

import { AnimeStatus } from '@/graphql/generated/output'
import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTypeVariants
} from '@/services/api'

import { AnimeCatalogFilterStore } from './anime-catalog-filter.interface'

export const createAnimeCatalogFilterStore = (
  initialState: AnimeCatalogFilterStore
) => {
  return createStore(initialState, {
    setStatus: (state, status: AnimeStatus | null) => {
      state.status = status
    },
    setSearch: (state, search: string) => {
      state.search = search
    },
    setGenres: (state, genres: string[]) => {
      state.genres = genres
    },
    setMinimalAge: (state, minimalAge: AnimeMinimalAge | null) => {
      state.minimalAge = minimalAge
    },
    setRatingMpa: (state, ratingMpa: AnimeRatingMpa | null) => {
      state.ratingMpa = ratingMpa
    },
    setSeason: (state, season: AnimeSeasons | null) => {
      state.season = season
    },
    setType: (state, type: AnimeTypeVariants | null) => {
      state.type = type
    },
    setYears: (state, years: number[]) => {
      state.years = years
    },
    setTranslations: (state, translations: string[]) => {
      state.translations = translations
    },
    setStudio: (state, studio: string | null) => {
      state.studio = studio
    },
    setSort: (state, sort: AnimeSortDirection | null) => {
      state.sort = sort
    },
    setOrder: (state, order: AnimeOrderVariants | null) => {
      state.order = order
    }
  })
}
