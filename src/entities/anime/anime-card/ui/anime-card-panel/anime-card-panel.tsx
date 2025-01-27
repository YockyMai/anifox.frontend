'use client'

import { UnstyledButton, Image, Badge, MarqueeText } from '@/common/components'

import { getAnimeAccentColorStyles } from '../../helpers'
import './anime-card-panel.css'
import { AnimeCardPanelProps } from './anime-card-panel.interface'

export const AnimeCardPanel = ({ anime }: AnimeCardPanelProps) => {
  const cardAccentColorsStyles = getAnimeAccentColorStyles(
    anime.accent_color,
    'light'
  )

  return (
    <div style={cardAccentColorsStyles} className='anime-card-panel'>
      {anime.image?.cover && (
        <div className='anime-card-panel__cover-image'>
          <Image alt={`Постер аниме ${anime.title}`} src={anime.image?.cover} />
        </div>
      )}

      {anime.minimal_age ? (
        <UnstyledButton className='anime-card-panel__rating-mpa'>
          <Badge className='anime-card-panel__rating-mpa__badge'>
            {anime.minimal_age}+
          </Badge>
        </UnstyledButton>
      ) : (
        anime.rating_mpa && (
          <UnstyledButton className='anime-card-panel__rating-mpa'>
            <Badge className='anime-card-panel__rating-mpa__badge'>
              {anime.rating_mpa}
            </Badge>
          </UnstyledButton>
        )
      )}

      <div className='anime-card-panel__content'>
        <MarqueeText paddingX={15}>
          <h3 title={anime.title} className='anime-card-panel__title'>
            {anime.title}
          </h3>
        </MarqueeText>
        <div className='px-4'>
          <p className='anime-card-panel__season'>
            {anime.season && anime.season}
            {anime.season && anime.year && ', '}
            {anime.year && `${anime.year} год`}
          </p>

          <div className='anime-card-panel__studio'>
            {anime.studio && anime.studio.length > 0 && (
              <p className='anime-card-panel__studio__name'>
                Студия {anime.studio[0].name}
              </p>
            )}
            <div className='anime-card-panel__progress'>
              <p>{anime.episodes_aired} серий</p>
              <p>—</p>
              <p className='anime-card-panel__status'>
                {anime.status === 'Released' ? 'Выпущен' : 'Онгоинг'}
              </p>
            </div>
          </div>

          {anime.genres && anime.genres.length > 0 && (
            <div className='anime-card-panel__genres'>
              {anime.genres.map(({ name, id }, index) => {
                if (index < 3)
                  return (
                    <div className='anime-card-panel__genre' key={id}>
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
