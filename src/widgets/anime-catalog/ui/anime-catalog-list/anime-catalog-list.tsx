'use client'

import { IconExclamationCircle, IconMoodSad } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import { Fragment, Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { AnimeCard, AnimeCardSkeleton } from '@/entities/anime/anime-card'
import { useAnimeListQuery } from '@/pages/anime/api/anime-list-query/anime-list-query-atom'

import { $animeCatalogFilterAtoms } from '../../model'
import './anime-catalog-list.css'

export const AnimeCatalogList = () => {
  const [loadMoreTriggerRef, loadMoreTriggerInView] = useInView()

  const genres = useAtomValue($animeCatalogFilterAtoms.genres)
  const minimalAge = useAtomValue($animeCatalogFilterAtoms.minimalAge)
  const order = useAtomValue($animeCatalogFilterAtoms.order)
  const ratingMpa = useAtomValue($animeCatalogFilterAtoms.ratingMpa)
  const search = useAtomValue($animeCatalogFilterAtoms.search)
  const season = useAtomValue($animeCatalogFilterAtoms.season)
  const status = useAtomValue($animeCatalogFilterAtoms.status)
  const type = useAtomValue($animeCatalogFilterAtoms.type)
  const years = useAtomValue($animeCatalogFilterAtoms.years)
  const translations = useAtomValue($animeCatalogFilterAtoms.translations)
  const studio = useAtomValue($animeCatalogFilterAtoms.studio)
  const sort = useAtomValue($animeCatalogFilterAtoms.sort)
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useAnimeListQuery({
    genres: genres.map(({ id }) => id),
    minimal_age: minimalAge,
    order,
    rating_mpa: ratingMpa,
    search,
    season,
    status,
    type,
    years,
    translations: translations.map(({ id }) => id.toString()),
    studio,
    sort
  })

  useEffect(() => {
    if (loadMoreTriggerInView && !isFetchingNextPage && hasNextPage)
      fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, loadMoreTriggerInView])

  const loaders = Array.from({ length: 6 }, (_, index) => (
    <AnimeCardSkeleton key={index} />
  ))

  const cards =
    data?.pages && !isLoading
      ? data.pages.map((group, index) => (
          <Fragment key={index}>
            {group.map((anime) => (
              <AnimeCard anime={anime} key={anime.url} />
            ))}
          </Fragment>
        ))
      : Array.from({ length: 20 }, (_, index) => (
          <AnimeCardSkeleton key={index} />
        ))

  if (error)
    return (
      <div className='catalog-list-error'>
        <IconExclamationCircle />
        <div>
          <p>
            На нашем сервере произошла ошибочка :( <br />
          </p>
          <p>попробуйте перезагрузить страницу</p>
        </div>
      </div>
    )
  if (data?.pages[0].length === 0)
    return (
      <div className='catalog-list-empty'>
        <IconMoodSad />
        <div>
          <p>
            Мы ничего не нашли :( <br />
          </p>
          <p>попробуйте другие фильтры</p>
        </div>
      </div>
    )

  return (
    <div className='catalog-list'>
      {cards}
      {isFetchingNextPage && hasNextPage && loaders}
      <span className='catalog-list__load-more' ref={loadMoreTriggerRef} />
    </div>
  )
}
