import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UIColor } from '@/shared/types/ui-colors'
import { UISize } from '@/shared/types/ui-sizes'

export interface LoaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLSpanElement> {
  size?: UISize
  color?: UIColor
  custom?: ReactNode
}
