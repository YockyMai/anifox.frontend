'use client'

import { useHydrateAtoms } from 'jotai/utils'
import { useSearchParams } from 'next/navigation'

import {
  ANIME_SORT_DIRECTION,
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeSortDirection,
  AnimeStatuses,
  AnimeTypeVariants
} from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog'

export const useSyncAnimeCatalogSearchParams = () => {
  const searchParams = useSearchParams()

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
}
