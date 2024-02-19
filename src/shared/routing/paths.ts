export const ROUTES = {
  MAIN: '/',
  HOME: '/home',
  CATALOG: '/anime',
  ANIME_OVERVIEW: (animeUrl: string) => `/anime/title/${animeUrl}`,
  ANIME_CHARACTERS: (animeUrl: string) => `/anime/title/${animeUrl}/characters`,
  ANIME_REVIEWS: (animeUrl: string) => `/anime/title/${animeUrl}/reviews`,
  WATCH: (animeUrl: string) => `/watch/${animeUrl}`,
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGNUP: '/signup',
  RIGHT_HOLDERS: '/right-holders',
} as const
