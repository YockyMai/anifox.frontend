export type LocalLastWatchedEpisode = {
  animeId: string
  episodeId: string
  translationId: number
  timing: number
}

export type LocalLastWatchedEpisodeStore = {
  episodes: LocalLastWatchedEpisode[]
}

export type SetLocalLastWatchedEpisode = {
  animeId: string

  episodeId: string
  translationId: number
}

export type SetLocalLastWatchedEpisodeDuration = {
  animeId: string
  timing: number
}
