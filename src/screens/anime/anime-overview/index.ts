import { lazy } from 'react'

export const AnimeOverviewScreen = lazy(() =>
  import('./anime-overview').then(({ AnimeOverviewScreen }) => ({
    default: AnimeOverviewScreen
  }))
)
