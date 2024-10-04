import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { UIColor } from '@/common/types/ui-colors'
import { UISize } from '@/common/types/ui-sizes'

export type ProgressBarProps = {
  color?: UIColor
  radius?: UISize
  size?: UISize
  progress: number | `${number}%`
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
