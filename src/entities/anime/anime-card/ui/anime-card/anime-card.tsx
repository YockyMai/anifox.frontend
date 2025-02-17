import { HoverCard } from '@anifox/ui'

import { AnimeCardPanel } from '../anime-card-panel'
import { AnimeCardContent } from './anime-card-content'
import { AnimeCardProps } from './anime-card.interface'

export const AnimeCard = ({ anime, label, withoutPanel }: AnimeCardProps) => {
  return (
    <div className='relative w-full'>
      {withoutPanel ? (
        <AnimeCardContent anime={anime} label={label} />
      ) : (
        <HoverCard
          width={280}
          position='right'
          unstyled
          triggerClassName='!w-full'
          closeDelay={0}
          hideWhenDetached
          trigger={
            <div>
              <AnimeCardContent anime={anime} label={label} />
            </div>
          }
        >
          <AnimeCardPanel anime={anime} />
        </HoverCard>
      )}
    </div>
  )
}
