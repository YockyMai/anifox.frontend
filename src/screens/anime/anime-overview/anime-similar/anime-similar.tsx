import { Carousel } from '@anifox/ui'
import { useMemo } from 'react'
import { useParams } from 'react-router'

import { AnimeCard, AnimeSimilarCard } from '@/entities/anime/anime-card'
import { useSimilarAnimesQuery } from '@/graphql/generated/output'

import { AnimePageParams } from '../../anime.interface'

export const AnimeSimilar = () => {
  const { animeId } = useParams<AnimePageParams>()

  const { data } = useSimilarAnimesQuery({
    variables: {
      animeId: animeId!,
      limit: 1000,
      page: 0
    }
  })

  const slides = useMemo(
    () =>
      (data?.similarAnimes?.data ?? []).map((anime) => ({
        content: (
          <AnimeCard
            label={`${anime.year}г. • ${anime.episodesAired} эп.`}
            anime={anime}
            key={anime.id}
          />
        ),
        size: 200,
        key: anime.id
      })),
    [data]
  )

  return <Carousel dragFree slides={slides} />
}
