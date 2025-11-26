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
    removeGenre: (state, genre: string) => {
      state.genres = state.genres.filter((item) => item !== genre)
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
    removeYear: (state, year: number) => {
      state.years = state.years.filter((item) => item !== year)
    },
    setTranslations: (state, translations: string[]) => {
      state.translations = translations
    },
    removeTranslation: (state, translation: string) => {
      state.translations = state.translations.filter(
        (item) => item !== translation
      )
    },
    setStudio: (state, studio: string | null) => {
      state.studio = studio
    },
    setSort: (state, sort: SortOrder | null) => {
      state.sort = sort
    },
    setOrder: (state, order: AnimeOrder | null) => {
      state.order = order
    },
    resetFilters: (state) => {
      state.status = null
      state.search = ''
      state.genres = []
      state.minimalAge = null
      state.ratingMpa = null
      state.season = null
      state.type = null
      state.years = []
      state.translations = []
      state.studio = null
      state.sort = null
      state.order = null
    }
  })
}
