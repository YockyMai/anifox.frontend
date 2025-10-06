import { createStore } from '@anifox/store'

import {
  AnimeOrder,
  AnimeSeason,
  AnimeStatus,
  AnimeType,
  RatingMpa,
  SortOrder
} from '@/graphql/generated/output'

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
    setMinimalAge: (state, minimalAge: number | null) => {
      state.minimalAge = minimalAge
    },
    setRatingMpa: (state, ratingMpa: RatingMpa | null) => {
      state.ratingMpa = ratingMpa
    },
    setSeason: (state, season: AnimeSeason | null) => {
      state.season = season
    },
    setType: (state, type: AnimeType | null) => {
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
    setSort: (state, sort: SortOrder | null) => {
      state.sort = sort
    },
    setOrder: (state, order: AnimeOrder | null) => {
      state.order = order
    }
  })
}
