import { IconExclamationCircle, IconMoodSad } from '@tabler/icons-react'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useAnimesQuery } from '@/graphql/generated/output'

import { useAnimeListQueryParams } from '../../hooks'
import { ANIME_CARD_LOADERS } from './anime-catalog-list.const'
import './anime-catalog-list.css'

export const AnimeCatalogList = () => {
  const loadMoreTriggerRef = useRef<HTMLSpanElement>(null)
  const loadMoreTriggerInView = useInView(loadMoreTriggerRef)

  const animeListQueryParams = useAnimeListQueryParams()

  const { data, fetchMore, error, loading } = useAnimesQuery({
    variables: { page: 0, ...animeListQueryParams },
    notifyOnNetworkStatusChange: true
  })

  useEffect(() => {
    if (loadMoreTriggerInView && data?.animes.pageInfo.hasNextPage)
      fetchMore({
        variables: {
          page: data.animes.pageInfo.page + 1,
          ...animeListQueryParams
        }
      })
  }, [loadMoreTriggerInView, data, animeListQueryParams, fetchMore])

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

  if (data?.animes.data.length === 0)
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
      {data?.animes.data.map((anime) => (
        <AnimeCard anime={anime} key={anime.id} />
      ))}
      {loading && ANIME_CARD_LOADERS}
      <span className='catalog-list__load-more' ref={loadMoreTriggerRef} />
    </div>
  )
}
