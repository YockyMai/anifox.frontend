'use client'

import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ROUTES } from '@/screens/pages.routes'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'

import { createAnimeCatalogSearchParams } from '../../lib'

export const SearchParamsSynchronizer = () => {
  const router = useRouter()

  const status = useAtomValue($animeCatalogFilterAtoms.status)
  const search = useAtomValue($animeCatalogFilterAtoms.search)
  const genres = useAtomValue($animeCatalogFilterAtoms.genres)
  const minimalAge = useAtomValue($animeCatalogFilterAtoms.minimalAge)
  const ratingMpa = useAtomValue($animeCatalogFilterAtoms.ratingMpa)
  const season = useAtomValue($animeCatalogFilterAtoms.season)
  const type = useAtomValue($animeCatalogFilterAtoms.type)
  const years = useAtomValue($animeCatalogFilterAtoms.years)
  const translations = useAtomValue($animeCatalogFilterAtoms.translations)
  const studio = useAtomValue($animeCatalogFilterAtoms.studio)
  const sort = useAtomValue($animeCatalogFilterAtoms.sort)
  const order = useAtomValue($animeCatalogFilterAtoms.order)

  useEffect(() => {
    router.replace(
      `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ status, search, genres, minimalAge, ratingMpa, season, type, years, translations, studio, sort, order })}`
    )
  }, [
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
    order,
    router
  ])

  return null
}
