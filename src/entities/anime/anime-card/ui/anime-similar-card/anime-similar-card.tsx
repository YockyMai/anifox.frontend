import { Image } from '@anifox/ui'
import { IconCircle } from '@tabler/icons-react'

import { AnimeSimilarCardProps } from './anime-similar-card.interface'

export const AnimeSimilarCard = ({ anime }: AnimeSimilarCardProps) => {
  return (
    <div>
      <div className='relative'>
        <div className='aspect-[3/4] h-full w-full rounded'>
          <Image
            fit='cover'
            width='100%'
            height='100%'
            src={anime.image.medium ?? ''}
            alt={`Изображение ${anime.title}`}
          />
        </div>
        <div className='absolute bottom-1 left-1/2 flex w-[95%] -translate-x-1/2 items-center justify-center gap-x-1 rounded bg-slate-800/80 py-1 text-white backdrop-blur-md'>
          {anime.year && <p className='text-xs'>{anime.year} г.</p>}
          {anime.year && anime.episodesAired && <IconCircle />}
          {anime.episodesAired && (
            <p className='text-xs'>{anime.episodesAired} эп.</p>
          )}
        </div>
      </div>
      <p className='line-clamp-2 text-xs'>{anime.title}</p>
    </div>
  )
}

export const SimilarAnimeCardLoader = () => {
  return (
    <div className='flex flex-col'>
      <div className='mb-1 aspect-[3/4] w-full animate-pulse rounded bg-slate-300 dark:bg-slate-800' />
      <div className='h-3 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-800' />
    </div>
  )
}
