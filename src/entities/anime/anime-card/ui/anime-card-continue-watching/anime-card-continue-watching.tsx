import { Badge, Button, Image } from '@anifox/ui'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { AnimeCardContinueWatchingProps } from './anime-card-continue-watching.interface'

export const AnimeCardContinueWatching = ({
  info
}: AnimeCardContinueWatchingProps) => {
  const { anime, episode } = info

  const episodeDurationInMinutes = Math.floor(
    (episode.progress?.timing ?? 1) / 60
  )

  const percent = Math.floor(
    ((episode.progress?.timing ?? 1) / ((episode.duration ?? 24) * 60)) * 100
  )

  return (
    <div className='relative my-3 items-baseline overflow-hidden rounded bg-white drop-shadow-sm dark:bg-slate-800'>
      <Image
        className='h-[60px] w-full !rounded-none'
        src={anime.image.cover ?? anime.image.medium ?? ''}
      />
      <div className='p-3'>
        <Link to={ROUTES.CATALOG.ANIME.ROOT(info.anime.id, info.anime.url)}>
          <div className='flex items-center gap-x-2 pt-3'>
            <div className='aspect-[6/7] h-14'>
              <Image src={anime.image.medium ?? ''} />
            </div>

            <p className='font-bold dark:text-white'>{anime.title}</p>
          </div>
        </Link>

        <div className='flex items-center justify-between py-5'>
          <Badge className='w-fit' size='sm' color='red'>
            Остановились на {episode.number} серии
          </Badge>

          <p className='text-sm text-slate-600 dark:text-slate-300'>
            {episode.duration} мин.
          </p>
        </div>

        <Link to={ROUTES.CATALOG.ANIME.ROOT(info.anime.id, info.anime.url)}>
          <Button fullWidth size='sm' color='purple' variant='light'>
            Продолжить с {episodeDurationInMinutes} минуты
          </Button>
        </Link>
      </div>

      <div style={{ width: `${percent}%` }} className='h-1.5 bg-orange-400' />
    </div>
  )
}
