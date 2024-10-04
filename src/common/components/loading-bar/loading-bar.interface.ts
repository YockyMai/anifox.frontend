import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { UIColor } from '@/common/types/ui-colors'
import { UISize } from '@/common/types/ui-sizes'

export type LoadingBarProps = {
  width?: number
  color?: UIColor
  animationDuration?: number
  radius?: UISize
  size?: UISize
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
