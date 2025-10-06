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

import { useAnimeQuery } from '@/graphql/generated/output'

import { AnimePageParams } from '../../anime.interface'
import { SLIDE_WIDTH } from './anime-videos.const'

export const AnimeVideos = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { animeUrl } = useParams<AnimePageParams>()

  const { data } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const videos = data?.anime.videos ?? []

  return (
    <div ref={containerRef} className='w-full'>
      <Fancybox>
        <Carousel
          dragFree
          slideSpacing={10}
          align='end'
          slides={videos.map((video) => ({
            content: (
              <HoverIcon
                icon={<IconPlayerPlayFilled className='fill-white' size={32} />}
                key={video.playerUrl}
              >
                <a
                  href={video.playerUrl.replace('http', 'https')}
                  data-fancybox={DEFAULT_DELEGATE_VALUE}
                >
                  <div className='aspect-[16/9] overflow-hidden rounded'>
                    <Image
                      width={'100%'}
                      height={'100%'}
                      src={video.imageUrl ?? data?.anime.image.medium ?? ''}
                    />
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
