import { AnimeTrackStatuses } from '@/services/api'

export type UseUserAnimeListQueryParams = {
  status: AnimeTrackStatuses
  login: string
}
