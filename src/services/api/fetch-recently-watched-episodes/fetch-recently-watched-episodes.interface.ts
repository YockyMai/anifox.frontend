import { Anime, AnimeEpisode } from '../api.types'

export type RecentlyWatchedEpisode = {
  anime: Anime
  episode: AnimeEpisode
  translationId: number
  date: Date
  timingInSeconds: number
}
