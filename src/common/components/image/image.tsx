'use client'

import { clsx } from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import './image.css'
import { ImageProps } from './image.interface'

const Image = (
  { fit, alt, width, height, className, src, ...other }: ImageProps,
  ref: ForwardedRef<HTMLImageElement>
) => {
  return (
    <img
      ref={ref}
      style={{ objectFit: fit ?? 'cover' }}
      src={src ?? ''}
      {...other}
      alt={alt ?? 'Отсутствует изображение'}
      className={clsx('image', className)}
    />
  )
}

export default forwardRef(Image)
