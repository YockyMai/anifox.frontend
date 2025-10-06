export const FavoritesFilterView = {
  CHARACTERS: 'Characters',
  ANIMES: 'Animes'
} as const

export type FavoritesFilterView =
  (typeof FavoritesFilterView)[keyof typeof FavoritesFilterView]
