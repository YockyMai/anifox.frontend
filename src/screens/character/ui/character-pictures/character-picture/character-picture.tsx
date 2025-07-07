import { Image, Transition, DEFAULT_DELEGATE_VALUE, useHover } from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import clsx from 'clsx'

import { CharacterPictureProps } from './character-picture.interface'

export const CharacterPicture = ({ src }: CharacterPictureProps) => {
  const { isHovered, hoverProps } = useHover()

  return (
    <div
      {...hoverProps}
      className='relative h-[160px] w-auto flex-shrink-0 cursor-pointer overflow-hidden rounded'
    >
      <a href={src} data-fancybox={DEFAULT_DELEGATE_VALUE}>
        <Image
          className={clsx(
            'h-[160px] w-full rounded-md object-cover drop-shadow-lg transition-all',
            isHovered && 'brightness-50'
          )}
          alt={'character picture'}
          src={src}
        />

        <Transition mounded={isHovered}>
          <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-2xl'>
            <IconSearch className='stroke-white' />
          </div>
        </Transition>
      </a>
    </div>
  )
}
