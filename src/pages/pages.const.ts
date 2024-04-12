export const PAGE_URLS = {
  HOME: '/',
  CATALOG: {
    ROOT: '/anime',
    ANIME: {
      ROOT: '/anime/title/:animeUrl',
      CHARACTERS: '/anime/title/:animeUrl/characters',
      REVIEWS: '/anime/title/:animeUrl/reviews'
    }
  },
  WATCH: `/watch/:animeUrl`,
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  RIGHT_HOLDERS: '/right-holders'
}
