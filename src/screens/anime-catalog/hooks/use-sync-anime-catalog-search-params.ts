'use client'

import { useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTypeVariants
} from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'
import { ANIME_SORT_DIRECTION } from '@/widgets/anime-catalog/model'

export const useSyncAnimeCatalogSearchParams = () => {
  const searchParams = useSearchParams()

  const setStatus = useSetAtom($animeCatalogFilterAtoms.status)
  const setSearch = useSetAtom($animeCatalogFilterAtoms.search)
  const setGenres = useSetAtom($animeCatalogFilterAtoms.genres)
  const setMinimalAge = useSetAtom($animeCatalogFilterAtoms.minimalAge)
  const setRatingMpa = useSetAtom($animeCatalogFilterAtoms.ratingMpa)
  const setSeason = useSetAtom($animeCatalogFilterAtoms.season)
  const setType = useSetAtom($animeCatalogFilterAtoms.type)
  const setYears = useSetAtom($animeCatalogFilterAtoms.years)
  const setTranslations = useSetAtom($animeCatalogFilterAtoms.translations)
  const setStudio = useSetAtom($animeCatalogFilterAtoms.studio)
  const setSort = useSetAtom($animeCatalogFilterAtoms.sort)
  const setOrder = useSetAtom($animeCatalogFilterAtoms.order)

  const status = searchParams.get('status') as AnimeStatuses | null
  const search = searchParams.get('search') ?? ''
  const genres = searchParams.getAll('genres')
  const minimalAge = searchParams.get('minimalAge')
    ? (Number.parseInt(searchParams.get('minimalAge')!) as AnimeMinimalAge)
    : null
  const ratingMpa = searchParams.get('ratingMpa') as AnimeRatingMpa | null
  const season = searchParams.get('season') as AnimeSeasons | null
  const type = searchParams.get('type') as AnimeTypeVariants | null
  const years = searchParams.getAll('years')
  const translations = searchParams.getAll('translations')
  const studio = searchParams.get('studio')
  const sort =
    (searchParams.get('sort') as AnimeSortDirection) ??
    ANIME_SORT_DIRECTION.DESC
  const order = searchParams.get('order') as AnimeOrderVariants | null

  useHydrateAtoms([
    [$animeCatalogFilterAtoms.status, status],
    [$animeCatalogFilterAtoms.search, search],
    [$animeCatalogFilterAtoms.genres, genres],
    [$animeCatalogFilterAtoms.minimalAge, minimalAge],
    [$animeCatalogFilterAtoms.ratingMpa, ratingMpa],
    [$animeCatalogFilterAtoms.season, season],
    [$animeCatalogFilterAtoms.type, type],
    [$animeCatalogFilterAtoms.years, years],
    [$animeCatalogFilterAtoms.translations, translations],
    [$animeCatalogFilterAtoms.studio, studio],
    [$animeCatalogFilterAtoms.sort, sort],
    [$animeCatalogFilterAtoms.order, order]
  ])

  useEffect(() => {
    setStatus(status)
    setSearch(search)
    setGenres(genres)
    setMinimalAge(minimalAge)
    setRatingMpa(ratingMpa)
    setSeason(season)
    setType(type)
    setYears(years)
    setTranslations(translations)
    setStudio(studio)
    setSort(sort)
    setOrder(order)
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
    setStatus,
    setSearch,
    setGenres,
    setMinimalAge,
    setRatingMpa,
    setSeason,
    setType,
    setYears,
    setTranslations,
    setStudio,
    setSort,
    setOrder
  ])
}
