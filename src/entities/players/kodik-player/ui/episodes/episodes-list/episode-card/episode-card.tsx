import {
  Badge,
  HoverCard,
  Image,
  Transition,
  UnstyledButton,
  useHover
} from '@anifox/ui'
import { clsx } from 'clsx'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'

import './episode-card.css'
import { EpisodeCardProps } from './episode-card.interface'
import { EpisodeProgress } from './episode-progress/episode-progress'

export const EpisodeSelectionCard = ({
  episode,
  isSelected,
  onOpenFullInfo
}: EpisodeCardProps) => {
  const { isHovered, hoverProps } = useHover()

  return (
    <div
      {...hoverProps}
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

        <Transition
          mounded={!!(onOpenFullInfo && isHovered)}
          animation='fade'
          duration='sm'
        >
          <UnstyledButton
            onClick={onOpenFullInfo}
            className='absolute bottom-0.5 left-1/2 -translate-x-1/2 rounded bg-slate-900/70 px-1.5 py-0.5 backdrop-blur-xl'
          >
            <p className='text-nowrap text-xs text-white'>Показать описание</p>
          </UnstyledButton>
        </Transition>

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
        {episode.duration && episode.progress && (
          <EpisodeProgress
            episodeDuration={episode.duration}
            progress={episode.progress}
          />
        )}
      </div>
    </div>
  )
}
