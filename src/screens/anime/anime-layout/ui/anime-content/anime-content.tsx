import { useParams } from 'react-router'

import { Image } from '@/common/components'
import { Badge } from '@/common/components'
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
          {isSuccess ? (
            <Image
              className='anime-content__poster__image'
              src={data.image.large}
              alt='Постер аниме'
              width={220}
              height={320}
            />
          ) : (
            <div className='anime-content__poster__image-loader' />
          )}

          {isSuccess && (
            <Badge className={'anime-content__poster__badge'}>
              {data?.minimal_age ? `${data.minimal_age}+` : data?.rating_mpa}
            </Badge>
          )}

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
