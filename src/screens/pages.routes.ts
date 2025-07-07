export const ROUTES = {
  HOME: '/',
  CATALOG: {
    ROOT: '/anime',
    POPULAR: '/anime/popular',
    MOST_RATED: '/anime/most-rated',
    POPULAR_ONGOING: '/anime/popular-ongoing',
    ANIME: {
      ROOT: (animeId: string, animeUrl: string) =>
        `/anime/${animeId}/${animeUrl}`,
      CHARACTERS: (animeId: string, animeUrl: string) =>
        `/anime/${animeId}/${animeUrl}/characters`,
      REVIEWS: (animeId: string, animeUrl: string) =>
        `/anime/${animeId}/${animeUrl}/reviews`
    }
  },
  CHARACTER: {
    ROOT: (id: string) => `/character/${id}`
  },
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  AUTH: {
    EXTERNAL: 'auth/external'
  },
  RIGHT_HOLDERS: '/right-holders',
  PROFILE: {
    ROOT: (login: string) => `/profile/${login}`,
    ANIME_LIST: '/profile/:login/anime-list',
    FAVORITES: '/profile/:login/favorites',
    FRIENDS: {
      ROOT: (login: string) => `/profile/${login}/friends`,
      ADD: (login: string) => `/profile/${login}/friends/add`,
      REQUESTS: (login: string) => `/profile/${login}/friends/requests`
    }
  },
  APPS: {
    ROOT: '/apps',
    ANDROID: '/apps#android',
    WINDOWS: '/apps#windows'
  },
  KODIK: '/kodik'
}
