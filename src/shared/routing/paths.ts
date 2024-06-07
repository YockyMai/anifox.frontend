export const Routes = {
  MAIN: '/',
  HOME: '/home',
  CATALOG: '/anime',
  ANIME_OVERVIEW: (animeUrl: string) => `/anime/${animeUrl}`,
  ANIME_CHARACTERS: (animeUrl: string) => `/anime/${animeUrl}/characters`,
  ANIME_REVIEWS: (animeUrl: string) => `/anime/${animeUrl}/reviews`,
  WATCH: (animeUrl: string) => `/watch/${animeUrl}`,
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGNUP: '/signup',
  RIGHT_HOLDERS: '/right-holders'
} as const
