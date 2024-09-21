import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { UIColor } from '@/main'
import { UISize } from '@/shared/types/ui-sizes'

export type ProgressBarProps = {
  color?: UIColor
  radius?: UISize
  size?: UISize
  progress: number | `${number}%`
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
