import { lazy } from 'react'

export const MainPage = lazy(() =>
  import('./main').then((module) => ({
    default: module.MainPage,
  })),
)

export const MainLayout = lazy(() =>
  import('./main.layout').then((module) => ({
    default: module.MainLayout,
  })),
)
