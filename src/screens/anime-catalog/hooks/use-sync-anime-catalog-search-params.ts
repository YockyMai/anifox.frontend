import { useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

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
  const [searchParams] = useSearchParams()

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
