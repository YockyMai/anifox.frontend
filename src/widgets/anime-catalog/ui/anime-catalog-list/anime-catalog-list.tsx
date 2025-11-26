import { IconExclamationCircle, IconMoodSad } from '@tabler/icons-react'
import { useInView } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useAnimesQuery } from '@/graphql/generated/output'

import { useAnimeListQueryParams } from '../../hooks'
import { useIsFilterActive } from '../../store'
import { ANIME_CARD_LOADERS } from './anime-catalog-list.const'
import { FilterBadges } from './filter-badges'

export const AnimeCatalogList = () => {
  const isFilterActive = useIsFilterActive()

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

  const infoContent = useMemo(() => {
    if (error) {
      return (
        <div className='mt-52 flex items-center justify-center'>
          <IconExclamationCircle className='mr-5 text-2xl text-red-500' />
          <div>
            <p>
              На нашем сервере произошла ошибочка :( <br />
            </p>
            <p>попробуйте перезагрузить страницу</p>
          </div>
        </div>
      )
    }

    if (data?.animes.data.length === 0) {
      return (
        <div className='mt-52 flex items-center justify-center'>
          <IconMoodSad className='mr-5 text-2xl' />
          <div>
            <p>
              Мы ничего не нашли :( <br />
            </p>
            <p>попробуйте другие фильтры</p>
          </div>
        </div>
      )
    }

    return null
  }, [data?.animes.data.length, error])

  return (
    <div className='container relative mt-52'>
      {isFilterActive && (
        <div className='my-4'>
          <FilterBadges />
        </div>
      )}
      {infoContent ?? (
        <div className='anifox-grid'>
          {data?.animes.data.map((anime) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
          {loading && ANIME_CARD_LOADERS}
          <span className='absolute bottom-96' ref={loadMoreTriggerRef} />
        </div>
      )}
    </div>
  )
}
