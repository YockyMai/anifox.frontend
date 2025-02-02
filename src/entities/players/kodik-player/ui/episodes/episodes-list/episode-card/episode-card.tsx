import { clsx } from 'clsx'

import { Image } from '@/common/components'

import './episode-card.css'
import { EpisodeCardProps } from './episode-card.interface'

export const EpisodeSelectionCard = ({
  episode,
  isSelected
}: EpisodeCardProps) => {
  return (
    <div
      className={clsx('episode-card', isSelected && 'episode-card_selected')}
    >
      <div className='episode-card__image-container'>
        <Image
          className={'episode-card__image'}
          src={episode.image}
          width={130}
          height={84}
          alt={episode.title ?? ''}
        />
      </div>

      <div className='episode-card__content'>
        <p
          title={episode.title}
          className={clsx(
            'episode-card__content__title',
            !episode.description && 'line-clamp-none'
          )}
        >
          {!episode.title ? (
            <>{episode.number} серия</>
          ) : (
            <>
              {episode.number}. {episode.title}
            </>
          )}
        </p>
        <p
          title={episode.description ?? ''}
          className={'episode-card__content__description'}
        >
          {episode.description}
        </p>
      </div>
    </div>
  )
}
