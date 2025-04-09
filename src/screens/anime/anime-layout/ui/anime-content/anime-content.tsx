import { DEFAULT_DELEGATE_VALUE, Fancybox, Image } from '@anifox/ui'
import { Badge } from '@anifox/ui'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'

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

  const { data } = useAnimeQuery({
    variables: { url: animeUrl! }
  })

  const anime = data?.anime

  return (
    <div className='anime-content'>
      <AnimeContentBackground />

      <div className='anime-content__body'>
        <div className='anime-content__poster'>
          <div className='transition-transform hover:-translate-y-3 hover:scale-105'>
            {anime?.image.large ? (
              <Fancybox>
                <a
                  data-fancybox={DEFAULT_DELEGATE_VALUE}
                  href={anime.image.large}
                >
                  <Image
                    className='anime-content__poster__image'
                    src={anime.image.large}
                    alt='Постер аниме'
                    width={220}
                    height={320}
                  />
                </a>
              </Fancybox>
            ) : (
              <div className='anime-content__poster__image-loader' />
            )}

            {anime && (
              <Badge className={'anime-content__poster__badge'}>
                {anime.minimalAge ? `${anime.minimalAge}+` : anime.ratingMpa}
              </Badge>
            )}
          </div>

          <WatchAnimeButton />
        </div>

        <div className='anime-content__info'>
          <div className='anime-content__info__top-section'>
            <AnimeActionBar />

            {anime ? (
              <h1 className='anime-content__info__title'>{anime.title}</h1>
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
