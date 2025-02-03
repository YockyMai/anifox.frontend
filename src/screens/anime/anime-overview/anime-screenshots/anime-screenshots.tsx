import { ReactNode, useMemo } from 'react'
import { useParams } from 'react-router'

import { Carousel, Fancybox } from '@/common/components'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeScreenshotsQuery } from '@/services/queries'

import { AnimeScreenshot } from './anime-screenshot'
import { ANIME_SCREENSHOT_SIZE } from './anime-screenshots.const'
import './anime-screenshots.css'

export type NoSSRProps = {
  children: ReactNode
  loader?: ReactNode
}

export const AnimeScreenshots = () => {
  const { animeUrl } = useParams<AnimePageParams>()
  const { data = [], isLoading } = useAnimeScreenshotsQuery(animeUrl!)

  const slides = useMemo(() => {
    if (isLoading) {
      return Array.from({ length: 7 }).map((_, index) => ({
        content: <AnimeScreenshot key={index} isLoading />,
        size: ANIME_SCREENSHOT_SIZE.WIDTH
      }))
    }

    return data.map((src) => ({
      content: <AnimeScreenshot key={src} src={src} alt={''} />,
      size: ANIME_SCREENSHOT_SIZE.WIDTH
    }))
  }, [data, isLoading])

  return (
    <div className='anime-screenshots'>
      <Fancybox>
        <Carousel slides={slides} dragFree slideSpacing={10} align='end' />
      </Fancybox>
    </div>
  )
}
