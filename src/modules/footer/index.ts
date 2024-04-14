import { lazy } from 'react'

export const Footer = lazy(() =>
  import('./footer').then((module) => ({ default: module.Footer })),
)
