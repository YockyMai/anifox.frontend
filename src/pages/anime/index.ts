import { lazy } from 'react'

export const AnimePage = lazy(() =>
  import('./anime.tsx').then((module) => ({
    default: module.AnimePage,
  })),
)

export const AnimeLayout = lazy(() =>
  import('./anime.layout.tsx').then((module) => ({
    default: module.AnimeLayout,
  })),
)
