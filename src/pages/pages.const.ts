export const PAGE_URLS = {
  HOME: '/',
  CATALOG: {
    ROOT: 'anime',
    ANIME: {
      ROOT: ':animeUrl',
      CHARACTERS: ':animeUrl/characters',
      REVIEWS: ':animeUrl/reviews'
    }
  },
  WATCH: `/watch/:animeUrl`,
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  RIGHT_HOLDERS: '/right-holders'
}
