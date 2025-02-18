import { Anime, AnimeTrackStatuses } from '../api.types'

export type FetchFavoriteAnimeListParams = {
  status: AnimeTrackStatuses
  page?: number
  limit?: number
}

export type FetchFavoriteAnimeListResponse = Anime[]
