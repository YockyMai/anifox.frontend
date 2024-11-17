import { Anime } from '../fetch-anime-list'

export type AnimeScheduleDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type FetchAnimeSchedulesParams = {
  day: AnimeScheduleDay
}

export type FetchAnimeSchedulesResponse = {
  [key in AnimeScheduleDay]: Anime[]
}
