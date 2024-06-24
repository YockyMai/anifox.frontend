'use client'

import { Badge, Breakpoints, Image } from '@anifox/ui'
import { useAtomValue } from 'jotai'
import { useParams } from 'next/navigation'

import { $windowAtoms } from '@/common/store/window'
import { AnimeRateButton } from '@/entities/anime/anime-rating'
import { AnimePageParams } from '@/pages/anime/anime.interface'
import { useAnimeQuery } from '@/services/queries'

import './anime-content.css'
import { AnimeContentBackground, AnimeContentInfo } from './ui'

export const AnimeContent = () => {
  const windowWidth = useAtomValue($windowAtoms.windowWidth)

  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery(animeUrl)

  return (
    <div className='anime-content'>
      <AnimeContentBackground />

      <div className='anime-content__body'>
        <div className='anime-content__poster'>
          <Image
            className='anime-content__poster__image'
            fit={'cover'}
            src={data!.image.large}
            alt={'Постер аниме'}
          />

          <Badge className={'anime-content__poster__badge'}>
            {data!.minimal_age ? `${data!.minimal_age}+` : data!.rating_mpa}
          </Badge>

          {/* {windowWidth >= Breakpoints.LG && <AnimeListManageBtns />} */}
        </div>

        <div className='anime-content__info'>
          <div className='anime-content__info__top-section'>
            <AnimeRateButton animeUrl={animeUrl} rating={data?.rating ?? 0} />

            <div className={'anime-content__info__title'}>
              <h1>{data!.title}</h1>
            </div>

            {/* {screenWidth < Breakpoints.lg && <AnimeListManageBtns />} */}
          </div>
          {windowWidth >= Breakpoints.LG && (
            <>
              <AnimeContentInfo />
              {/* <Description /> */}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
