export const PAGE_URLS = {
  HOME: '/',
  CATALOG: {
    ROOT: 'anime',
    ANIME: {
      ROOT: 'title/:animeUrl',
      CHARACTERS: 'title/:animeUrl/characters',
      REVIEWS: 'title/:animeUrl/reviews'
    }
  },
  WATCH: `/watch/:animeUrl`,
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  RIGHT_HOLDERS: '/right-holders'
}
