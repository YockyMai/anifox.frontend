import { Image, useHover } from '@anifox/ui'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { AnimeCardPanel } from '../anime-card-panel'
import { AnimeStatusCardProps } from './anime-status-card.interface'
import { AnimeStatusMenu } from './anime-status-menu'

export const AnimeStatusCard = ({
  anime,
  onDeleteButtonClick,
  onEditButtonClick
}: AnimeStatusCardProps) => {
  const { isHovered, hoverProps } = useHover()

  return (
    <div {...hoverProps} className='relative flex flex-col'>
      <div className='relative flex items-center justify-between overflow-hidden py-1 pl-3'>
        <div className='flex flex-[7] items-center'>
          <div className='w-[40px]'>
            <Link
              to={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}
            >
              <div className='aspect-[3/4] h-full py-1'>
                <Image src={anime.image.medium} />
              </div>
            </Link>
          </div>
          <Link to={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}>
            <p className='pl-3 font-semibold'>{anime.title}</p>
          </Link>
        </div>

        <div className='flex flex-1 items-center justify-center gap-x-1.5'></div>

        <div className='flex flex-1 items-center justify-center gap-x-1.5'></div>

        <AnimeStatusMenu
          isCardHovered={isHovered}
          anime={anime}
          onDeleteButtonClick={onDeleteButtonClick}
          onEditButtonClick={onEditButtonClick}
        />
      </div>

      {isHovered && (
        <div className='absolute left-0 top-1/2 w-[300px] -translate-x-[calc(100%+10px)] -translate-y-1/2'>
          <AnimeCardPanel anime={anime} />
        </div>
      )}
    </div>
  )
}
