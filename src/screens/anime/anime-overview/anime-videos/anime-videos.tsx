import {
  Carousel,
  DEFAULT_DELEGATE_VALUE,
  Fancybox,
  HoverIcon,
  Image
} from '@anifox/ui'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import { useRef } from 'react'
import { useParams } from 'react-router'

import { useAnimeVideosQuery } from '@/services/queries'

import { AnimePageParams } from '../../anime.interface'
import { SLIDE_WIDTH } from './anime-videos.const'

export const AnimeVideos = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { animeUrl } = useParams<AnimePageParams>()

  const { data = [] } = useAnimeVideosQuery(animeUrl!)

  return (
    <div ref={containerRef} className='w-full'>
      <Fancybox>
        <Carousel
          dragFree
          slideSpacing={10}
          align='end'
          slides={data.map((video) => ({
            content: (
              <HoverIcon
                icon={<IconPlayerPlayFilled className='fill-white' size={32} />}
                key={video.player_url}
              >
                <a
                  href={video.player_url.replace('http', 'https')}
                  data-fancybox={DEFAULT_DELEGATE_VALUE}
                >
                  <div className='aspect-[16/9] overflow-hidden rounded'>
                    <Image width={'100%'} height={'100%'} src={video.image} />
                  </div>
                </a>
              </HoverIcon>
            ),
            size: SLIDE_WIDTH
          }))}
        />
      </Fancybox>
    </div>
  )
}
