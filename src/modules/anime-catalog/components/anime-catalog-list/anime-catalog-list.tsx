import { IconExclamationCircle, IconMoodSad } from '@tabler/icons-react'
import { Fragment, Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useStore } from 'zustand'

import { AnimeCardSkeleton } from '@/modules/anime-card'
import { AnimeCard } from '@/modules/anime-card'
import { useGetAnimeList } from '@/services/queries'

import { $animeCatalogFilterModel } from '../../model/anime-catalog-filter'
import './anime-catalog-list.css'

export const AnimeCatalogList = () => {
  const [loadMoreTriggerRef, loadMoreTriggerInView] = useInView()

  const {
    search,
    genres,
    minimal_age,
    rating_mpa,
    orderBy,
    season,
    status,
    type,
    years,
    translations,
    studio
  } = useStore($animeCatalogFilterModel.store)

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useGetAnimeList({
    limit: 30,
    search,
    genres: genres.map(({ id }) => id),
    translations: translations.map(({ id }) => id.toString()),
    status,
    season,
    rating_mpa,
    minimal_age,
    order: orderBy,
    type,
    years,
    studio
  })

  useEffect(() => {
    if (loadMoreTriggerInView && !isFetchingNextPage && hasNextPage)
      fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, loadMoreTriggerInView])

  const loaders = Array.from({ length: 6 }, (_, index) => (
    <AnimeCardSkeleton key={index} />
  ))

  const cards =
    data && !isLoading
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
      <Suspense>
        <div className='catalog-list-empty'>
          <IconMoodSad />
          <div>
            <p>
              Мы ничего не нашли :( <br />
            </p>
            <p>попробуйте другие фильтры</p>
          </div>
        </div>
      </Suspense>
    )

  return (
    <div className='catalog-list'>
      {cards}
      {isFetchingNextPage && hasNextPage && loaders}
      <span className='catalog-list__load-more' ref={loadMoreTriggerRef} />
    </div>
  )
}
