import { AnimeEpisode } from '../fetch-anime-episodes'
import { Anime } from '../fetch-anime-list'

export type RecentlyWatchedEpisode = {
  anime: Anime
  episode: AnimeEpisode
  translationId: number
  date: Date
  timingInSeconds: number
}
