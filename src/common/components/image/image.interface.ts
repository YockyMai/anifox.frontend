import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export type ImageProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'height' | 'width' | 'loading' | 'ref' | 'alt' | 'src' | 'srcSet'
> & {
  src: string | StaticImport
  alt?: string
  width?: number | `${number}`
  height?: number | `${number}`
  quality?: number | `${number}`
  priority?: boolean
  fit?: CSSProperties['objectFit']
}
