import { lazy } from 'react'

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

export const PAGES = {
  HOME: {
    PAGE: lazy(() => import('./main')),
    LAYOUT: lazy(() => import('@/layouts/main-layout'))
  },
  CATALOG: {
    ROOT: {
      PAGE: lazy(() => import('./catalog'))
    },
    ANIME: {
      ROOT: {
        PAGE: lazy(() => import('./anime')),
        LAYOUT: lazy(() => import('@/layouts/anime-layout'))
      }
    }
  },
  LOGIN: {
    PAGE: lazy(() => import('./login')),
    LAYOUT: lazy(() => import('@/layouts/auth-layout'))
  },
  SIGN_UP: {
    PAGE: lazy(() => import('./sign-up')),
    LAYOUT: lazy(() => import('@/layouts/auth-layout'))
  }
}
