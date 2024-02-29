import { lazy } from 'react'

export const CatalogPage = lazy(() =>
  import('./catalog').then((module) => ({
    default: module.CatalogPage,
  })),
)
