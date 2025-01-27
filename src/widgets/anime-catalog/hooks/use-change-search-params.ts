'use client'

import { useAtomCallback } from 'jotai/utils'
import { useCallback } from 'react'

import { useRouter } from '@/i18n/routing'
import { ROUTES } from '@/screens/pages.routes'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'

import { AnimeCatalogPageSearchParams } from '../../../screens/anime-catalog/anime-catalog.interface'
import { createAnimeCatalogSearchParams } from '../../../screens/anime-catalog/lib'

export const useChangeSearchParams = () => {
  const router = useRouter()

  const getSearchParams = useAtomCallback(
    useCallback((get) => {
      const status = get($animeCatalogFilterAtoms.status)
      const search = get($animeCatalogFilterAtoms.search)
      const genres = get($animeCatalogFilterAtoms.genres)
      const minimalAge = get($animeCatalogFilterAtoms.minimalAge)
      const ratingMpa = get($animeCatalogFilterAtoms.ratingMpa)
      const season = get($animeCatalogFilterAtoms.season)
      const type = get($animeCatalogFilterAtoms.type)
      const years = get($animeCatalogFilterAtoms.years)
      const translations = get($animeCatalogFilterAtoms.translations)
      const studio = get($animeCatalogFilterAtoms.studio)
      const sort = get($animeCatalogFilterAtoms.sort)
      const order = get($animeCatalogFilterAtoms.order)

      return {
        status,
        search,
        genres,
        minimalAge,
        ratingMpa,
        season,
        type,
        years,
        translations,
        studio,
        sort,
        order
      }
    }, [])
  )

  const changeSearchParams = useCallback(
    (params: AnimeCatalogPageSearchParams) => {
      const currentSearchParams = getSearchParams()

      const filteredSearchParams = Object.entries({
        ...currentSearchParams,
        ...params
      })
        .filter(
          ([, value]) => value !== undefined && value !== null && value !== ''
        )
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

      router.replace({
        pathname: ROUTES.CATALOG.ROOT,
        query: filteredSearchParams
      })
    },
    [getSearchParams, router]
  )

  return changeSearchParams
}
