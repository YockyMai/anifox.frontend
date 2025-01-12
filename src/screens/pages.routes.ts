export const ROUTES = {
  HOME: '/',
  CATALOG: {
    ROOT: '/anime',
    POPULAR: '/anime/popular',
    MOST_RATED: '/anime/most-rated',
    POPULAR_ONGOING: '/anime/popular-ongoing',
    ANIME: {
      ROOT: '/anime/:animeUrl',
      CHARACTERS: '/anime/:animeUrl/characters',
      REVIEWS: '/anime/:animeUrl/reviews'
    }
  },
  CHARACTER: {
    ROOT: '/character/:id'
  },
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  RIGHT_HOLDERS: '/right-holders',
  PROFILE: {
    ROOT: '/profile/:login'
  },
  APPS: {
    ROOT: '/apps',
    ANDROID: '/apps#android'
  }
}
