import { Image, MarqueeText, useHover } from '@anifox/ui'
import { IconStarFilled } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { AnimeStatusCardProps } from './anime-status-card.interface'
import { AnimeStatusMenu } from './anime-status-menu'

export const AnimeStatusCard = ({
  anime,
  dragControls,
  isDragging
}: AnimeStatusCardProps) => {
  const { isHovered, hoverProps } = useHover()

  return (
    <div {...hoverProps} className='relative flex flex-col overflow-hidden'>
      <div className='flex items-center justify-between pl-3'>
        <div className='w-[50px] flex-none'>
          <Link to={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}>
            <div className='aspect-[3/4] h-full py-1'>
              <Image src={anime.image.medium} />
            </div>
          </Link>
        </div>

        <div className='flex-[7]'>
          <p className='pl-3 font-semibold'>{anime.title}</p>
        </div>

        <div className='flex flex-1 items-center gap-x-1.5'>
          <IconStarFilled className='fill-yellow-500' />
          <p className='text-sm'>8 / 10</p>
        </div>

        <div className='flex flex-1 items-center gap-x-1.5'>
          <IconStarFilled className='fill-yellow-500' />
          <p className='text-sm'>8 / 10</p>
        </div>
      </div>

      <AnimeStatusMenu
        withDragging={false}
        isDragging={isDragging}
        isCardHovered={isHovered}
        anime={anime}
        dragControls={dragControls}
      />
    </div>
  )
}
