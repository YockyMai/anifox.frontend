export const ROUTES = {
  HOME: '/',
  CATALOG: {
    ROOT: '/anime',
    ANIME: {
      ROOT: '/anime/:animeUrl',
      CHARACTERS: '/anime/:animeUrl/characters',
      REVIEWS: '/anime/:animeUrl/reviews'
    }
  },
  WATCH: `/watch/:animeUrl`,
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  RIGHT_HOLDERS: '/right-holders'
}