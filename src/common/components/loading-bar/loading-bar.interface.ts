import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { UIColor } from '@/main'
import { UISize } from '@/shared/types/ui-sizes'

export type LoadingBarProps = {
  width?: number
  color?: UIColor
  animationDuration?: number
  radius?: UISize
  size?: UISize
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
