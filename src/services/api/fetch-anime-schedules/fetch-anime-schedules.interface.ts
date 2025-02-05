import { Anime } from '../api.types'

export type AnimeScheduleDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type FetchAnimeSchedulesParams = {
  date: string
  limit?: number
  page?: number
}

export type FetchAnimeSchedulesResponse = {
  monday: Anime[]
  tuesday: Anime[]
  wednesday: Anime[]
  thursday: Anime[]
  friday: Anime[]
  saturday: Anime[]
  sunday: Anime[]
}
