import {
  AnimeGenre,
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTranslation,
  AnimeTypeVariants
} from '@/services/api'
import { createModel } from '@/shared/lib/store'

import { AnimeCatalogFilterState } from './anime-catalog-filter.interface'

const initialState: AnimeCatalogFilterState = {
  orderBy: null,
  status: null,
  search: '',
  genres: [],
  minimal_age: null,
  rating_mpa: null,
  season: null,
  type: null,
  years: [],
  translations: [],
  studio: null
}

export const $animeCatalogFilterModel = createModel({
  initialState,
  actions: {
    setSearchQuery: (state, query: string) => {
      state.search = query
    },
    setStatus: (state, status: AnimeStatuses) => {
      state.status = status
    },
    setOrderBy: (state, orderBy: AnimeOrderVariants) => {
      state.orderBy = orderBy
    },
    addGenre: (state, genre: AnimeGenre) => {
      state.genres.push(genre)
    },
    removeGenre: (state, genreId: string) => {
      state.genres.filter((genre) => genre.id !== genreId)
    },
    setGenres: (state, genres: AnimeGenre[]) => {
      state.genres = genres
    },
    addYear: (state, year: string) => {
      state.years.push(year)
    },
    removeYear: (state, year: string) => {
      state.years = state.years.filter((y) => y !== year)
    },
    setYears: (state, years: string[]) => {
      state.years = years
    },
    setSeason: (state, season: AnimeSeasons) => {
      state.season = season
    },
    setRatingMpa: (state, rating_mpa: AnimeRatingMpa) => {
      state.rating_mpa = rating_mpa
    },
    setMinimalAge: (state, minimal_age: AnimeMinimalAge) => {
      state.minimal_age = minimal_age
    },
    setType: (state, type: AnimeTypeVariants) => {
      state.type = type
    },
    addTranslation: (state, translation: AnimeTranslation) => {
      const candidate = state.translations.find(
        (el) => el.id === translation.id
      )

      if (!candidate) {
        return
      }

      state.translations.push(translation)
    },
    removeTranslation: (state, translation: AnimeTranslation) => {
      state.translations = state.translations.filter(
        (el) => el.id !== translation.id
      )
    },
    setStudio: (state, studio: string) => {
      state.studio = studio
    }
  }
})
