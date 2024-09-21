'use client'

import { useHover } from '@anifox/hooks'
import { IconSearch } from '@tabler/icons-react'
import clsx from 'clsx'
import Image from 'next/image'

import { Transition } from '@/common/components'
import { DEFAULT_DELEGATE_VALUE } from '@/common/components/fancybox'

import { ANIME_SCREENSHOT_SIZE } from '../anime-screenshots.const'
import './anime-screenshot.css'
import { AnimeScreenshotProps } from './anime-screenshot.interface'

export const AnimeScreenshot = ({ src, alt }: AnimeScreenshotProps) => {
  const { isHovered, hoverProps } = useHover()

  return (
    <div {...hoverProps} className='anime-screenshot'>
      <a href={src} data-fancybox={DEFAULT_DELEGATE_VALUE}>
        <Image
          className={clsx(
            'anime-screenshot__image',
            isHovered && 'brightness-50'
          )}
          quality={45}
          width={ANIME_SCREENSHOT_SIZE.WIDTH}
          height={ANIME_SCREENSHOT_SIZE.HEIGHT}
          alt={alt ?? ''}
          src={src}
        />

        <Transition mounded={isHovered}>
          <div className='anime-screenshot__icon'>
            <IconSearch />
          </div>
        </Transition>
      </a>
    </div>
  )
}
