'use client'

import { Badge } from '@anifox/ui'
import Image from 'next/image'
import { useParams } from 'next/navigation'

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

  const { data } = useAnimeQuery(animeUrl)

  return (
    <div className='anime-content'>
      <AnimeContentBackground />

      <div className='anime-content__body'>
        <div className='anime-content__poster'>
          <Image
            className='anime-content__poster__image'
            src={data!.image.large}
            alt={'Постер аниме'}
            width={220}
            height={320}
          />

          <Badge className={'anime-content__poster__badge'}>
            {data!.minimal_age ? `${data!.minimal_age}+` : data!.rating_mpa}
          </Badge>

          <WatchAnimeButton />
        </div>

        <div className='anime-content__info'>
          <div className='anime-content__info__top-section'>
            <AnimeActionBar />

            <div className={'anime-content__info__title'}>
              <h1>{data!.title}</h1>
            </div>
          </div>

          <AnimeContentInfo />
          <AnimeDescription />
        </div>
      </div>
    </div>
  )
}
