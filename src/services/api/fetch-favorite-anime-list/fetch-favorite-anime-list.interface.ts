import { Anime } from '../fetch-anime-list'
import { AnimeTrackStatuses } from '../set-anime-status'

export type FetchFavoriteAnimeListParams = {
  status: AnimeTrackStatuses
  page?: number
  limit?: number
}

export type FetchFavoriteAnimeListResponse = Anime[]
