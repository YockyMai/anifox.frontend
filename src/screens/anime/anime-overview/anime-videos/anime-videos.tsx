import { Carousel } from '@anifox/ui'
import { useRef } from 'react'
import { useParams } from 'react-router'

import { useAnimeVideosQuery } from '@/services/queries'

import { AnimePageParams } from '../../anime.interface'
import { SLIDE_WIDTH } from './anime-videos.const'
import './anime-videos.css'

export const AnimeVideos = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { animeUrl } = useParams<AnimePageParams>()

  const { data = [] } = useAnimeVideosQuery(animeUrl!)

  return (
    <div ref={containerRef} className='w-full'>
      <Carousel
        dragFree
        slideSpacing={10}
        align='end'
        slides={data.map((video) => ({
          content: (
            <div key={video.player_url} className='anime-video'>
              <iframe
                width={'100%'}
                height={'100%'}
                src={video.player_url.replace('http', 'https')}
                allowFullScreen
              />
            </div>
          ),
          size: SLIDE_WIDTH
        }))}
      />
    </div>
  )
}
