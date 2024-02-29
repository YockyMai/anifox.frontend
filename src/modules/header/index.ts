import { lazy } from 'react'

export const Header = lazy(() =>
  import('./header').then((module) => ({ default: module.Header })),
)
