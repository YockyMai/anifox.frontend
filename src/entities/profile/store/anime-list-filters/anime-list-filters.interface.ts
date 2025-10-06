import {
  AnimeListStatus,
  AnimeStatus,
  AnimeType
} from '@/graphql/generated/output'

export type AnimeListFiltersStore = {
  search: string
  trackStatus: AnimeListStatus | null
  type: AnimeType | null
  status: AnimeStatus | null
}
