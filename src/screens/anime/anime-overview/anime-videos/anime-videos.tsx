'use client'

import { Carousel, NoSSR, Slide } from '@anifox/ui'
import { useParams } from 'next/navigation'
import React, { useMemo } from 'react'

import { useAnimeVideosQuery } from '@/services/queries'

import { AnimePageParams } from '../../anime.interface'
import './anime-videos.css'

export const AnimeVideos = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data } = useAnimeVideosQuery(animeUrl)

  const slides = useMemo<Slide[]>(
    () =>
      (data ?? []).map((video) => ({
        content: (
          <div key={video.player_url} className={'anime-video'}>
            <iframe
              width={'100%'}
              height={'100%'}
              src={video.player_url.replace('http', 'https')}
              allowFullScreen
            />
          </div>
        ),
        size: '25%'
      })),
    [data]
  )

  return <Carousel dragFree slideSpacing={10} align='end' slides={slides} />
}
