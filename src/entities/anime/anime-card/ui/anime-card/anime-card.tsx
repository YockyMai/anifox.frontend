import { Tooltip } from '@anifox/ui'

import { AnimeCardPanel } from '../anime-card-panel'
import { AnimeCardContent } from './anime-card-content'
import { AnimeCardProps } from './anime-card.interface'

export const AnimeCard = ({
  anime,
  label,
  withoutPanel,
  labelWhite
}: AnimeCardProps) => {
  return (
    <div className='relative w-full'>
      {withoutPanel ? (
        <AnimeCardContent labelWhite={labelWhite} anime={anime} label={label} />
      ) : (
        <Tooltip
          width={280}
          position='right'
          unstyled
          openDelay={0}
          label={<AnimeCardPanel anime={anime} />}
        >
          <div className='w-full'>
            <AnimeCardContent
              labelWhite={labelWhite}
              anime={anime}
              label={label}
            />
          </div>
        </Tooltip>
      )}
    </div>
  )
}
