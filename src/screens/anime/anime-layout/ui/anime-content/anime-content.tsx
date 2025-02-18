import { DEFAULT_DELEGATE_VALUE, Fancybox, Image } from '@anifox/ui'
import { Badge } from '@anifox/ui'
import { useParams } from 'react-router'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery } from '@/services/queries'

import './anime-content.css'
import {
  AnimeContentBackground,
  AnimeContentInfo,
  WatchAnimeButton,
  AnimeActionBar,
  AnimeDescription
} from './ui'

export const AnimeContent = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data, isSuccess } = useAnimeQuery(animeUrl!)

  return (
    <div className='anime-content'>
      <AnimeContentBackground />

      <div className='anime-content__body'>
        <div className='anime-content__poster'>
          <div className='transition-transform hover:-translate-y-3 hover:scale-105'>
            {isSuccess ? (
              <Fancybox>
                <a
                  data-fancybox={DEFAULT_DELEGATE_VALUE}
                  href={data.image.large}
                >
                  <Image
                    className='anime-content__poster__image'
                    src={data.image.large}
                    alt='Постер аниме'
                    width={220}
                    height={320}
                  />
                </a>
              </Fancybox>
            ) : (
              <div className='anime-content__poster__image-loader' />
            )}

            {isSuccess && (
              <Badge className={'anime-content__poster__badge'}>
                {data?.minimal_age ? `${data.minimal_age}+` : data?.rating_mpa}
              </Badge>
            )}
          </div>

          <WatchAnimeButton />
        </div>

        <div className='anime-content__info'>
          <div className='anime-content__info__top-section'>
            <AnimeActionBar />

            {isSuccess ? (
              <h1 className='anime-content__info__title'>{data.title}</h1>
            ) : (
              <div className='anime-content__info__title-loader' />
            )}
          </div>

          <AnimeContentInfo />
          <AnimeDescription />
        </div>
      </div>
    </div>
  )
}
