'use client'

import { Carousel, NoSSR } from '@anifox/ui'
import { useParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

import { Fancybox } from '@/common/components'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeScreenshotsQuery } from '@/services/queries'

import { AnimeScreenshot } from './anime-screenshot'
import { ANIME_SCREENSHOT_SIZE } from './anime-screenshots.const'

export type NoSSRProps = {
  children: ReactNode
  loader?: ReactNode
}

export const AnimeScreenshots = () => {
  const { animeUrl } = useParams<AnimePageParams>()
  const { data } = useAnimeScreenshotsQuery(animeUrl)

  if (!data) return null

  return (
    <NoSSR>
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
    </NoSSR>
  )
}
