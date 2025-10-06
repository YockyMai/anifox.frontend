import {
  AnimeOrder,
  AnimeSeason,
  AnimeStatus,
  AnimeType,
  RatingMpa,
  SortOrder
} from '@/graphql/generated/output'

export type AnimeCatalogFilterStore = {
  status: AnimeStatus | null
  search: string
  genres: string[]
  minimalAge: number | null
  ratingMpa: RatingMpa | null
  season: AnimeSeason | null
  type: AnimeType | null
  years: number[]
  translations: string[]
  studio: string | null
  sort: SortOrder | null
  order: AnimeOrder | null
}
