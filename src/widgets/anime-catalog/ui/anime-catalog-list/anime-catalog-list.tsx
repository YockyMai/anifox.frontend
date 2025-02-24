import { IconExclamationCircle, IconMoodSad } from '@tabler/icons-react'
import { useInView } from 'framer-motion'
import { Fragment, useEffect, useMemo, useRef } from 'react'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useAnimeListQuery } from '@/services/queries'

import { useAnimeListQueryParams } from '../../hooks'
import { AnimeCatalogFilterTags } from '../anime-catalog-filter-tags'
import { ANIME_CARD_LOADERS } from './anime-catalog-list.const'
import './anime-catalog-list.css'

export const AnimeCatalogList = () => {
  const loadMoreTriggerRef = useRef<HTMLSpanElement>(null)
  const loadMoreTriggerInView = useInView(loadMoreTriggerRef)

  const animeListQueryParams = useAnimeListQueryParams()

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useAnimeListQuery(animeListQueryParams)

  useEffect(() => {
    if (loadMoreTriggerInView && !isFetchingNextPage && hasNextPage)
      fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, loadMoreTriggerInView])

  const cards = useMemo(
    () =>
      data?.pages.map((group, index) => (
        <Fragment key={index}>
          {group.map((anime) => (
            <AnimeCard anime={anime} key={anime.url} />
          ))}
        </Fragment>
      )),
    [data]
  )

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
    <div className='container mt-52'>
      <AnimeCatalogFilterTags />
      <div className='catalog-list'>
        {cards}
        {((isFetchingNextPage && hasNextPage) || isLoading) &&
          ANIME_CARD_LOADERS}
        <span className='catalog-list__load-more' ref={loadMoreTriggerRef} />
      </div>
    </div>
  )
}
