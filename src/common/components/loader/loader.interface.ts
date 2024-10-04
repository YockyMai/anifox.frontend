import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UIColor } from '@/common/types/ui-colors'
import { UISize } from '@/common/types/ui-sizes'

export interface LoaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLSpanElement> {
  size?: UISize
  color?: UIColor | 'light'
  custom?: ReactNode
}
