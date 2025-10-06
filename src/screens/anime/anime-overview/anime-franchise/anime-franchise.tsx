import { Carousel } from '@anifox/ui'
import { useMemo } from 'react'
import { useParams } from 'react-router'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useRelatedAnimesQuery } from '@/graphql/generated/output'

import { AnimePageParams } from '../../anime.interface'

export const AnimeFranchise = () => {
  const { animeId } = useParams<AnimePageParams>()

  const { data } = useRelatedAnimesQuery({
    variables: {
      animeId: animeId!,
      limit: 1000,
      page: 0
    }
  })

  const slides = useMemo(
    () =>
      (data?.relatedAnimes?.data ?? []).map(({ anime, type }) => ({
        content: (
          <AnimeCard
            anime={anime}
            label={`${type}${anime.year ? ` - ${anime.year} г.` : ''}`}
          />
        ),
        size: 200
      })),
    [data]
  )

  return <Carousel dragFree slides={slides} />
}
