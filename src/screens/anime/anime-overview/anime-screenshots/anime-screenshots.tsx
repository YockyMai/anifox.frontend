import { Carousel, Fancybox } from '@anifox/ui'
import { ReactNode, useMemo } from 'react'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'

import { AnimeScreenshot } from './anime-screenshot'
import { ANIME_SCREENSHOT_SIZE } from './anime-screenshots.const'
import './anime-screenshots.css'

export type NoSSRProps = {
  children: ReactNode
  loader?: ReactNode
}

export const AnimeScreenshots = () => {
  const { animeUrl } = useParams<AnimePageParams>()
  const { data, loading } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const slides = useMemo(() => {
    if (loading) {
      return Array.from({ length: 7 }).map((_, index) => ({
        content: <AnimeScreenshot key={index} isLoading />,
        size: ANIME_SCREENSHOT_SIZE.WIDTH
      }))
    }

    return (data?.anime.screenshots ?? []).map((src) => ({
      content: <AnimeScreenshot key={src} src={src} />,
      size: ANIME_SCREENSHOT_SIZE.WIDTH
    }))
  }, [data, loading])

  return (
    <div className='anime-screenshots'>
      <Fancybox>
        <Carousel slides={slides} dragFree slideSpacing={10} align='end' />
      </Fancybox>
    </div>
  )
}
