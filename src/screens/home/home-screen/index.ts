import { lazy } from 'react'

export const HomeScreen = lazy(() =>
  import('./home').then(({ HomeScreen }) => ({ default: HomeScreen }))
)
