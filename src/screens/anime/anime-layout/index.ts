import { lazy } from 'react'

export const AnimeScreenLayout = lazy(() =>
  import('./anime-layout').then(({ AnimeScreenLayout }) => ({
    default: AnimeScreenLayout
  }))
)
