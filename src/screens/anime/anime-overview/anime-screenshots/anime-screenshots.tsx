'use client'

import { useParams } from 'next/navigation'
import { ReactNode } from 'react'

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
  const { data } = useAnimeScreenshotsQuery(animeUrl)

  if (!data) return null

  return (
    <div className='anime-screenshots'>
      <Fancybox>
        <Carousel
          slides={(data ?? []).map((src) => ({
            content: <AnimeScreenshot key={src} src={src} alt={''} />,
            size: ANIME_SCREENSHOT_SIZE.WIDTH
          }))}
          dragFree
          slideSpacing={10}
          align='end'
        />
      </Fancybox>
    </div>
  )
}
