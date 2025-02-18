import { Image, DEFAULT_DELEGATE_VALUE, HoverIcon } from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'

import './anime-screenshot.css'
import { AnimeScreenshotProps } from './anime-screenshot.interface'

export const AnimeScreenshot = ({
  src,
  alt,
  isLoading
}: AnimeScreenshotProps) => {
  return (
    <HoverIcon icon={<IconSearch className='stroke-white' />}>
      <div className='h-[--image-height] w-auto cursor-pointer overflow-hidden rounded'>
        <a href={src} data-fancybox={DEFAULT_DELEGATE_VALUE}>
          {isLoading ? (
            <div className='h-full w-[247px] animate-pulse bg-slate-200 dark:bg-slate-700' />
          ) : (
            <Image
              className='h-full w-[247px] object-cover transition-all'
              alt={alt ?? ''}
              src={src}
            />
          )}
        </a>
      </div>
    </HoverIcon>
  )
}
