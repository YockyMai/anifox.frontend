export type FetchAnimeEpisodesParams = {
  animeUrl: string
  page?: number
  limit?: number
  sort?: 'NumberAsc' | 'NumberDesc'
}

export type FetchAnimeEpisodesResponse = AnimeEpisode[]

export type AnimeEpisodeTranslation = {
  id: number
  link: string
  type: string
  title: string
}

export type AnimeEpisode = {
  aired: string | null
  title: string
  description: string | null
  recap: boolean
  number: number
  image: string
  translations: AnimeEpisodeTranslation[]
}
