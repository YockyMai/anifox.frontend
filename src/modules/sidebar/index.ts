import { lazy } from 'react'

export const Sidebar = lazy(() =>
  import('./sidebar').then((module) => ({
    default: module.Sidebar,
  })),
)
