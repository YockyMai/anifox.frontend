import { DEFAULT_DELEGATE_VALUE, Fancybox, Image } from '@anifox/ui'
import { Badge } from '@anifox/ui'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'

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
    <div className='relative bg-slate-200/80 dark:bg-slate-800/80 max-md:mt-[--header-height]'>
      <AnimeContentBackground />

      <div className='container relative z-10 mx-auto -mt-10 grid grid-rows-[auto_auto] gap-6 pb-3 max-lg:gap-2 max-lg:px-2 lg:grid-cols-[220px_auto] lg:px-6'>
        <div className='relative flex flex-col gap-y-1.5 max-lg:mx-auto'>
          <div className='transition-transform hover:-translate-y-3 hover:scale-105'>
            {anime?.image.large ? (
              <Fancybox>
                <a
                  data-fancybox={DEFAULT_DELEGATE_VALUE}
                  href={anime.image.large}
                >
                  <Image
                    className='h-80 rounded'
                    src={anime.image.large}
                    alt='Постер аниме'
                    width={220}
                    height={320}
                  />
                </a>
              </Fancybox>
            ) : (
              <div className='h-[320px] w-[220px] animate-pulse bg-slate-300 dark:bg-slate-800' />
            )}

            {anime && (
              <Badge className='absolute left-1 top-2'>
                {anime.minimalAge ? `${anime.minimalAge}+` : anime.ratingMpa}
              </Badge>
            )}
          </div>

          <WatchAnimeButton />
        </div>

        <div className='grid grid-rows-[auto_auto_1fr] gap-y-3'>
          <div className='flex flex-col justify-between gap-y-2'>
            <AnimeActionBar />

            {anime ? (
              <h1 className='mt-6 dark:text-white max-lg:text-center'>
                {anime.title}
              </h1>
            ) : (
              <div className='mt-6 h-[32px] w-1/2 animate-pulse rounded bg-slate-300 dark:bg-slate-800' />
            )}
          </div>

          <AnimeContentInfo />
          <AnimeDescription />
        </div>
      </div>
    </div>
  )
}
