'use client'

import { IconExclamationCircle, IconMoodSad } from '@tabler/icons-react'
import { Fragment, useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useAnimeListQuery } from '@/pages/anime/api/anime-list-query/anime-list-query-atom'

import { useAnimeListQueryParams } from '../../hooks'
import { ANIME_CARD_LOADERS } from './anime-catalog-list.const'
import './anime-catalog-list.css'

export const AnimeCatalogList = () => {
  const [loadMoreTriggerRef, loadMoreTriggerInView] = useInView()

  const animeListQueryParams = useAnimeListQueryParams()

  const {
    data,
    isLoading,
    isError,
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

  if (isError)
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

  if (data?.pages[0].length === 0 && !isLoading)
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
      {isFetchingNextPage && hasNextPage && ANIME_CARD_LOADERS}
      <span className='catalog-list__load-more' ref={loadMoreTriggerRef} />
    </div>
  )
}
