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
