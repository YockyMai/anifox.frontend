export const ROUTES = {
  HOME: '/',
  CATALOG: {
    ROOT: '/anime',
    ANIME: {
      ROOT: '/anime/:animeUrl',
      CHARACTERS: '/anime/:animeUrl/characters',
      WATCH: '/anime/:animeUrl/watch',
      REVIEWS: '/anime/:animeUrl/reviews'
    }
  },
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  RIGHT_HOLDERS: '/right-holders',
  PROFILE: {
    ROOT: '/profile/:login'
  }
}
