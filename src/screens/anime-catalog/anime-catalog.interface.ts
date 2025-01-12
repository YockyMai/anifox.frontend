import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTypeVariants
} from '@/services/api'

export type AnimeCatalogPageSearchPreset =
  | 'all-time-popular'
  | 'most-rated'
  | 'popular-ongoing'

export type AnimeCatalogPageSearchParams = {
  status?: AnimeStatuses | null
  search?: string | null
  genres?: string[]
  minimalAge?: AnimeMinimalAge | null
  ratingMpa?: AnimeRatingMpa | null
  season?: AnimeSeasons | null
  type?: AnimeTypeVariants | null
  years?: string[]
  translations?: string[]
  studio?: string | null
  sort?: AnimeSortDirection
  order?: AnimeOrderVariants | null

  preset?: AnimeCatalogPageSearchPreset
}
