import { Badge, HoverCard, Image } from '@anifox/ui'
import { clsx } from 'clsx'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'

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
        {(episode.filler || episode.recap) && (
          <div className='episode-card__additional-info'>
            <HoverCard
              openDelay={500}
              trigger={
                <Badge className='' size={UISizes.SM} color={UIColors.RED}>
                  Филлер
                </Badge>
              }
            >
              <p className='text-xs'>
                Филлер — серия, не связанная с основным сюжетом
              </p>
            </HoverCard>

            <HoverCard
              openDelay={500}
              trigger={
                <Badge className='' size={UISizes.SM} color={UIColors.PURPLE}>
                  Рекап
                </Badge>
              }
            >
              <p className='text-xs'>
                Рекап — разновидность филлера, эпизод с воспоминаниями одного
                или нескольких героев о пережитых событиях
              </p>
            </HoverCard>
          </div>
        )}
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
