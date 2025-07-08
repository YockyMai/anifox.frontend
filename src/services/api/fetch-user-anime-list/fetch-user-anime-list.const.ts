import { AnimeListStatus } from '@/graphql/generated/output'

export const MAP_ANIME_LIST_STATUS_LABEL = {
  [AnimeListStatus.PLAN_TO_WATCH]: 'Запланировано',
  [AnimeListStatus.WATCHING]: 'Смотрю',
  [AnimeListStatus.COMPLETED]: 'Завершено',
  [AnimeListStatus.DROPPED]: 'Брошено',
  [AnimeListStatus.ON_HOLD]: 'Отложено'
} as const
