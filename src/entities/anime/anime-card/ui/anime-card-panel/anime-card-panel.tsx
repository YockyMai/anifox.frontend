import { Image, Badge, MarqueeText } from '@anifox/ui'
import { useMemo } from 'react'

import { AnimeStatus } from '@/graphql/generated/output'

import { getAnimeAccentColorStyles } from '../../helpers'
import { AnimeCardPanelProps } from './anime-card-panel.interface'

export const AnimeCardPanel = ({ anime }: AnimeCardPanelProps) => {
  const cardAccentColorsStyles = getAnimeAccentColorStyles(
    anime.accentColor,
    'light'
  )

  const minimalAgeContent = useMemo(() => {
    if (typeof anime.minimalAge === 'number') {
      return `${anime.minimalAge}+`
    } else if (anime.minimalAge) {
      return anime.minimalAge
    }

    return null
  }, [])

  return (
    <div
      style={cardAccentColorsStyles}
      className='relative overflow-hidden rounded-md bg-slate-100 drop-shadow dark:bg-slate-800'
    >
      {anime.image?.cover && (
        <div className='relative h-16 w-full'>
          <Image alt={`Постер аниме ${anime.title}`} src={anime.image?.cover} />
        </div>
      )}

      {minimalAgeContent && (
        <Badge className='absolute right-2 top-1 rounded bg-[var(--card-background-color)] px-0.5 text-[var(--card-background-text-color)] backdrop-blur-2xl'>
          {minimalAgeContent}
        </Badge>
      )}

      <div className='py-2'>
        <MarqueeText paddingX={15}>
          <h3
            title={anime.title}
            className='line-clamp-1 text-[var(--card-overlay-text-color)]'
          >
            {anime.title}
          </h3>
        </MarqueeText>
        <div className='px-4'>
          <p className='text-sm'>
            {anime.season && anime.season}
            {anime.season && anime.year && ', '}
            {anime.year && `${anime.year} год`}
          </p>

          <div className='my-1'>
            {anime.studios && anime.studios.length > 0 && (
              <p className='w-fit text-sm text-[var(--card-overlay-text-color)]'>
                Студия {anime.studios[0].name}
              </p>
            )}
            <div className='my-0.5 flex items-center justify-between'>
              <p>{anime.episodesAired} серий</p>
              <p>—</p>
              <p>
                {anime.status === AnimeStatus.ONGOING ? 'Выпущен' : 'Онгоинг'}
              </p>
            </div>
          </div>

          {anime.genres && anime.genres.length > 0 && (
            <div className='mt-4 flex flex-wrap items-center gap-1.5'>
              {anime.genres.map(({ name, id }, index) => {
                if (index < 3)
                  return (
                    <div
                      className='grow whitespace-nowrap rounded-full bg-[var(--card-background-color)] p-1 px-3 text-center text-xs text-[var(--card-background-text-color)]'
                      key={id}
                    >
                      {name}
                    </div>
                  )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
