export type AnimeTrackStatuses =
  | 'plan_to_watch'
  | 'watching'
  | 'completed'
  | 'dropped'
  | 'on_hold'

export type SetAnimeStatusParams = {
  animeUrl: string
  status: AnimeTrackStatuses
}
