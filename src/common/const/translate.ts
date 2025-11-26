import {
  AnimeListStatus,
  AnimeType,
  AnimeStatus,
  SortOrder,
  AnimeSeason,
  AnimeOrder
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

export const MAP_SORT_LABEL = {
  [SortOrder.ASC]: 'По возрастанию',
  [SortOrder.DESC]: 'По убыванию'
}

export const MAP_ANIME_SEASON_LABEL = {
  [AnimeSeason.FALL]: 'Осень',
  [AnimeSeason.SPRING]: 'Весна',
  [AnimeSeason.SUMMER]: 'Лето',
  [AnimeSeason.WINTER]: 'Зима'
}

export const MAP_ANIME_ORDER_LABEL = {
  [AnimeOrder.AIRED_ON]: 'По дате анонса',
  [AnimeOrder.RANDOM]: 'По рандому',
  [AnimeOrder.RATING]: 'По рейтингу',
  [AnimeOrder.RELEASED_ON]: 'По дате выхода',
  [AnimeOrder.UPDATED_AT]: 'По обновлению'
}
