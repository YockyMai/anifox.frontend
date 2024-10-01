'use client'

import { IconPhotoOff } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { ForwardedRef, forwardRef, useState } from 'react'

import './image.css'
import { ImageProps } from './image.interface'

const Image = (
  { fit, alt, width, height, className, src, ...other }: ImageProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const onLoad = () => {
    setIsLoaded(true)
  }
  const onError = () => {
    console.log('error')
    setIsError(true)
  }

  return (
    <div
      style={{ width, height }}
      className={clsx('image', className)}
      ref={ref}
    >
      <img
        style={{ objectFit: fit }}
        src={src ?? ''}
        {...other}
        onLoad={onLoad}
        onError={onError}
        alt={alt ?? 'Отсутствует изображение'}
        className={clsx('image__view', isLoaded && 'image_loaded')}
      />
      {!isLoaded && !isError && (
        <span className={clsx('image__status', 'image__loader')} />
      )}
      {!isLoaded && isError && (
        <div className='image__status image__error image_loaded'>
          <IconPhotoOff />
          <p>Отсутствует изображение</p>
        </div>
      )}
    </div>
  )
}

export default forwardRef(Image)
