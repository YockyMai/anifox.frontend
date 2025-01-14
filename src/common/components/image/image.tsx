'use client'

import { clsx } from 'clsx'
import NextImage from 'next/image'
import { ForwardedRef, forwardRef } from 'react'

import { BLUR_DATA_URL } from './image.const'
import './image.css'
import { ImageProps } from './image.interface'

const Image = (
  {
    alt,
    width,
    height,
    className,
    fit = 'cover',
    src,
    quality,
    priority,
    ...other
  }: ImageProps,
  ref: ForwardedRef<HTMLImageElement>
) => {
  const sizeAttached =
    typeof width !== 'undefined' && typeof height !== 'undefined'

  return (
    <NextImage
      priority={priority}
      blurDataURL={BLUR_DATA_URL}
      placeholder='blur'
      style={{ objectFit: fit }}
      quality={quality}
      fill={!sizeAttached}
      width={sizeAttached ? width : undefined}
      height={sizeAttached ? height : undefined}
      ref={ref}
      src={src ?? ''}
      alt={alt ?? 'Отсутствует изображение'}
      className={clsx('image', className)}
      {...other}
    />
  )
}

export default forwardRef(Image)
