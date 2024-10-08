import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  fit?: CSSProperties['objectFit']
  alt?: string
}
