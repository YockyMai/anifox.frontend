import {
  AnimeListStatus,
  AnimeType,
  AnimeStatus
} from '@/graphql/generated/output'

export const MAP_ANIME_LIST_STATUS_LABEL = {
  [AnimeListStatus.COMPLETED]: 'Завершено',
  [AnimeListStatus.DROPPED]: 'Брошено',
  [AnimeListStatus.ON_HOLD]: 'Отложено',
  [AnimeListStatus.PLAN_TO_WATCH]: 'Запланировано',
  [AnimeListStatus.WATCHING]: 'Смотрю'
}

export const MAP_ANIME_STATUS_LABEL = {
  [AnimeStatus.ONGOING]: 'Онгоинг',
  [AnimeStatus.COMPLETED]: 'Завершен',
  [AnimeStatus.ANNOUNCED]: 'Анонсирован'
} as const

export const MAP_ANIME_TYPE_VARIANTS = {
  [AnimeType.MOVIE]: 'Фильм',
  [AnimeType.ONA]: 'Ona',
  [AnimeType.OVA]: 'Ova',
  [AnimeType.MUSIC]: 'Музыкальный',
  [AnimeType.SPECIAL]: 'Специальный выпуск',
  [AnimeType.TV]: 'Телесериал'
} as const
