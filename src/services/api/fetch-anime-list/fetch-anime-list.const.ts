export const ANIME_SORT_DIRECTION = {
  ASC: 'Asc',
  DESC: 'Desc'
} as const

export const ANIME_STATUSES = {
  RELEASED: 'Released',
  ONGOING: 'Ongoing'
} as const

export const ANIME_MINIMAL_AGE = {
  EIGHTEEN: 18,
  SIXTEEN: 16,
  TWELVE: 12,
  SIX: 6,
  ZERO: 0
} as const

export const ANIME_RATING_MPA = {
  PG: 'PG',
  PG_13: 'PG-13',
  R: 'R',
  R_PLUS: 'R+',
  G: 'G'
} as const

export const ANIME_SEASONS = {
  WINTER: 'Winter',
  SPRING: 'Spring',
  SUMMER: 'Summer',
  FALL: 'Fall'
} as const

export const ANIME_ORDER_VARIANTS = {
  UPDATE: 'Update',
  AIRED: 'Aired',
  RELEASED: 'Released',
  RANDOM: 'Random',
  RATING: 'Rating'
} as const

export const ANIME_TYPE_VARIANTS = {
  MOVIE: 'Movie',
  ONA: 'Ona',
  OVA: 'Ova',
  MUSIC: 'Music',
  SPECIAL: 'Special',
  TV: 'Tv'
} as const

export const MAP_ANIME_STATUSES_LABEL = {
  [ANIME_STATUSES.ONGOING]: 'Онгоинг',
  [ANIME_STATUSES.RELEASED]: 'Выпущен'
} as const

export const MAP_ANIME_TYPE_VARIANTS = {
  [ANIME_TYPE_VARIANTS.MOVIE]: 'Фильм',
  [ANIME_TYPE_VARIANTS.ONA]: 'Ona',
  [ANIME_TYPE_VARIANTS.OVA]: 'Ova',
  [ANIME_TYPE_VARIANTS.MUSIC]: 'Музыкальный',
  [ANIME_TYPE_VARIANTS.SPECIAL]: 'Специальный выпуск',
  [ANIME_TYPE_VARIANTS.TV]: 'Телесериал'
} as const
