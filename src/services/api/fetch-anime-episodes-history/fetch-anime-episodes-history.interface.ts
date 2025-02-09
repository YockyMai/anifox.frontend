export type FetchAnimeEpisodesHistoryResponse = {
  title: string
  number: number
  aired: string | null // YYYY-MM-DD
}[]

export type FetchAnimeEpisodesHistoryRequest = {
  page?: number
  limit?: number
  animeUrl: string
}
