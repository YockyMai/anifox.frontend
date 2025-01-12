'use client'

import { useHover } from '@anifox/hooks'
import { IconSearch } from '@tabler/icons-react'
import clsx from 'clsx'

import { Image, Transition } from '@/common/components'
import { DEFAULT_DELEGATE_VALUE } from '@/common/components/fancybox'

import './character-picture.css'
import { CharacterPictureProps } from './character-picture.interface'

export const CharacterPicture = ({ src }: CharacterPictureProps) => {
  const { isHovered, hoverProps } = useHover()

  return (
    <div {...hoverProps} className='character-picture'>
      <a href={src} data-fancybox={DEFAULT_DELEGATE_VALUE}>
        <Image
          className={clsx(
            'character-picture__image',
            isHovered && 'brightness-50'
          )}
          alt={'character picture'}
          src={src}
        />

        <Transition mounded={isHovered}>
          <div className='character-picture__icon'>
            <IconSearch />
          </div>
        </Transition>
      </a>
    </div>
  )
}
