import { Carousel } from '@anifox/ui'
import { useMemo } from 'react'
import { useParams } from 'react-router'

import { AnimeCard } from '@/entities/anime/anime-card'
import { useAnimeRelatedQuery } from '@/services/queries'

import { AnimePageParams } from '../../anime.interface'

export const AnimeFranchise = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data = [] } = useAnimeRelatedQuery(animeUrl!)

  const slides = useMemo(
    () =>
      data.map(({ anime, relation }) => ({
        content: (
          <AnimeCard
            withoutPanel
            anime={anime}
            label={`${relation.type}${anime.year ? ` - ${anime.year} г.` : ''}`}
          />
        ),
        size: 200
      })),
    [data]
  )

  return <Carousel dragFree slides={slides} />
}
