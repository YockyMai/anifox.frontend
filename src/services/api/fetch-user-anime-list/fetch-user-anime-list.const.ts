export const ANIME_TRACK_STATUSES = {
  COMPLETED: 'completed',
  WATCHING: 'watching',
  PLAN_TO_WATCH: 'plan_to_watch',
  ON_HOLD: 'on_hold',
  DROPPED: 'dropped'
} as const

export const MAP_ANIME_TRACK_STATUS_LABEL = {
  [ANIME_TRACK_STATUSES.PLAN_TO_WATCH]: 'Запланировано',
  [ANIME_TRACK_STATUSES.WATCHING]: 'Смотрю',
  [ANIME_TRACK_STATUSES.COMPLETED]: 'Завершено',
  [ANIME_TRACK_STATUSES.DROPPED]: 'Брошено',
  [ANIME_TRACK_STATUSES.ON_HOLD]: 'Отложено'
} as const
