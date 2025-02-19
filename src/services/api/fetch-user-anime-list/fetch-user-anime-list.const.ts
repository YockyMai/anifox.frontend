export const ANIME_LIST_STATUSES = {
  COMPLETED: 'completed',
  WATCHING: 'watching',
  PLAN_TO_WATCH: 'plan_to_watch',
  ON_HOLD: 'on_hold',
  DROPPED: 'dropped'
} as const

export const MAP_ANIME_LIST_STATUS_LABEL = {
  [ANIME_LIST_STATUSES.PLAN_TO_WATCH]: 'Запланировано',
  [ANIME_LIST_STATUSES.WATCHING]: 'Смотрю',
  [ANIME_LIST_STATUSES.COMPLETED]: 'Завершено',
  [ANIME_LIST_STATUSES.DROPPED]: 'Брошено',
  [ANIME_LIST_STATUSES.ON_HOLD]: 'Отложено'
} as const
